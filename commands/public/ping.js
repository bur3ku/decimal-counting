const ping = {
	name: 'ping',
	description: 'ping',
  args: false,
	execute(message, args) {
		return message.channel.send(`pong`).catch(error =>
      console.log(error)
    );
	}
}

module.exports = ping;