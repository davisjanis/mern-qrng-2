import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

    //start the app
const app = express();

//to receive json as input
app.use(express.json());

//app use the port
app.listen(3000, () => {
    console.log('Server listening on port 3000!');
}); 

//MOUNT MIDDLEWARE FUNCTIONS (app.use is Express method to do that)
// middleware funcs are functions that have avvess to the req or res object, and the next middleware func in the apps request-response cycle.


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