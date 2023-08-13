const camelize = require('camelize');
const connection = require('../configs/connection');

class UserModel {
  async getAll() {
    const [users] = await connection.execute('SELECT * FROM user');
    return camelize(users);
  }

  async getById(id) {
    const [[user]] = await connection.execute('SELECT * FROM user WHERE user_id = ?', [id]);
    return camelize(user);
  }
}

module.exports = new UserModel();