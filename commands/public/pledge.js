
const pledge = {
	name: 'pledge',
	description: 'pledge yourself to a faction',
  args: false,
	execute(message, args) {
    if(args.length !== 1) return message.channel.send("Incorrect format. Go like !pledge [faction-name]");
    const roleName = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase();
    let factions = ["Loyalist", "Rebel", "Nihilist", "Eccentric", "Peacekeeper"];
    if(!factions.includes(roleName)) return message.channel.send("That's not a valid faction name. Use !factions to see the list");
    
    const newRole = message.member.guild.roles.cache.find(role => role.name === "🔢" + roleName);
    if(!newRole) return message.channel.send("Something went wrong. Message @bur3ku");
    message.member.roles.add(newRole);

    const oldRole = message.member.roles.find(role=>role.name.startsWith("🔢"));
    console.log(message.member.roles);
    oldRole.delete();

    message.channel.send(`Welcome, ${message.member.name}, to the ${newRole} faction`);
	}
}

module.exports = pledge;