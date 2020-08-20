import './env';

import Discord from 'discord.js';
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

async function main() {
  try {
    const guild = new Discord.Guild(client, { id: '746058055824703629 ' });

    client.on('ready', () => {
      console.log(`Logged in as ${client?.user?.tag}!`);
    });

    client.on('message', message => {
      if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
      }
    });

    client.on('messageReactionAdd', async (reaction, user) => {
      if (
        reaction.message.id !== process.env.MESSAGE_ID ||
        reaction.emoji.name !== '☑️'
      ) {
        return;
      }

      const member = await guild.members.fetch(user.id);
      const role = new Discord.Role(
        client,
        { id: '746076573685252186' },
        guild
      );

      member.roles.set([role]);
    });

    client.on('messageReactionRemove', async (reaction, user) => {
      if (
        reaction.message.id !== process.env.MESSAGE_ID ||
        reaction.emoji.name !== '☑️'
      ) {
        return;
      }
      const member = await guild.members.fetch(user.id);
      member.roles.set([]);
    });

    client.login(process.env.BOT_TOKEN);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
