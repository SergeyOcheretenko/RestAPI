import express from "express";
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

app.listen(config.PORT, () => console.log('SERVER STARTED'));