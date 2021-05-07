const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter((file)=>file.endsWith(".js") || file.endsWith(".ts"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('client is ready!');
});

client.on("message", ((message) => {
  if(message.channel.name !== "🔢-decimal-counting" || !message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!commandName) return message.reply(`you invoked me (the decimal-counting bot), but didn't tell me what to do!`);

  const command = client.commands.get(commandName);

	if(!command) return message.reply(`That's not a command`);
  if(command.args && !args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
  }
  
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
}));

client.login(token);