<details>
<summary>Warnings/Disclaimer</summary>

⚠️ I am not affiliated with Discord and do not encourage using these scripts. Client modifications of any kind is against Discords terms of use and may result in actions being taken against your account.

</details>

---

### Enable Inspect Element

<details>
<summary>View Platforms</summary>

<details>
<summary>Discord</summary>

<details>
<summary>Option 1</summary>

1. Use `WIN+R` to open the Windows run dialog and paste the following [./SETTINGS/Discord.ps1](https://github.com/its-Jaxx/Discord-Console-Hacks/blob/main/SETTINGS/Discord.ps1) code:

```bash
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr https://raw.githubusercontent.com/its-Jaxx/Discord-Console-Hacks/refs/heads/main/SETTINGS/Discord.ps1 -UseBasicParsing | iex"
```
2. Press enter and wait until the `CMD` window closes down.

3. Fully shut down Discord, it helps to use 'Task Manager' to ensure it is fully closed.

4. Start Discord.

*To check if it worked, use `CTRL+SHIFT+I` on Discord. If you see a bunch of code on the right side, you have succeeded!*
</details>

<details>
<summary>Option 2</summary>

1. Use `WIN+R` to open the Windows 'Run' dialog and paste in `%APPDATA%\Discord\` and press enter.

2. Locate `settings.json` and open it.

3. Add the entry `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` towards the end.

***NOTE:** A comma is necessary after the `"OPEN_ON_STARTUP: true/false"` line for the entry to take effect!*

4. Save and close `settings.json`

5. Fully shut down Discord, it helps to use 'Task Manager' to ensure it is fully closed.

6. Start Discord.

*To check if it worked, use `CTRL+SHIFT+I` on Discord. If you see a bunch of code on the right side, you have succeeded!*
</details>

</details>

<details>
<summary>Discord (PTB)</summary>

<details>
<summary>Option 1</summary>

1. Use `WIN+R` to open the Windows run dialog and paste the following [./SETTINGS/DiscordPTB.ps1](https://github.com/its-Jaxx/Discord-Console-Hacks/blob/main/SETTINGS/DiscordPTB.ps1) code:

```bash
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr https://raw.githubusercontent.com/its-Jaxx/Discord-Console-Hacks/refs/heads/main/SETTINGS/DiscordPTB.ps1 -UseBasicParsing | iex"
```

2. Press enter and wait until the `CMD` window closes down.

3. Fully shut down Discord, it helps to use 'Task Manager' to ensure it is fully closed.

4. Start Discord.

*To check if it worked, use `CTRL+SHIFT+I` on Discord. If you see a bunch of code on the right side, you have succeeded!*
</details>

<details>
<summary>Option 2</summary>

1. Use `WIN+R` to open the Windows 'Run' dialog and paste in `%APPDATA%\DiscordPTB\` and press enter.

2. Locate `settings.json` and open it.

3. Add the entry `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` towards the end.

***NOTE:** A comma is necessary after the `"OPEN_ON_STARTUP: true/false"` line for the entry to take effect!*

4. Save and close `settings.json`

5. Fully shut down Discord, it helps to use 'Task Manager' to ensure it is fully closed.

6. Start Discord.

*To check if it worked, use `CTRL+SHIFT+I` on Discord. If you see a bunch of code on the right side, you have succeeded!*
</details>

</details>

<details>
<summary>Discord (Canary)</summary>

<details>
<summary>Option 1</summary>

1. Use `WIN+R` to open the Windows run dialog and paste the following [./SETTINGS/DiscordCanary.ps1](https://github.com/its-Jaxx/Discord-Console-Hacks/blob/main/SETTINGS/DiscordCanary.ps1) code:

```bash
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr https://raw.githubusercontent.com/its-Jaxx/Discord-Console-Hacks/refs/heads/main/SETTINGS/DiscordCanary.ps1 -UseBasicParsing | iex"
```

2. Press enter and wait until the `CMD` window closes down.

3. Fully shut down Discord, it helps to use 'Task Manager' to ensure it is fully closed.

4. Start Discord.

*To check if it worked, use `CTRL+SHIFT+I` on Discord. If you see a bunch of code on the right side, you have succeeded!*
</details>

<details>
<summary>Option 2</summary>

1. Use `WIN+R` to open the Windows 'Run' dialog and paste in `%APPDATA%\DiscordCanary\` and press enter.

2. Locate `settings.json` and open it.

3. Add the entry `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` towards the end.

***NOTE:** A comma is necessary after the `"OPEN_ON_STARTUP: true/false"` line for the entry to take effect!*

4. Save and close `settings.json`

5. Fully shut down Discord, it helps to use 'Task Manager' to ensure it is fully closed.

6. Start Discord.

*To check if it worked, use `CTRL+SHIFT+I` on Discord. If you see a bunch of code on the right side, you have succeeded!*
</details>

</details>

</details>

---

### Copy Discord Token

<details>
<summary>View Code</summary>

⚠️ **Remember to never give out your token to anyone as it will allow them to login to your Discord account.** ⚠️

```js
window.webpackChunkdiscord_app.push([
    [Symbol()],
    {},
    (runtime) => {
        for (let module of Object.values(runtime.c)) {
            try {
                if (!module.exports || module.exports === window) {
                    continue;
                }
                if (module.exports?.getToken) {
                    token = module.exports.getToken();
                }
                for (let key in module.exports) {
                    const exported = module.exports[key];
                    if (
                        exported?.getToken &&
                        exported[Symbol.toStringTag] !== "IntlMessagesProxy"
                    ) {
                        token = console.log("\x1b[94mYour token:\n\x1b[95m" + exported.getToken() + "\x1b[0m");
                    }
                }
            } catch {
            }
        }
    }
]);
window.webpackChunkdiscord_app.pop();
token;
```

</details>

---

### Login Using Discord Token

<details>
<summary>View Code</summary>

```js
let token = "your token";

function login(token) {
    setInterval(() => {
      document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }

login(token);
```

</details>

---

### Apply Discord Badges (Only locally visible)

<details>
<summary>Expand</summary>

Paste the [InitializeBadges](https://github.com/its-Jaxx/Discord-Console-Hacks/blob/main/SETTINGS/InitializeBadges.js) code to initialize the script:
```js
fetch("https://raw.githubusercontent.com/its-Jaxx/Discord-Console-Hacks/refs/heads/main/SETTINGS/InitializeBadges.js")
  .then(r => r.text())
  .then(eval);
```

<details>
<summary>Apply badge to profile</summary>

```js
// Note that the target username (not display name) is case sensitive

getBadge(Badge.BadgeName, "TARGET_USERNAME")
removeBadge(Badge.BadgeName, "TARGET_USERNAME")
```

</details>

<details>
<summary>Apply badge to settings profile</summary>

```js
getProfileBadge(Badge.BadgeName)
removeProfileBadge(Badge.BadgeName)
```

</details>

<details>
<summary>Badge Names</summary>

*Click on them to preview the badge in your browser*

* [Moderator Programs Alumni](https://cdn.discordapp.com/badge-icons/fee1624003e2fee35cb398e125dc479b.png): `MPA`
* [Discord Staff](https://cdn.discordapp.com/badge-icons/5e74e9b61934fc1f67c65515d1f7e60d.png): `Staff`
* [HypeSquad Events](https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png): `HSE`
* [Discord Bug Hunter Level 1](https://cdn.discordapp.com/badge-icons/2717692c7dca7289b35297368a940dd0.png): `DBH(1)`
* [Discord Bug Hunter Level 2](https://cdn.discordapp.com/badge-icons/848f79194d4be5ff5f81505cbd0ce1e6.png): `DBH(2)`
* [Early Supporter](https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png): `Supporter`
* [Completed a Quest](https://cdn.discordapp.com/badge-icons/7d9ae358c8c5e118768335dbe68b4fb8.png): `Quest`
* [Collected the Orb Profile Badge](https://cdn.discordapp.com/badge-icons/83d8a1eb09a8d64e59233eec5d4d5c2d.png): `ORB`
* [Discord Booster Level 1](https://cdn.discordapp.com/badge-icons/51040c70d4f20a921ad6674ff86fc95c.png): `Booster(1)`
* [Discord Booster Level 2](https://cdn.discordapp.com/badge-icons/0e4080d1d333bc7ad29ef6528b6f2fb7.png): `Booster(2)`
* [Discord Booster Level 3](https://cdn.discordapp.com/badge-icons/72bed924410c304dbe3d00a6e593ff59.png): `Booster(3)`
* [Discord Booster Level 4](https://cdn.discordapp.com/badge-icons/df199d2050d3ed4ebf84d64ae83989f8.png): `Booster(4)`
* [Discord Booster Level 5](https://cdn.discordapp.com/badge-icons/996b3e870e8a22ce519b3a50e6bdd52f.png): `Booster(5)`
* [Discord Booster Level 6](https://cdn.discordapp.com/badge-icons/991c9f39ee33d7537d9f408c3e53141e.png): `Booster(6)`
* [Discord Booster Level 7](https://cdn.discordapp.com/badge-icons/cb3ae83c15e970e8f3d410bc62cb8b99.png): `Booster(7)`
* [Discord Booster Level 8](https://cdn.discordapp.com/badge-icons/7142225d31238f6387d9f09efaa02759.png): `Booster(8)`
* [Discord Booster Level 9](https://cdn.discordapp.com/badge-icons/ec92202290b48d0879b7413d2dde3bab.png): `Booster(9)`

</details>

</details>

---

### Easy Edit Mode

<details>
<summary>View Code</summary>

```js
document.designMode = 'on' // Enables 'Easy Edit Mode'
document.designMode = 'off' // Disables 'Easy Edit Mode'
```

*If you mess up while this is enabled, use `CTRL+Z` to undo or `CTRL+R` to restart Discord to revert any and all changes made.*

</details>

---

### Delete Webhook

<details>
<summary>View Code</summary>

```js
let webhookURL = "PUT_WEBHOOK_URL_HERE";

await fetch(webhookURL, {
  "method": "DELETE",
});
```

*This will allow you to delete any webhook, regardless of ownership.*

</details>
