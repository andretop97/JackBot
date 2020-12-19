const acceptedActions = {
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

  'teste': function (msg) {
    msg.guild.members
      .fetch()
      .then((response) => {
        response.forEach((member) => {
          if (member.user.username == 'lawlie') {
            console.log(member.user);
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

export default acceptedActions;
