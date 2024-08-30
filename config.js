//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "{"noiseKey":{"private":{"type":"Buffer","data":"aJGp7F9queBF09AlCOpG+RTKW5VIYJcKF7W/cThdk10="},"public":{"type":"Buffer","data":"U6X4wqcF3rP+RLuhAfKJEOUz6vy9LEjSEG7d2YftjTg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"yA5GUVt7OTqjMU+4bGh8OiZH6+wPB3q+AkB5W+kaNnk="},"public":{"type":"Buffer","data":"yBYETtVUcBn34VGrHyLnkmVgqPo4AdT8amDJ1GlVURg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"sLWA72w4vwg9WQ/ps9lk8Ffk9+myK/ELwVSjzodouUI="},"public":{"type":"Buffer","data":"jPM0NB9zoK+VBMCo8oTJu6Y4jFdjPNfVaGfi54LhRwY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CDtOV5/0lBL1txfUCyyneqTS4H/7HXc5aT2guV5k30o="},"public":{"type":"Buffer","data":"3A2uXlty3h5wamZhlXkzwI8V/P5/SBWiglgzxna232I="}},"signature":{"type":"Buffer","data":"o463o41YSkKJGwn24B5z9bDIz5aI6csAEsSZdxf3gkOQNpzzwyBfidLFYiDvWhwN8lDAflimo0TIUBztBzKxgQ=="},"keyId":1},"registrationId":180,"advSecretKey":"Bf8//oziJTwSKJM5A2l3GP3BvFKAUg25WttMMovtmo0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"bfbB00hjT6KUNE52MMHNZw","phoneId":"49fdf22e-348a-4d5f-930f-55c2c52c0149","identityId":{"type":"Buffer","data":"xeOTNsQvQbncgHTfJAHMILdCR8Q="},"registered":true,"backupToken":{"type":"Buffer","data":"1/CynEEDX+OIEmzPTkYG2dZloik="},"registration":{},"pairingCode":"T4VK3HHK","me":{"id":"237699435438:79@s.whatsapp.net","lid":"181935301251309:79@lid"},"account":{"details":"CL/y0u4CELO9xLYGGAsgACgA","accountSignatureKey":"iHb4+3lEEbKIt3sRxMzMpfNC05SDXmtU9z5S4Nma1x4=","accountSignature":"ke5IOOi3mMKAo/Znnm4pIJxzw1LjM171YjAfYIcqMnZQ+f8uPcl9xD6LR6A0h5c+ZKqUbDRNW8uzq7i3NX42AQ==","deviceSignature":"Ca3aLq1GVm8qeMdIDa1RujbrSfU7w8Nza/0XFHMEuRXWWDkotbzrUczYh61QgDLPsN7kk/rqy7Khohc3XvK4iA=="},"signalIdentities":[{"identifier":{"name":"237699435438:79@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYh2+Pt5RBGyiLd7EcTMzKXzQtOUg15rVPc+UuDZmtce"}}],"platform":"android","lastAccountSyncTimestamp":1724980919}"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
