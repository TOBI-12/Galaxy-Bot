require("./database/global");
const func = require("./database/place");
const readline = require("readline");
const usePairingCode = true;
const question = _0x2c6811 => {
  const _0x188239 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(_0x16a5aa => {
    _0x188239.question(_0x2c6811, _0x16a5aa);
  });
};
async function startSesi() {
  const _0x18bfb5 = makeInMemoryStore({
    logger: pino().child({
      level: "silent",
      stream: "store"
    })
  });
  const {
    state: _0x332695,
    saveCreds: _0x226b6c
  } = await useMultiFileAuthState("./session");
  const {
    version: _0x2fddc8,
    isLatest: _0x14b89d
  } = await fetchLatestBaileysVersion();
  console.log(chalk.blue.bold("𝑺𝑪 𝐆𝐀𝐋𝐀𝐗𝐘𝟏𝟐𝟏 𝑽7\n𝑱𝑨𝑵𝑮𝑨𝑵 𝑫𝑰 𝑺𝑨𝑳𝑨𝑯 𝑮𝑼𝑵𝑨𝑲𝑨𝑵 𝑮𝑼𝑵𝑨𝑲𝑨𝑵 𝑺𝑪 𝑺𝑬𝑪𝑨𝑹𝑨 𝑩𝑰𝑱𝑨𝑲\n𝑴𝑰𝑵𝑨𝑻 𝑩𝑼𝒀 𝑵𝑶 𝑬𝑵𝑪 𝑲𝑬 𝐆𝐀𝐋𝐀𝐗𝐘𝟏𝟐𝟏\n𝐓𝐐 𝐓𝐎\n🩸⃟༑⌁⃰  𝐆𝐀𝐋𝐀𝐗𝐘 𝐑𝐔𝐒𝐃𝐈 𝐑𝐔𝐋𝐙𝐙 𝐕.7.0ཀ͜͡🐉〽️\n𝐀𝐋𝐋𝐀𝐇 𝐒𝐖𝐓\n𝐓𝐄𝐌𝐀𝐍\n𝐃𝐀𝐍 𝐅𝐀𝐌𝐈𝐋𝐘"));
  const _0x3248a4 = {
    version: _0x2fddc8,
    keepAliveIntervalMs: 30000,
    printQRInTerminal: !usePairingCode,
    logger: pino({
      level: "fatal"
    }),
    auth: _0x332695,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  };
  const _0x1ec95c = func.makeWASocket(_0x3248a4);
  if (usePairingCode && !_0x1ec95c.authState.creds.registered) {
    const _0x387a94 = await question(chalk.green("\nEnter Your Number\nNumber : "));
    const _0x4835bc = await _0x1ec95c.requestPairingCode(_0x387a94.trim());
    console.log(chalk.green("Your Pairing Code : " + _0x4835bc + " "));
  }
  _0x18bfb5.bind(_0x1ec95c.ev);
  _0x1ec95c.ev.on("connection.update", async _0x3970a4 => {
    const {
      connection: _0x187ba6,
      lastDisconnect: _0x208b44
    } = _0x3970a4;
    if (_0x187ba6 === "close") {
      const _0x55253e = new Boom(_0x208b44?.error)?.output.statusCode;
      console.log(color(_0x208b44.error, "deeppink"));
      if (_0x208b44.error == "Error: Stream Errored (unknown)") {
        process.exit();
      } else if (_0x55253e === DisconnectReason.badSession) {
        console.log(color("Bad Session File, Please Delete Session and Scan Again"));
        process.exit();
      } else if (_0x55253e === DisconnectReason.connectionClosed) {
        console.log(color("[SYSTEM]", "white"), color("Connection closed, reconnecting...", "deeppink"));
        process.exit();
      } else if (_0x55253e === DisconnectReason.connectionLost) {
        console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"));
        process.exit();
      } else if (_0x55253e === DisconnectReason.connectionReplaced) {
        console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
        _0x1ec95c.logout();
      } else if (_0x55253e === DisconnectReason.loggedOut) {
        console.log(color("Device Logged Out, Please Scan Again And Run."));
        _0x1ec95c.logout();
      } else if (_0x55253e === DisconnectReason.restartRequired) {
        console.log(color("Restart Required, Restarting..."));
        await startSesi();
      } else if (_0x55253e === DisconnectReason.timedOut) {
        console.log(color("Connection TimedOut, Reconnecting..."));
        startSesi();
      }
    } else if (_0x187ba6 === "connecting") {
      start("1", "Connecting...");
    } else if (_0x187ba6 === "open") {
      success("1", "Tersambung");
      _0x1ec95c.sendMessage("628561160742@s.whatsapp.net", {
        text: "`🩸⃟༑༑𝐇𝐚𝐢 𝐆𝐀𝐋𝐀𝐗𝐘𝟏𝟐𝟏 𝐕.7.𝟎`\n`➪⃟𝐆𝐀𝐋𝐀𝐗𝐘𝟏𝟐𝟏 ʙᴏᴛ sᴜᴄᴄᴇss ᴄᴏɴɴᴇᴄᴛɪɴɢ✔️`"
      });
      if (autoJoin) {
        _0x1ec95c.groupAcceptInvite(codeInvite);
      }
    }
  });
  _0x1ec95c.ev.on("messages.upsert", async _0x39a4b3 => {
    try {
      m = _0x39a4b3.messages[0];
      if (!m.message) {
        return;
      }
      m.message = Object.keys(m.message)[0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
      if (m.key && m.key.remoteJid === "status@broadcast") {
        return _0x1ec95c.readMessages([m.key]);
      }
      if (!_0x1ec95c.public && !m.key.fromMe && _0x39a4b3.type === "notify") {
        return;
      }
      if (m.key.id.startsWith("BAE5") && m.key.id.length === 16) {
        return;
      }
      m = func.smsg(_0x1ec95c, m, _0x18bfb5);
      require("./v1.js")(_0x1ec95c, m, _0x18bfb5);
    } catch (_0x3cf088) {
      console.log(_0x3cf088);
    }
  });
  _0x1ec95c.ev.on("contacts.update", _0x5a70f8 => {
    for (let _0x3ac2a6 of _0x5a70f8) {
      let _0x16969e = _0x1ec95c.decodeJid(_0x3ac2a6.id);
      if (_0x18bfb5 && _0x18bfb5.contacts) {
        _0x18bfb5.contacts[_0x16969e] = {
          id: _0x16969e,
          name: _0x3ac2a6.notify
        };
      }
    }
  });
  _0x1ec95c.public = true;
  _0x1ec95c.ev.on("creds.update", _0x226b6c);
  return _0x1ec95c;
}
startSesi();
process.on("uncaughtException", function (_0x4b3827) {
  console.log("Caught exception: ", _0x4b3827);
});