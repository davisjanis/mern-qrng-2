import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
dotenv.config();

//connect the database
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

    //start the app
const app = express();

//to receive json as input
app.use(express.json());

app.use(cookieParser());

//app use the port
app.listen(3000, () => {
    console.log('Server listening on port 3000!');
}); 

//MOUNT MIDDLEWARE FUNCTIONS 
// middleware funcs are functions with access to the req or res object, and the next middleware func in the apps request-response cycle.
// userRoutes is imported from user.route.js as export default user
app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);

// error handling middleware
    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error';
        return res.status(statusCode).json({
            success: false,
            message,
            statusCode,
        })
    }
    )