const camelize = require('camelize');
const connection = require('../configs/connection');

class UserModel {
  async getAll() {
    const [users] = await connection.execute('SELECT * FROM user');
    return camelize(users);
  }
}

module.exports = new UserModel();