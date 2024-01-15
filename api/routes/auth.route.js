import express from 'express';
import { google, signin, signup, signout } from '../controllers/auth.controller.js';

//create instance of a modular router, to define routes and middleware
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signout);

export default router;
//will be imported in index.js as authRoutes