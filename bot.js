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


client.login(process.env.BOT_TOKEN);
