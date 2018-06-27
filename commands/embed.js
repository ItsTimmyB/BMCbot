  if(command === "esay") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if(!message.member.roles.some(r=>["Owner", "Admin", "Moderator", "CoLeader", "Mod"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

      const sayMessage = args.join(" ");

      let servIcon = message.guild.iconURL;
      let esayEmbed = new Discord.RichEmbed()
      .setTitle("Say")
      .setColor("#0537ff")
      .setThumbnail(servIcon)
      .setDescription(`Said by ${message.author}`)
      .addField("Message", `${sayMessage}`)
      .setTimestamp();

      const esayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

      message.channel.send(esayEmbed);
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "embed2",
    category: "Miscelaneous",
    description: "Embed a message you want.",
    usage: "embed2"
};