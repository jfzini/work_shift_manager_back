const express = require('express');

const userRouter = express.Router();
const User = require('../controllers/user.controllers');

// middlewares
const {validateUserFields, validateShiftFields} = require('../middlewares/validateCreation');

userRouter.get('/', User.getAll);
userRouter.get('/:id', User.getById);
userRouter.get('/:id/shifts', User.getShiftsById);
userRouter.post('/', validateUserFields, User.create);
userRouter.post('/:id', validateShiftFields, User.insertShift);

module.exports = userRouter;