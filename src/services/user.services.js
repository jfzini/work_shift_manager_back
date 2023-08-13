const User = require('../models/user.models');
const formatShift = require('../utils/formatDates.utils');

class UserService {
  async getAll() {
    const users = await User.getAll();
    return users;
  }

  async getById(id) {
    const user = await User.getById(id);
    return user;
  }

  async getShiftsById(id) {
    const userShifts = await User.getShiftsById(id);
    return userShifts;
  }

  async create(user) {
    await User.create(user);
  }

  async insertShift(id, body) {
    const totalShift = formatShift(body);

    const shift = {
      userId: id,
      ...body,
      totalShift,
    };

    await User.insertShift(shift);
  }
}

module.exports = new UserService();
