const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "$";

client.on('ready', () => {

   console.log(`----------------`);

      console.log(`Desert Bot- Script By : i1Suhaib`);

        console.log(`----------------`);

      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);

    console.log(`----------------`);

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`$help | $invite`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});


client.on('message',async message => {


    if (message.content.startsWith(prefix + "invite")) {
        if(message.author.bot) return;
        const args = message.content.split(' ').slice(prefix.length);
    var uses = args[0];
    var age = args[1];

    if (!uses) {
        return message.reply('لقد نسيت ان تقول كم عدد المستخدمين');
    }
    if (!age) {
        message.reply('لقد نسيت ان تقول كم مده انتهاء الرابط');
        age = await 0;
    }

    uses = await uses.toString(); 

    if (uses.indexOf('.') !== -1) {
        return message.reply(''); 
    }

    age = await age.toString();

    if (age.indexOf('s') !== -1) { 
        age = await age.replace(/s.*/, '');
    } else if (age.indexOf('m') !== -1) { 
        var agemin = await age.replace(/m.*/, '');
        age = await agemin * 60;
    } else if (age.indexOf('h') !== -1) { 
        var agehour = await age.replace(/h.*/, '');
        age = await agehour * 60 * 60;
    } else if (age.indexOf('d') !== -1) { 
        var ageday = await age.replace(/d.*/, '');
        age = await ageday * 60 * 60 * 24;
    } else {
        if (age.indexOf('.') !== -1) {
            return message.reply('لا. فقط ارقام'); 
        }
        age = await age; 
    }

    message.channel.createInvite({ maxUses: uses, maxAge: age }).then((invite) => {

        message.channel.send(`**
هذا رابطك:  \`${invite}\`
المستخدمين : \`${uses}\`
مده الانتهى : \`${age}\`
**`);
    });
};
});


client.on('message', function(msg) {
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": "Brazil",
            "eu-central": "Central Europe",
            "singapore": "Singapore",
            "Russia": "Russia",
            "us-central": "U.S. Central",
            "sydney": "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };
      
          if (msg.content.startsWith(prefix + 'server')) {
          if (!msg.guild) return message.reply('**Only Servers | :x:**')
      console.log(`${msg.author.username} Has Ran Server Command`)
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(msg.guild.iconURL)
          .setTitle(`${msg.guild.name}`)
          .addField('**[❖] Server Name | اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
          .addField('**[❖] OwnerShip | مؤسس السيرفر**',`**${msg.guild.owner}**`,true)
          .addField('**[❖] Server ID | معرف السيرفر**',`**${msg.guild.id}**`,true)
          .addField('**[❖] Members Count | عدد الاعضاء**',`[** __${msg.guild.memberCount}__ **]`,true)
          .addField('**[❖] Verification Level | مستوي الحمايه**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
          .addField('**[❖] Region | البلد**',`[** __${region[msg.guild.region]}__** ]`,true)
          .addField('**[❖] Text Channels | رومات كتابيه**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
          .addField('**[❖] Voice Channels | رومات صوتيه**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
          .addField('**[❖] Created At | صنع في**',msg.guild.createdAt.toLocaleString())
          msg.channel.send({embed:embed});
        }
      });


client.login(process.env.BOT_TOKEN);
