const express = require('express');

const userRouter = express.Router();
const User = require('../controllers/user.controllers');

userRouter.get('/', User.getAll);
userRouter.get('/:id', User.getById);
userRouter.get('/:id/shifts', User.getShiftsById);

module.exports = userRouter;