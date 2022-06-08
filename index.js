import express from "express";
import mongoose from "mongoose";
import config from "./CONFIG.js";
import Post from "./Post.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json('Server (get) is working');
});

app.post('/', async (req, res) => {
    try {
        const { author, title, content, picture } = req.body;
        const post = await Post.create({ author, title, content, picture });
        res.json(post);
    } catch (e) {
        res.status(500).json(e);
    }    
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