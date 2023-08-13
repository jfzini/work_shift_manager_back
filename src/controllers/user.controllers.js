const User = require('../services/user.services');

class UserController {
  async getAll(req, res) {
    const users = await User.getAll();
    res.json(users);
  }
}

module.exports = new UserController();