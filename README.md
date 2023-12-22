# Discord Console Hacks
[![License: GPL v3+](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

:warning: **Note:** I'm not affiliated with Discord and do not encourage using any of these scripts. Use everything here at your own risk. This is meant for **educational purposes only** and using these codeblocks may result in your account being disabled/terminated.

***
<br>
</details>
<br>


## Console Hacks

I don't promote using any kind of client modifications. Please don't use the code found here for any illegal/hacking purposes, or you might risk seeing this error message:

![image](https://user-images.githubusercontent.com/55095883/134189043-4da003de-4829-4d60-888a-6014ebb5c2b8.png)

# How to use these Hacks (Read first if you haven't enabled "Inspect Element")

<details>
<summary>Read me first</summary>

- In order to use these you need to be able to inspect element to use the console
- :warning: **Note:** It only works on web and desktop versions (Windows, Linux, MacOS), not on mobile. Following instructions are with the Windows 10 OS.
- :warning: **Note:** Other systems such as Linux and MacOS may not use the same instructions.
## Quit Discord
- Make sure you fully close down Discord using the "Quit Discord" button in the system tray, or use task manager to close it down.
## Change the settings.json file.
- You should be able to find this by pressing win+r and entering "%appdata%" and pressing enter, now, if you're not in roaming already, enter the folder.d
- Then go to the discord folder. In there, you should find the settings.json file.
## What to change
- If there is no line saying "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING", add it and add ":true,"
- It should now look like this: https://imgur.com/a/OguGgZh
- Alternatively, you can copy and paste this code to replace your current settings:
```json
{
  "IS_MAXIMIZED": true,
  "IS_MINIMIZED": false,
  "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true,
  "audioSubsystem": "standard",
  "useLegacyAudioDevice": false
}
```
- Now press ctrl+s to save the file. Relaunch Discord, and it should work now by pressing Ctrl+Shift+i.

## What if it still doesn't work?
- Make sure you saved it and didn't mess anything up in the settings.json file.
- Alt+F4 to close down Discord completely may not work. Use the "Quit Discord" button in the system tray and double check that it is fully closed down.
- Use Ctrl+Shift+i to open inspect element, F12 will not work.
- If it still doesn't work, open an issue explaining the problem you're having, I will do my best guiding you.

</details>
<br></br>

### Revert New Discord Layout
<details>
<summary>Show code</summary>
Paste the following code in the console tab and hit enter:<br>

```js
let wpRequire;
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);

let UserSettingsActions = Object.values(wpRequire.c).find(x => x?.exports?.PreloadedUserSettingsActionCreators).exports;
let ProtobufTypes = Object.values(wpRequire.c).find(x => x?.exports?.BoolValue).exports;

UserSettingsActions.PreloadedUserSettingsActionCreators.updateAsync("appearance", data => {
    data.mobileRedesignDisabled = ProtobufTypes.BoolValue.create({value: true})
}, UserSettingsActions.UserSettingsDelay.INFREQUENT_USER_ACTION)
```
</details>
<br>

### Fake mute/deafen
<details>
<summary>Show code</summary>
1. Join voice channel<br>
2. Mute and deafen yourself<br>
3. Execute the code<br>
4. Unmute and speak<br>

```js
var text = new TextDecoder("utf-8");

WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
        if (text.decode(data).includes("self_deaf")) data = data.replace('"self_mute":false', 'NashyLove');
    }
    WebSocket.prototype.original.apply(this, [data]);
}
```
</details>
<br>

### Enable experiments, developer options & more
<details>
<summary>Show code</summary>

```js
webpackChunkdiscord_app.push([[0], {}, (e) => { module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default; }]);
nodes = Object.values(module._dispatcher._actionHandlers._dependencyGraph.nodes);
try { nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: { flags: 1 } }); } catch (e) { }
original = [module.getCurrentUser, module.getNonImpersonatedCurrentUser];
module.getCurrentUser = module.getNonImpersonatedCurrentUser = () => ({ isStaff: () => true });
nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["OVERLAY_INITIALIZE"]();
[module.getCurrentUser, module.getNonImpersonatedCurrentUser] = original;
```
</details>
<br>

### "Listen Along" Spotify without premium
<details>
<summary>Show code</summary>

```js
(webpackChunkdiscord_app.push([
    [''], {},
    e => {
        m = [];
        for (let c in e.c) m.push(e.c[c])
    }
]), m).find(m => m?.exports?.Z?.getAccounts).exports.Z.getAccounts().forEach((conn) => conn.type === "spotify" && (webpackChunkdiscord_app.push([
    [''], {},
    e => {
        m = [];
        for (let c in e.c) m.push(e.c[c])
    }
]), m).find(m => m?.exports?.Z?.isDispatching).exports.Z.dispatch({
    type: "SPOTIFY_PROFILE_UPDATE",
    accountId: conn.id,
    isPremium: true
}))
```
</details>
<br>

### Bot & System Spoofing
<details>
<summary>Show code</summary>
- This will give you the "Bot", "Verified Bot", and the "System Tag"

Bot tag code:

```js
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().bot = true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().bot = true}}}])
```

Verified Bot Tag
```js
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().isVerifiedBot = () => true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().isVerifiedBot = () => true}}}])
```

System Tag
```js
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().isSystemUser = () => true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().isSystemUser = () => true}}}])

```
</details>
<br>

### Login using Discord token
**:warning: DO NOT GIVE YOUR TOKEN TO ANYONE AS IT GRANTS FULL ACCESS TO YOUR ACCOUNT.**

<details>
<summary>Show code</summary>

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
:warning: **Note:** NEVER SHARE YOUR TOKEN WITH ANYONE. ANYONE WHO HAS IT CAN LOG INTO YOUR ACCOUNT AND CAN IMPERSONATE YOU, MESS WITH YOUR ACCOUNT, OR IF YOU HAVE A PAYMENT METHOD THEY CAN EVEN SPEND YOUR MONEY, OR EVEN FIGURE OUT WHERE YOU LIVE!
</details>
<br>

### Copy your Discord token
**:warning: DO NOT GIVE THIS TO ANYONE. It grants full access to your account.**

<details>
<summary>Show code</summary>

```js
function getToken() {
  let a = [];
  webpackChunkdiscord_app.push([[0],,e=>Object.keys(e.c).find(t=>(t=e(t)?.default?.getToken?.())&&a.push(t))]);
  console.log(`${a}`);
  return a[0];
}

getToken();
```
The token should be in your clipboard now.<br>
:warning: **Note:** NEVER SHARE YOUR TOKEN WITH ANYONE. ANYONE WHO HAS IT CAN LOG INTO YOUR ACCOUNT AND CAN IMPERSONATE YOU, MESS WITH YOUR ACCOUNT, OR IF YOU HAVE A PAYMENT METHOD THEY CAN EVEN SPEND YOUR MONEY, OR EVEN FIGURE OUT WHERE YOU LIVE!
</details>
<br>

### Enable Staff Mode

Enables some hidden features and sets your client to staff mode.

<details>
<summary>Show code</summary>

This will mark your account as staff even though you're not, giving you access to more settings, but won't give you any more control towards other users than you normally would have.<br>
(In these menus you can get unreleased Discord updates, emulate a different client, generate build overrides and more.)

```js
let wpRequire;window.webpackChunkdiscord_app.push([[Math.random()],{},e=>{wpRequire=e}]),mod=Object.values(wpRequire.c).find(e=>void 0!==e?.exports?.Z?.isDeveloper),usermod=Object.values(wpRequire.c).find(e=>e?.exports?.default?.getUsers),nodes=Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes);try{nodes.find(e=>"ExperimentStore"==e.name).actionHandler.OVERLAY_INITIALIZE({user:{flags:1}})}catch(e){}oldGetUser=usermod.exports.default.__proto__.getCurrentUser,usermod.exports.default.__proto__.getCurrentUser=()=>({isStaff:()=>!0}),nodes.find(e=>"DeveloperExperimentStore"==e.name).actionHandler.CONNECTION_OPEN(),usermod.exports.default.__proto__.getCurrentUser=oldGetUser;
```

![discorddevoptions](https://cdn.discordapp.com/attachments/788198099067076638/1004823296489029702/unknown.png)<br>

<sup>Developer Options menu</sup>
</details>
<br>

### Easy Edit Mode

You can use this to make fake screenshots without having to use Inspect Element (CTRL + SHIFT + I) each time.

<details>
<summary>Show code</summary>

```js
// Turn it on
document.designMode = 'on'
```

```js
// Turn it off
document.designMode = 'off'
```

</details>
<br>

### Enter NSFW Channels

Grants access to channels marked as NSFW on an under-18 account.<br>
**Only use this script if you are 18+! There is a reason those channels are marked as NSFW.**

<details>
<summary>Show code</summary>

This script is intended for people (>18) whose accounts have been wrongfully marked as underage. Don't use it for other purposes.

```js
var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true
```
<br>

![grafik](https://raw.githubusercontent.com/PndaBoi/pndaboi/main/6zsLEjYET0.png)<br>
<sup>Before running the script</sup><br>
<br>

![grafik](https://raw.githubusercontent.com/PndaBoi/pndaboi/main/ypzEY7Yw0u.png)<br>
<sup>After running the script</sup>
</details>
<br>

### Delete Webhook

Allows you to manually delete a webhook URL<br>
Useful if someone has access to your account and you want to remove a webhook, or in order to delete a phishing site's webhook.

<details>
<summary>Show code</summary>

```js
let webhookURL = "PUT_WEBHOOK_URL_HERE";

await fetch(webhookURL, {
  "method": "DELETE",
});
```

</details>
<br>

### AMOLED Theme on Desktop & Web

Activates the AMOLED theme from mobile on desktop and web, which uses darker colors than the normal theme and is better on the eyes.

<details>
<summary>Show code</summary>

```js
// Add amoled theme
document.body.classList.add("theme-amoled");
```

```js
// Remove amoled theme
document.body.classList.remove("theme-amoled");
```

</details>

<br>

***
## License
    Copyright (C) 2023  jaxx

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
