import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

//sign up route function
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
        next(error);
    }    
};

//sign in route function
// we use (next) for middleware handling errors
export const signin = async (req, res, next) => {
    const {email,password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(404, 'User not found'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
        // when email n password are correct, we want to add token to the cookie of the browser
        //token is hashed value of unique things from the user(email, id, username, etc) we make this thing encrypted and put in insede the cookie, and later when we need to verify the user, we can use that token.
        //JWT TOKEN CREATION
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        //remove client password from server response
       const {password: hashedPassword, ...rest} = validUser._doc;
       // token expiration
        const expiryDate = new Date(Date.now() + 3600000);
        // SET JWT TOKEN IN A COOKIE in the HTTP response
        res
            .cookie('access_token', token, {httpOnly: true, expires: expiryDate})
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
}

//google route func
export const google = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest } = user._doc;
        const expiryDate = new Date(Date.now() + 3600000); 
        res
          .cookie('access_token', token, { 
            httpOnly: true,
            expires: expiryDate
          })
          .status(200)
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) + 
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
            username: 
              req.body.name.split(" ").join("").toLowerCase() + 
              // (Math.floor(Math.random() * 10000)).toString(),
              Math.random().toString(36).slice(-8),
            email: req.body.email,
            password: hashedPassword,
            profilePicture: req.body.photo 
         });
         await newUser.save();
         const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET);
         const { password: hashedPassword2, ...rest } = newUser._doc;
         const expiryDate = new Date(Date.now() + 3600000);
         res
            .cookie('access_token', token, {
            httpOnly: true,
            expires: expiryDate,
          })
            .status(200)
            .json(rest);
      }
    } catch (error) {
      next(error);
    }
  };

  //signout route function - clear cookie

  export const signout = (req, res) => {
    res.clearCookie('access_token').status(200).json('Signout success!');
  };


  