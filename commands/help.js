const ping = {
	name: 'help',
	description: 'help',
  args: false,
	execute(message, args) {
		return message.channel.send(`
      How to count: The decimal-counting channel has split into factions. Each factions counts differently. Choose a faction using !pledge [faction name].
      \nLoyalists go by the total channel message count (count = total number of previous messages on the channel + 1).
      \nRebels reject the total message count. Instead, they just increment each other's counts. (count = last count by a member of the rebel faction + 1)
      \nNihilists ignore both the loyalists and rebels. They restarted the message count from 1 a while ago. They increment each other's counts (count = last count by a "faction with no name" member + 1)
      \nEccentrists restarted when the nihilists did, but thereafter based the count on the number of messages since the nihilist epoch (count = last count by an eccentric + 1)
      \nUse !explain for a more comprehensive explanation.
    `);
	}
}

module.exports = ping;