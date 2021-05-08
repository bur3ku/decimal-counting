const ping = {
	name: 'history',
	description: 'Get link to the decimal-counting channel\'s history',
  args: false,
	execute(message, args) {
		return message.channel.send(`History doc link: https://docs.google.com/document/d/1S2x1TdRU5qjn7sxRpJSD2a1mYpEZ3_wotSH3bBjdQ5k/edit?usp=sharing`);
	}
}

module.exports = ping;