const express = require('express');

const userRouter = express.Router();
const User = require('../controllers/user.controllers');

userRouter.get('/', User.getAll);

module.exports = userRouter;