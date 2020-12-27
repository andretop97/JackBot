const UserController = require('./database/controllers/UserController');

const acceptedTextActions = {
  'Parabens Dener': function (msg) {
    const text = `PAURABENS PRO MAIOR ESPECIALISTA EM PEDRA DO GUANABARA ${msg.guild.member(
      '273900699274838026'
    )}( olha que isso é muita coisa )`;

    const imageUrl =
      'https://cdn.discordapp.com/attachments/361345189077319680/789686749390700554/unknown.png';

    msg.channel.send(text);
    msg.channel.send(imageUrl);
  },

  'Parabens meu anjo': function (msg) {
    const text = `PARABENS , FELIZ ANIVERSARIO ${msg.guild.member(
      '530500971680366593'
    )} PELO BOT ATRASADO`;

    const imageUrl = 'https://tenor.com/view/celebracion-gif-4928012';

    msg.channel.send(text);
    msg.channel.send(imageUrl);
  },

  'feliz natal': function (msg) {
    const text = 'PEGA NO MEU PAU';

    msg.channel.send(text);
  },

  'create': function (msg) {
    msg.mentions.users.forEach((user) => {
      UserController.store({
        discord_id: user.id,
        username: user.username,
        discriminator: user.discriminator,
      });
    });
  },

  'update aniversario': function (msg) {
    const birthday = msg.content.split(' ').pop();
    const [day, month, year] = birthday.split('/');
    const date = new Date(year, month - 1, day);

    msg.mentions.users.forEach((user) => {
      UserController.update({
        discord_id: user.id,
        username: user.username,
        discriminator: user.discriminator,
        birthday: date,
      });
    });
  },

  'teste': function (msg) {
    msg.guild.members
      .fetch()
      .then((response) => {
        response.forEach((member) => {
          if (member.user.username == 'DotPotato') {
            console.log(member);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  'help': function (msg) {
    console.log(acceptedActions);
  },
};

module.exports = acceptedTextActions;
