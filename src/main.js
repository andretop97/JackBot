require('dotenv').config();
const Discord = require('discord.js');
const cron = require('node-cron');
const acceptedTextActions = require('./acceptedTextActions.js');
const messageVerify = require('./messageVerify.js');
const UserController = require('./database/controllers/UserController.js');

const youtubeplayer = require('./utils/youtubePlayer.js');

require('./database/connection.js');

const client = new Discord.Client();

// TODO
// Chamada ao cron para agendar ação de verificar aniversarintes

// cron.schedule('* * * * *', async () => {
//   const today = new Date();
//   today.setDate(today.getDate() - 1);
//   users = await UserController.getUsersByBirthday(today);
//   console.log(users);
// });

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', (msg) => {
  const message = messageVerify(msg);
  const action = acceptedTextActions[message.toLowerCase()];

  if (msg.content == 'youtube') {
    youtubeplayer.connect(msg.member.voice.channel);

    console.log(youtubeplayer.queue);
  }

  if (action) {
    action(msg);
  }
});

client.login(process.env.BOT_TOKEN);
