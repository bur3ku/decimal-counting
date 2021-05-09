
const suggest = {
	name: 'suggest',
	description: 'Suggest a new command or auto-functionality. Syntax: !suggest [description of suggestion]',
  args: false,
	execute(message, args) {
    if(args.length===0) return;
    message.channel.send("Noted! Thanks for the suggestion").then(msg=>msg.delete({timeout:5000}));
    console.log("Suggestion from " + message.author.name + ": " + message.content);
	}
}

module.exports = suggest;