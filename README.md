# Discord-Console-Hacks
In order to use these you need to be able to inspect element to use the console.
To do so, follow these following instructions:
# Quit Discord
Make sure you fully close down Discord using the "Quit Discord" button in the system tray, or use task manager to close it down.

# Change the settings.json file.
You should be able to find this by pressing win+r and entering %appdata% and pressing enter, now, if you're not in roaming already, enter the folder. Then go to the discord folder. In there, you should find the settings.json file.

# What to change
If there is no line saying "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING", add it and add ":true,"
It should look something like this:
<a href="https://imgur.com/a/OguGgZh" target="_blank" rel="noopener noreferrer">Imgur</a>
Now press ctrl+s to save the file. Relaunch Discord, and it should work now.
