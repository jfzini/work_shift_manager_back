const camelize = require('camelize');
const connection = require('../configs/connection');
const { reduceUserShifts } = require('../utils/reduces.utils');
const { insertQuery } = require('../utils/queries.utils');

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

  async create(user) {
    await connection.execute(...insertQuery('user', user));
  }

  async insertShift(shift) {
    await connection.execute(...insertQuery('shift_history', shift));
  }
}

module.exports = new UserModel();
