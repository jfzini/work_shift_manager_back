const express = require('express');

const userRouter = express.Router();
const User = require('../controllers/user.controllers');

// middlewares
const validateFields = require('../middlewares/validateCreation');

userRouter.get('/', User.getAll);
userRouter.get('/:id', User.getById);
userRouter.get('/:id/shifts', User.getShiftsById);
userRouter.post('/', validateFields, User.create);
userRouter.post('/:id', User.insertShift);

module.exports = userRouter;