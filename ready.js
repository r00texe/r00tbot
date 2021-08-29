const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async bot => {

  var oyun = [
    "Jartex Güvenlik Sistemleri",
    "Jartex Security Systems!",
    "r00t ∞#0401",
    "'ajdaremmi ∞#0401",
    "Xeo ∞#0401",
    "Version: v1",
    "j!help | j!invite | j!prefix",
    "j!yardım | j!invite | j!prefix",
    ];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    bot.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  bot.user.setStatus("idle");
  //});
  //});
};
