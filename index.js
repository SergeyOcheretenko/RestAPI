import express from "express";
import mongoose from "mongoose";
import config from "./CONFIG.js";
import router from './router.js';

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(config.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(config.PORT, () => console.log('SERVER STARTED'));
    } catch(e) {
        console.log(e);
    }
}

startApp();