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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU56RGI2Y1k2UWt6Znd1Q2trRE1hL0xLT0xnbUcyTS90em5aK2Q3YnUyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmdBN0hJQk1RVUF4dll5bmx0eUhybmxJRyt4SkxCTWFCWmV1cERrMWZBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRUNkcHhlS3poWWl4cFNFOWs1UjRVNHM2dFZVcks3TnNlWFk0b2ZySzFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiZDY0NTFKZTByeUQzUlhMVjN6YTFtbWFKdGJTN2taMVg5WEVwa3ZwZmxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNaDlKczNtOUxPREVtVEtsckxBVmk4WVBpWWNuUTBlcjNBazhkbTMzbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRDM21wSGd3Sm80K1BQWllqZThoYkZxTzJIRmlzdmNTbDM1WXp6K0RyVGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0o3djRWdWo0T2hydWNLUzkwUTRGUUFNaTVOWHVabEZiVDhwOGVVTHNIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3Jrc1dHOFUySTFqUnpaSnJnZzI5YkxnRlE3NlhOS21YUUw4M25STCtETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRybTJRVlZLckZwdmx1L3JlZW1GNnVUVWxYbzJZZVptL2VSZGpGanBaT3FZT2Y1Z1JPcWFhM3R6MXBNZ3lyZ0RlNHR6OGh4N1RtZmdSY2tjQjBaNmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6ImJIZGorRzNuUHhhL0RoSWg3bHgyWnRUOUNxdXZGejlYQ2ZUMmZMRVI1TFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyNDI1Mjc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRjk5MDhBNjVBNDg2OTI5NDYwRkU0QjkxNTQ4RDlBQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2OTE1NjMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTI0MjUyNzQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA3MUFDNDc2MTYxMUQ3RjY5QTBGMDNGNjU2Q0VEM0MxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY5MTU2MzF9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InlfbXUwSThtVHQyT2tpQjJ4UDJ4emciLCJwaG9uZUlkIjoiZGE1ZWE4OGMtY2MzNC00ZGRhLWIzZDktOTNmNjBmNzI0MzIzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdKUGRmVS9iSXF4L3NleE55UjhMbXJaQTk2az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJad1l5bVlaMUFxQ292b0YrbmQxVVd3RXJDVkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUk1ZUTM0N1AiLCJtZSI6eyJpZCI6IjIzNDkxMjQyNTI3NDQ6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+kpiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm1wOFlJRkVKL0l1cmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL2FzZDY5S3ZLWCtXZjBTZlVWZ3BtaExKNVd4aVRRalJRU0lld0hRSHJpaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaTJsVXVXUFZ4UHFQTGZMakdaVmluc1hjMkxvdVd3WWxmK00wL3FSZjY3Qzl5VGVWQ1R2SVgxd3VOVXJuampnS2N0MjJteGx4QmtDcjRHYzFMQ3RLQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IndYN1hHYlZVOUxCSFA5WlNCcUJpSWZQRXREamtXZHM2Y2l2eVBKbTFsb01IZ1NsbGs1Z2p6bnkwUTlHa2M0YmhZclo4clNkSEp3TkNXMkxDM2RiTGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyNDI1Mjc0NDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmMnJIZXZTcnlsL2xuOUVuMUZZS1pvU3llVnNZazBJMFVFaUhzQjBCNjRwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2OTE1NjI4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUppdyJ9"
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
