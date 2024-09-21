//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUk2cW9xSmI3YjJzK0syYzhheHFUWk9OSFZYMml4ZG9zTUI3S3VCSURrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWprQUU5S0c2QnROUnI1S1BzZ290d3RqMzJlNk1WRjVhSlNLS2lVakxnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UGlERW96aDQrWGhQZ0x3NWZRR1ZjOFdETG1nWFpHd1ZZcVo2cXlVMDJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZHZINzA3VWRwVnRDVjRLSFFvb2JvMWc3VlhzS1M0dGtWUGV1Zmw1RUNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEWTRBdlF0MW1vdkNpajUxSk5JamRPRm82R0o5TnMwR1MzdjE3ODMza2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEODBwRVZkaTRDUXBHSW5MUFhTb3NoQnFuVzlFV1c2WjF5V3dkVk9yRDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUI1L2RGZGNQR0c5WS9NS04yUkVtbzlwZ0dVRm1icVV2Vk9DOFBaSm0zUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekdoRVNiMjFBRWthOWp1TWVtRkdQaGhVQjZHeDJqUHZKc2pEK05XK1ZSUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZidlFLWEN6UGxVekIzMVB1VjVScHQwRVIvVWpWeVl6WmVYd05RZGJLOTlqMjNySVRzZ2VzdjVHNkplMHRGR1hsS0x1a0pCZWQySVRsM3ltYzlOQUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6IlFBUWYyT1RZWnlIdFFhZEFBR0IxMWRPSkYrTzVpaE9iY3RFc1ZmblBxL3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyNDI1Mjc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyOEY0OUFGRUE5MEE5NzhBMjc4MDUzNTQ0NTI4QkExRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2OTEyNzc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTI0MjUyNzQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE2QzQzQjczQjMzMzUwQUVFOEI4RkI5OTgxMjhCNzAyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY5MTI3NzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldfVmcwN0liUWthRHhGZlk2cFdZMGciLCJwaG9uZUlkIjoiYTgzOTBjMTYtMzNmZC00NDQ5LWFmNzQtOWU5ZjEyMzBiNGMwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhQL202Ykp1SUF0VTRSYm56VE1ZdG05VUVuND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuMWRJaENROU1LSDdjVDRnVGlyZHNuTFZDRUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ1BMQkNQTDUiLCJtZSI6eyJpZCI6IjIzNDkxMjQyNTI3NDQ6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+kpiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmlwOFlJRkVQbXh1cmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL2FzZDY5S3ZLWCtXZjBTZlVWZ3BtaExKNVd4aVRRalJRU0lld0hRSHJpaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUUlEU3duR2FVa0k5dmk0K0dTUGhOZll0dWQrSkNKaWVHcko4MVRNNjBnWXNWU2s2SHMzaXNHR3NNMElWcGdYVVhyNXEyOWErQVdvWSt4Z0Z6NlJSREE9PSIsImRldmljZVNpZ25hdHVyZSI6IkY4ekExUW03eU9jdjJuWnJGTklBQU90ck84Nnp0ZDdqMTRBcThWKzVxVEdRSlVtRG9PeHl4aW96bTJ3MGZnVUpKWldWSkpydVEyVkVUY2NJWDlwaUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyNDI1Mjc0NDoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmMnJIZXZTcnlsL2xuOUVuMUZZS1pvU3llVnNZazBJMFVFaUhzQjBCNjRwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2OTEyNzc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUppdSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
