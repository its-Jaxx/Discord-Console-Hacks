$path = Join-Path $env:APPDATA "DiscordPTB\settings.json"

if (Test-Path $path) {

    $content = Get-Content $path -Raw

    if ($content -match '"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING"\s*:\s*false') {
        $content = $content -replace '("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING"\s*:\s*)false', '${1}true'
    }

    elseif ($content -notmatch '"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING"\s*:') {

        $newline = if ($content -match "`r`n") { "`r`n" } else { "`n" }

        $lines = $content -split "`r?`n"

        $closingIndex = ($lines | ForEach-Object { $_ }) |
                        ForEach-Object -Begin {$i=0} -Process {
                            if ($_ -match '^\s*\}\s*$') { $script:idx = $i }
                            $i++
                        }
        $closingIndex = $script:idx

        if ($null -ne $closingIndex) {

            $propertyLine = $lines | Where-Object { $_ -match '^\s*"' } | Select-Object -First 1
            if ($propertyLine -match '^(\s+)"') {
                $indent = $matches[1]
            } else {
                $indent = "  "
            }

            $prevIndex = $closingIndex - 1
            while ($prevIndex -ge 0 -and $lines[$prevIndex].Trim() -eq "") {
                $prevIndex--
            }

            if ($lines[$prevIndex] -notmatch ',\s*$') {
                $lines[$prevIndex] = $lines[$prevIndex] + ","
            }

            $lines = $lines[0..($closingIndex-1)] +
                     ($indent + '"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true') +
                     $lines[$closingIndex]
        }

        $content = $lines -join $newline
    }

    Set-Content $path $content -NoNewline
}
