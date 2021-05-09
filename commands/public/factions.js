const factions = {
	name: 'factions',
	description: 'List the counting philosophies',
  args: false,
	execute(message, args) {
		return message.channel.send(`
-Loyalists go by the total channel message count.
-Rebels reject the total message count. They go by the last rebel count (in other words, the just increment each other's counts, ignoring the other faction counts)
-Nihilists restarted the message count from 1 a while ago because they didn’t care enough to deal with the battle between the loyalists and rebels. They go by the last nihilist count.
-Eccentrics restarted with the nihilists, but they base the count on the number of messages since the restart.
-Peacekeepers include the counts of all factions, in the form of "loyalist count / rebel count / nihilist count / eccentric count"
    `).then((msg)=>msg.delete({timeout:5000}));
	}
}

module.exports = factions;