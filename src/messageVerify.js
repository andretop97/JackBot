function messageVerify(msg) {
  if (msg.content.startsWith('create')) {
    usersArray = msg.mentions.users.array();
    if (usersArray.length == 0) {
      msg.channel.send('por favor insira um usuario');
      return '';
    } else {
      return 'create';
    }
  }
  if (msg.content.startsWith('update aniversario')) {
    usersArray = msg.mentions.users.array();
    if (usersArray.length == 0) {
      return '';
    } else {
      return 'update aniversario';
    }
  }
  return msg.content;
}

module.exports = messageVerify;
