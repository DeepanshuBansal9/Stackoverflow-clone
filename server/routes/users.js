import express from 'express';
import {ligin,signup} from '../Controllers/auth'
const router =express.Router();

router.post('/signup', signup)
router.post('/login', login)