
const explain = {
	name: 'explain',
	description: 'get link to explanation of the decimal-counting channel',
  args: false,
	execute(message, args) {
		return message.channel.send(`See this doc for an explanation: https://docs.google.com/document/d/1S2x1TdRU5qjn7sxRpJSD2a1mYpEZ3_wotSH3bBjdQ5k/edit#bookmark=id.yvhpainib1kw`)
		.then((msg)=>msg.delete({timeout:1000}))
	}
}

module.exports = explain;