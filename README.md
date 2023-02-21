# Discord-Console-Hacks
- In order to use these you need to be able to inspect element to use the console.
- To do so, follow these following instructions:
# Quit Discord
- Make sure you fully close down Discord using the "Quit Discord" button in the system tray, or use task manager to close it down.

# Change the settings.json file.
- You should be able to find this by pressing win+r and entering %appdata% and pressing enter, now, if you're not in roaming already, enter the folder.
- Then go to the discord folder. In there, you should find the settings.json file.

# What to change
- If there is no line saying "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING", add it and add ":true,"
- It should look something like this:
<a href="https://imgur.com/a/OguGgZh" target="_blank" rel="noopener noreferrer">Imgur</a>.
- Now press ctrl+s to save the file. Relaunch Discord, and it should work now by pressing Ctrl+Shift+i.

# What if it still doesn't work?
- Make sure you saved it and didn't mess anything up in the settings.json file.
- Alt+F4 to close down Discord completely may not work. Use the "Quit Discord" button in the system tray and double check that it is fully closed down.
- Use Ctrl+Shift+i to open inspect element, F12 will not work.
- If it still doesn't work, oepn an issue explaining the problem you're having, I will do my best guiding you.
