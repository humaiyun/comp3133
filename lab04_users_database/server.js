import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"
dotenv.config();

import User from "./models/users.js"

const app = express();
const PORT = process.env.SERVER_PORT;
const DB_STRING = process.env.MONGODB_CONNECTION_STRING;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).json({ message: "Server is running" }));

app.get("/users", async (req, res) => {
    try {
        const allUsers = await User.find({});
        return res.status(200).json({ data: allUsers });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", erorr: error.message });
    }
});

app.post("/users", async (req, res) => {
    const { name, username, email } = req.body;

    try {
        const existingUser = await User.findOne({ username }) || await User.findOne({ email });
        if(existingUser) throw new Error("User already exists");

        const result = await User.create({ ...req.body }); 

        return res.status(200).json({ message: "Account created successfully", result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong", erorr: error.message });
    }
})

const startServer = async () => {
    try {
        mongoose.set("strictQuery", true);

        mongoose.connect(DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log("Connected to MongoDB"))
            .catch((err) => console.log(err));

        app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
    } catch (error) {
        console.log(error)
    }
}

startServer();