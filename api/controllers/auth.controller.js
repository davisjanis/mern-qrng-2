import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    //destructure request body from POST method
    const {username, email, password} = req.body;
    // get password and hashit
    const hashedPassword = bcryptjs.hashSync(password, 10);
    
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save()
        res.status(201).json({message: "User Created successfully"});
    
    } catch (error) {
        next(errorHandler(300, "smth went wrong"));
    }

    
};