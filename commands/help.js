const ping = {
	name: 'help',
	description: 'help',
  args: false,
	execute(message, args) {
		return message.channel.send(`
      How to count: The decimal-counting channel has split into factions. Each factions counts differently. Choose a faction using !pledge [faction name].
      \nLoyalists go by the total channel message count. The O.Gs.
      \nRebels reject the total message count. Instead, they just increment each other's counts, ignoring the other counts. The cool kids.
      \nNihilists restarted the message count from 1 a while ago because they didn’t care enough to deal with the battle between the loyalists and rebels. Nihilists only increment counts from other nihilists.
      \nEccentrists also restarted, but they base the count on the number of messages since the restart. The weirdos. They use two search queries and a gd calculator to find the right count.
      \nCompromisers include the counts of all the other factions. This is currently popular, because it helps keep track of the counts before faction roles are created. The peacekeepers.
      
    `);
	}
}

module.exports = ping;