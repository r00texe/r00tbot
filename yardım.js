const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == null) {
    kontrol = "TR_tr";
  }
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "j!";
  if (kontrol == "tr") {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **${kontrol}**`
      )
      .addField(
        `Bot`,
        `\`yardım\`, \`dil\`, \`bot-bilgi\`, \`ayarlar\`, \`reboot\`, \`prefix\`, \`prefix-sıfırla\`,\`karaliste\`,\`beyazliste\``
      )
      .addField(
        `Güvenlik Sistemi`,
        `\`güvenlik\`, \`güvenlik-sıfırla\`, \`güvenlik-verilecek-rol\`, \`güvenlik-verilecek-rol-sıfırla\`, \`güvenlik-alınacak-rol\`, \`güvenlik-alınacak-rol-sıfırla\`, \`güvenlik-sahte-rol\`, \`güvenlik-sahte-rol-sıfırla\``
      )
      .addField(
        `Rol Koruma`,
        `\`rol-koruma\`, \`rol-koruma-sıfırla\`, \`rol-koruma-rol\`, \`rol-koruma-rol-sıfırla\`, \`rol-limit\`, \`rol-limit-sıfırla\``
      )
      .addField(`Kanal Koruma`, `\`kanal-koruma\`, \`kanal-koruma-sıfırla\``)

      .addField(
        `Ban Koruma`,
        `\`ban-koruma\`, \`ban-koruma-sıfırla\`, \`ban-limit\`, \`ban-limit-rol\`, \`ban-limit-sıfırla\`, \`ban-limit-rol-sıfırla\``
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Bot Version; **v0.1**, Prefix: **${prefix}**, Language: **${kontrol}**\nVote to bot; [Click!](https://top.gg/bot/881230850224709732)`
      )
      .addField(
        `Bot`,
        `\`help\`, \`language\`, \`bot-info\`, \`settings\`, \`reboot\`, \`prefix\`, \`prefix-reset\`,\`blacklist\`,\`whitelist\``
      )
      .addField(
        `Security System`,
        `\`security\`, \`security-reset\`, \`security-add-role\`, \`security-addd-role-reset\`, \`security-remove-role\`, \`security-add-role-reset\`, \`security-fake-role\`, \`security-fake-role-reset\``
      )
      .addField(
        `Role Protection`,
        `\`role-protection\`, \`role-protection-reset\`, \`role-protection-role\`, \`role-protection-role-reset\`, \`role-limit\`, \`role-limit-reset\``
      )
      .addField(
        `Channel Protection`,
        `\`channel-protection\`, \`channel-protection-reset\``
      )
      .addField(
        `Ban Protection`,
        `\`ban-protection\`, \`ban-protection-reset\`, \`ban-limit\`, \`ban-limit-role\`, \`ban-limit-reset\`, \`ban-limit-role-reset\``
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "yardım",
  usage: "yardım"
};
