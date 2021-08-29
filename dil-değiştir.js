const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Lütfen bir dil belirtiniz! Diller: `tr`, `_us`__"
      );
      return;
    }
    if (dil === "us") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__New language set to \`${dil}\`!__`);
    } else if (dil === "tr") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send("__Hatalı dil! Diller: `tr`, `us`__");
      return;
    }
  } else {
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Please specify a language! Languages: `tr`, `us`__"
      );
      return;
    }
    if (dil === "us") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__New language set to \`${dil}\`!__`);
    } else if (dil === "tr") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send(
        "__Incorrect language! Languages: `tr`, `us`__"
      );
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["language", "lang"],
  permLevel: 3
};

exports.help = {
  name: "dil",
  description: "dil",
  usage: "dil"
};
