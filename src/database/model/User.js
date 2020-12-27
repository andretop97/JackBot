const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init(
      {
        discord_id: DataTypes.STRING,
        username: DataTypes.STRING,
        discriminator: DataTypes.STRING,
        birthday: DataTypes.DATE,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = User;
