import express from "express";
import mongoose from "mongoose";
import config from "./CONFIG.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('Server (get) is working');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('Server (post) is working');
});

async function startApp() {
    try {
        await mongoose.connect(config.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(config.PORT, () => console.log('SERVER STARTED'));
    } catch(e) {
        console.log(e);
    }
}

startApp();