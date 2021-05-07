const ping = {
	name: 'philosophies',
	description: 'List the counting philosophies',
  args: false,
	execute(message, args) {
		return message.channel.send(`
    Loyalists: Each message should include the number that is equal to the number of total messages on the channel. Conversation should be appended to messages. Ex. on the 123rd channel message: “123 hey guys how’s it goin”
    \nRebels: Conversations can happen without counting. Each count should increment the last. If someone messes up, correct them. But if they aren’t corrected, so be it, just continue on.
    \nNihilists: Each message should increment the last. Mistakes are completely ignored.
    \nRedeoer/Nihilist: The count starts over from 1 when capslpop proposed to. Ther redoers are the only faction that follow the nihilist philosophy, which 
    \nCompromisers: Each message should include the loyalist, rebel, and redoer counts. Ex. “4 / 2010 / 2223”
        `);
    message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	}
}

module.exports = ping;