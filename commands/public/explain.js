
const explain = {
	name: 'explain',
	description: 'get a quick explanation of the decimal-counting channel',
  args: false,
	execute(message, args) {
		return message.channel.send(`See this doc for an explanation: https://docs.google.com/document/d/1S2x1TdRU5qjn7sxRpJSD2a1mYpEZ3_wotSH3bBjdQ5k/edit#bookmark=id.yvhpainib1kw`)
		.catch((err) => {console.log(err)});
	}
}

module.exports = explain;