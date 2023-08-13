const User = require('../models/user.models');

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
}

module.exports = new UserService();