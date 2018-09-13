<p style="text-align:center;">
<img src="https://i.imgur.com/Rak0dam.png"></p>

<p align="center">
<a><img src="https://img.shields.io/badge/ZandercraftBotVersion-6.0.1-blue.svg" alt="ZandercraftBotVersion"></a>
<a><img src="https://img.shields.io/badge/Status-Online-green.svg" alt="Status"></a>
<a href="http://nodejs.org"><img src="https://img.shields.io/badge/Node.js-10.9.0-green.svg" alt="Node JS"></a>
<a href="http://npmjs.com"><img src="https://img.shields.io/badge/npm-6.2.0-red.svg" alt="npm"></a>
<a><img src="https://img.shields.io/badge/WildBeastVersion-6.1.1-blue.svg" alt="WildbeastVersion"></a>
</a>
</p>

| **`Master Branch`** | **`Documentation`**| **`Website`**|
|--------------------|--------------------|--------------------|
|[![CircleCI](https://img.shields.io/badge/master-Passing-green.svg)](https://docs.zandercraft.cf) | [![CircleCI](https://img.shields.io/badge/Docs-In_Progress-orange.svg)](https://docs.zandercraft.cf) | [![Visit](https://i.imgur.com/oGg2eL8.png)](http://www.zandercraft.cf)

---

The Zandercraft Bot is a modified version of WildBeast(which was created by the team at http://thesharks.xyz) intended to be able to perform various tasks, ranging from easy server moderation (Kick, ban etc.) to having fun in your Discord server. Written in JavaScript, using the discordie library.

## Main features

- Music streaming from YouTube, SoundCloud etc.
- Classy insults
- Dank meme generation system with your own parameters
- Useful advice
- Moderation commands (Ban, kick)
- Search for comics via XKCD
- Extended server functionality (Welcome messages, server and user info)
- Role management commands (Manage roles of users, change role color)
- High level of customization (Changing messages on a per-server basis, permission level system)

- [Linux installation guide](http://docs.thesharks.xyz/install_linux/)
- [Windows installation guide](http://docs.thesharks.xyz/install_windows/)

## Changelog (As of 6.0.1)
- Entire internal structure changed.
- Bot no longer officially support RethinkDB as a database, the official database is ArangoDB.
- Command indexing changed, each command lives in its own file now.
- Changed Discord library from Discordie to Eris (rip)
- All event handlers live in separate files instead of all being defined in the main script.
- Removed translation submodule, we now include the standard file by default.
- CircleCI will now automatically include translations into new Docker images
- For Docker images, uws is locked to v10.148.1
- Commands that call external APIs will now indicate errors
- Music command have been updated to support lavalink v3
- Added optional embedded database powered by LokiJS
- Added new ffmpeg based voice encoder
- +meme will no longer use imgflip, memegen is used instead
- +settings will error out if an unknown language is being set
- Encoders and drivers are loaded on-demand instead of requiring them all
- Elasticsearch logging will now log command arguments instead of the full message
- Version checking will check for git commits instead of versions only, this falls back to original version check if git is not available

---

<p align="center">
  <a href="https://github.com/feross/standard"><img src="https://cdn.rawgit.com/feross/standard/master/badge.svg" alt="JavaScript Standard Code Style"></a>
  <a href="https://discord.io/zandercraftbot"><img src="https://discordapp.com/api/guilds/413897297626267648/widget.png?style=banner2" alt="Discord server"></a>
</p>

---

"Discord", "Discord App", and any associated logos are registered trademarks of Hammer & Chisel, inc.