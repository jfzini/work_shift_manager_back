const User = require('../services/user.services');

class UserController {
  async getAll(req, res) {
    const users = await User.getAll();
    if (users) return res.status(200).json(users);
    return res.status(404).json({ message: 'Error accessing database' });
  }

  async getById(req, res) {
    const { id } = req.params;
    const user = await User.getById(id);
    if (user) return res.status(200).json(user);
    return res.status(404).json({ message: 'User not found' });
  }

  async getShiftsById(req, res) {
    const { id } = req.params;
    const userShifts = await User.getShiftsById(id);
    if (userShifts.shifts.length) return res.status(200).json(userShifts);
    return res.status(404).json({ message: 'No shifts found for that user' });
  }
}

module.exports = new UserController();