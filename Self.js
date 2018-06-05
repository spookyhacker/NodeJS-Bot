// *******                        **          **
// /**////**                      //          //
// /**    /**  ******  **********  ** *******  **  *****
// /**    /** **////**//**//**//**/**//**///**/** **///**
// /**    /**/**   /** /** /** /**/** /**  /**/**/**  //
// /**    ** /**   /** /** /** /**/** /**  /**/**/**   **
// /*******  //******  *** /** /**/** ***  /**/**//*****
// ///////    //////  ///  //  // // ///   // //  /////
const Discord = require('discord.js');
// Random Color API @ 0.0.1
var randomColor = require('random-color');
var color = randomColor
// API: randomColor([saturation, value])
const client = new Discord.Client();
const Commando = require('discord.js-commando')
// START CONFIG - EDIT ALL YOU'D LIKE
const prefix = "YourPrefix";    // The prefixes of the command (eg: -help)
const Botname = "Botname";     // The name of the Bot
const clientID = "BotID";     // Will be shown on your "Discord Developers page"
const OwnerID = "YourID";    // Rightclick - Copy ID
const mainColor = "0000";   // Hex colors
const botToken = "Token";  // Your bots token
// END CONFIG - DONT EDIT BELOW IF YOU DONT KNOW WHAT YOU ARE DOING !
const client_commando = new Commando.Client({
  owner: OwnerID
})
//Client Ready
client.on('ready', () => {
  console.log(Botname + ` | Invite your bot: https://discordapp.com/oauth2/authorize?client_id=` + clientID +  `&scope=bot`)
});
//onJoiner - Broken (Seems to be)
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('general');
  if (!channel) return;
  channel.send(`[**New**] New Member Joined: ${member}`);
});
//Command 1 - Avatar Grabber (Works)
client.on('message', message => {
  if (message.content === prefix + 'avatar') {
    message.reply(message.author.avatarURL);
  }
});
//Works - No Description nor RandomColor (API is broken?)
client.on('message', message => {
    if (message.content === prefix + 'embedtest') {
      const embed = new Discord.RichEmbed()
          .setColor("000000"); // Errors: Failed to make Randomcolor API work, it always returns gray color, Attempting to fix with an STD Out to console.
          .setDescription("Hello world");
          console.log(randomColor.hexstring); // This should STD out what its generating (Will be added next update: Prints "Undefined")!
      message.channel.send({ embed });
    }
});
client.login(botToken); //login with the token. (If errors, it will STD out in consle.)
