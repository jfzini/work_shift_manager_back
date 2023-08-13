const User = require('../models/user.models');

class UserService {
  async getAll() {
    const users = await User.getAll();
    return users;
  }
}

module.exports = new UserService();