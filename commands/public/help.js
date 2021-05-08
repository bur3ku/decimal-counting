const help = {
	name: 'help',
	description: 'help',
  args: false,
	execute(message, args) {
		return message.channel.send(`
      (For a list, of commands, use !commands)
      Loyalist faction: loyalists go by the total channel message count.
      Rebel faction: Rebels reject the total message count. Instead, they just increment each other's counts, ignoring the other counts.
      Nihilist faction: Nihilists restarted the message count from 1 a while ago because they didn’t care enough to deal with the battle between the loyalists and rebels. They increment each other's counts.
      Eccentric faction: Eccentrics restarted with the nihilists, but they base the count on the number of messages since the restart. 
      Peacekeeper faction: Peacekeepers include the counts of all factions.
    `);
	}
}

module.exports = help;