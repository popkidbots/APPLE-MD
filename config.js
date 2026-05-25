module.exports = {
    SESSION_ID: process.env.SESSION_ID || "POPKID;;;e7ZmGL4C#h0t43LmqSRNyYRz0OGjX-UmSMePYpl8BrH5HkXMorVg", 
    PREFIX: process.env.PREFIX || ".",
    OWNER_NUMBER: process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(',') : ["254732297194"],
    OWNER_NAME: process.env.OWNER_NAME || "Popkid Kenya",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
    ANTICALL: process.env.ANTICALL || "false",
    AUTO_BIO: process.env.AUTO_BIO || "true",
    BOT_OFF: process.env.BOT_OFF || "false",
    NON_PREFIX: process.env.NON_PREFIX || "true",
    MODE: process.env.MODE || "public",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    ANTIDELETE: process.env.ANTIDELETE || "indm" // Settings: inchat / indm / false
}