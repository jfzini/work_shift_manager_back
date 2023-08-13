const camelize = require('camelize');
const connection = require('../configs/connection');
const { reduceUserShifts } = require('../utils/reduces.utils');

class UserModel {
  async getAll() {
    const [users] = await connection.execute('SELECT * FROM user');
    return camelize(users);
  }

  async getById(id) {
    const [[user]] = await connection.execute('SELECT * FROM user WHERE user_id = ?', [id]);
    return camelize(user);
  }

  async getShiftsById(id) {
    const [rawUserShifts] = await connection.execute(
      'SELECT * FROM shift_history WHERE user_id = ?',
      [id],
    );
    const userShifts = reduceUserShifts(camelize(rawUserShifts), id);
    return userShifts;
  }
}

module.exports = new UserModel();
