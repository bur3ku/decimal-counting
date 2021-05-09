const ping = {
	name: 'ping',
	description: 'ping',
  args: false,
	execute(message, args) {
		message.channel.send(`pong`).then((msg)=>msg.delete({timeout:1000}));
	}
}

module.exports = ping;