import './env';

import Discord from 'discord.js';
const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION'],
});
const guild = new Discord.Guild(client, { id: process.env.SERVER_ID });

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on('message', message => {
  if (message.content.toLowerCase() === '!ping') {
    message.channel.send('Pong.');
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  try {
    if (
      reaction.message.id !== process.env.MESSAGE_ID ||
      reaction.emoji.name !== '☑️'
    ) {
      return;
    }

    const member = await guild.members.fetch(user.id);
    const role = new Discord.Role(client, { id: process.env.ROLE_ID }, guild);

    member.roles.set([role]);
  } catch (error) {
    console.log(error);
  }
});

client.on('messageReactionRemove', async (reaction, user) => {
  try {
    if (
      reaction.message.id !== process.env.MESSAGE_ID ||
      reaction.emoji.name !== '☑️'
    ) {
      return;
    }

    const member = await guild.members.fetch(user.id);
    member.roles.set([]);
  } catch (error) {
    console.log(error);
  }
});

client.login(process.env.BOT_TOKEN);
