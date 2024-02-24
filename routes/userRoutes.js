import express from 'express';
import path from 'path';
import upload from '../middlewares/fileUploadMiddleware.js';
import UserControllers from '../controllers/userControllers.js';


const userControllers = new UserControllers();

import multer from 'multer'

const userRouter = express.Router();

// @ GET User Register Form
userRouter.get('/register', (req, res, next) => {
    userControllers.getRegisterFormController(req, res, next)
})

// + User Register Controller

userRouter.post('/register', upload.single('profilePic'), (req, res, next) => {
    userControllers.userRegisterController(req, res, next)
})

export default userRouter;