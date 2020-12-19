import Discord from 'discord.js';
import { config } from 'dotenv';
import acceptedActions from './acceptActions.js';

config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', (msg) => {
  const action = acceptedActions[msg.content];

  if (action) {
    action(msg);
  }
});

client.login(process.env.BOT_TOKEN);
