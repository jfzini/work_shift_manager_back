const User = require('../services/user.services');

class UserController {
  async getAll(req, res) {
    const users = await User.getAll();
    res.json(users);
  }

  async getById(req, res) {
    const { id } = req.params;
    const user = await User.getById(id);
    res.json(user);
  }
}

module.exports = new UserController();