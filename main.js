const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, undergoingMaintenance } = require('./config.json');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const publicCommandFiles = fs.readdirSync('./commands/public').filter((file)=>file.endsWith(".js") || file.endsWith(".ts"));
const managementCommandFiles = fs.readdirSync('./commands/management').filter((file)=>file.endsWith(".js") || file.endsWith(".ts"));

for (const file of publicCommandFiles) {
	const command = require(`./commands/public/${file}`);
	client.commands.set(command.name, command);
}

for (const file of managementCommandFiles) {
	const command = require(`./commands/management/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('client is ready!');
});
//message.channel.name !== "🔢-decimal-counting" || 
client.on("message", ((message) => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
	if(undergoingMaintenance && message.member.guild.name !== "bur3ku's server") return message.channel.send("bot is under maintenance");

  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!commandName) return;

	let commandsList = "";
	client.commands.forEach((command)=>{
		commandsList += command.name + ":" + command.description + "\n";
	})

	if(commandName === "commands"){
		return message.channel.send(`Commands: \n${commandsList}`)
	}
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