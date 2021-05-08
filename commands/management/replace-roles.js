
// const Discord = require('discord.js');

// const guild = new Discord.Guild();

const replaceRoles = {
	name: 'replace-roles',
	description: 'pledge yourself to a faction',
  args: false,
	execute(message, args) {
    if(message.member.id !== "722551935164612618") return;
    message.channel.send("you are management");
    // let factions = ["Loyalist", "Rebel", "Nihilist", "Eccentric", "Peacekeeper"];
    // factions.forEach(roleName=>{
    //   const role = message.guild.roles.cache.find(role=>role.name==roleName);
    //   if(role) role.delete();
    //   message.guild.roles.create({data:{name:"🔢"+roleName}})
    // })
	}
}

module.exports = replaceRoles;