import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

import restaurantRoutes from "./routes/restaurant.js"

const app = express();
const PORT = process.env.SERVER_PORT;
const DB_STRING = process.env.MONGODB_CONNECTION_STRING;

import Restaurant from "./models/restaurant.js"

app.use("/restaurants", restaurantRoutes);

app.get("/", (req, res) => res.status(200).json({ message: "Server is running" }));

const startServer = async () => {
    try {
        mongoose.connect(DB_STRING, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }).then(() => console.log("Connected to MongoDB"))
          .catch((err) => console.log(err));

        app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

        
        
    } catch (error) {
        console.log(error)
    }
}

startServer();
