
const pledge = {
	name: 'pledge',
	description: 'pledge yourself to a faction. Gives you a faction role. Syntax: !pledge [loyalist | rebel | nihilist | eccentric | peacekeeper]',
  args: false,
	execute(message, args) {
    if(args.length !== 1) return message.channel.send("Incorrect format. Go like !pledge [faction-name]").then((msg)=>msg.delete({timeout:1000}));
    const roleName = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase();
    let factions = ["Loyalist", "Rebel", "Nihilist", "Eccentric", "Peacekeeper"];
    if(!factions.includes(roleName)) return message.channel.send("That's not a valid faction name. Use !factions to see the list").then((msg)=>msg.delete({timeout:1000}));
    
    const newRole = message.member.guild.roles.cache.find(role => role.name === "🔢" + roleName);
    if(!newRole) return message.channel.send("Something went wrong. Message @bur3ku");
    message.member.roles.add(newRole);

    const oldRole = message.member.roles.cache.find(role=>role.name.startsWith("🔢"));
    if(oldRole) message.member.roles.remove(oldRole);

    message.channel.send(`Successfully joined the ${newRole.name} faction!`).then(msg=>msg.delete({timeout:1000}));
	}
}

module.exports = pledge;