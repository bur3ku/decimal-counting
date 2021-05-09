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

let commandsList = "";
client.commands.forEach((command)=>{
	commandsList += command.name + ": " + command.description + "\n";
})	

for (const file of managementCommandFiles) {
	const command = require(`./commands/management/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('client is ready!');
});

client.on("message", ((message) => {
	const wrongChannel = (message.channel.name !== "🔢-decimal-counting" && message.channel.name !== "bot-testing");
	if(wrongChannel || message.author.bot || !message.content.startsWith(prefix)) return;
	if(message.channel.name === "🔢-decimal-counting" && undergoingMaintenance) return message.channel.send("bot is under maintenance");

  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!commandName) return;

	if(commandName === "commands"){
		message.channel.send(`Commands: \n${commandsList}`).then((msg)=>msg.delete({timeout:5000}));
		message.delete({timeout:5000});
		return message.channel.send("Deleting messages in 5 seconds...").then(msg=>msg.delete({timeout:5000}));
	}
  const command = client.commands.get(commandName);

	if(!command) return message.reply(`That's not a command`).then((msg)=>msg.delete({timeout:5000}));
  if(command.args && !args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`).then((msg)=>msg.delete({timeout:5000}));
  }

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
	// message.delete({timeout:5000});TODO: add "manage messages" permission to bot on voxel hive

	message.channel.send("Deleting bot message(s) in 5 seconds...").then(msg=>msg.delete({timeout:5000}));

}));

client.login(token);