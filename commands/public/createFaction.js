
const suggest = {
	name: 'propose',
	description: 'propose a new faction. Syntax: !propose [name] [description, including counting method]',
  args: false,
	execute(message, args) {
    if(args.length!==2) return;
    message.channel.send("Proposal successful. You will be notified in due time if the faction is deemed worthy by the binary gods.")
    .then(msg=>msg.delete({timeout:5000}));
    console.log(args.join("\n"));
	}
}

module.exports = suggest;