const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setAuthor(bot.user.username, "https://i.imgur.com/j1grfG6.jpg")
  .setThumbnail("https://i.imgur.com/j1grfG6.jpg")
  .setColor("#0093e2")
  .addField("Komennot:", "botinfo\nsay\nping\ntempmute", true);

  message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}
