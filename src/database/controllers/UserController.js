const User = require('../model/User.js');
module.exports = {
  async getUsersByBirthday(date) {
    return await User.findAll({ where: { birthday: date } });
  },

  async getAllUsers() {
    return await User.findAll();
  },
  async update(body) {
    const { discord_id, username, discriminator, birthday } = body;
    await User.update(
      {
        discord_id,
        username,
        discriminator,
        birthday,
      },
      {
        where: {
          discord_id: body.discord_id,
        },
      }
    );
  },
  async store(body) {
    const { discord_id, username, discriminator, birthday } = body;

    if ((await User.findOne({ where: { discord_id } })) == null) {
      const user = await User.create({
        discord_id,
        username,
        discriminator,
      });
      console.log(user);
    } else {
      console.log('usuario ja existe');
    }
  },
};
