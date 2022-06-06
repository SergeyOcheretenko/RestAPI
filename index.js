import express from "express";
import config from "./CONFIG.js";

const app = express();

app.get('/', (req, res) => {
    res.status(200).json('Server is working');
});

app.listen(config.PORT, () => console.log('SERVER STARTED'));