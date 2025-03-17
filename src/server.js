import connectDB from './database/index.js';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8080

connectDB()
.then(() => {
    app.listen(port, ()=>{
        console.log("Server Started on port", port);
    });
    
})
.catch((err) => {
    console.log("MongoDB connection Failed!!", err);
})

/*
Connect DB is an asynchronus function and therefore it returns a promise which is then and that promise can be failed which is catch 
Now both try and catch have callback functions
*/