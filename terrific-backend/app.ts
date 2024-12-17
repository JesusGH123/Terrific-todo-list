import express from 'express';
import bodyParser from 'body-parser';
import { makeConnection } from "./helpers/connection"
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

let index = require('./routes/index');
app.use(cors({
    origin: process.env.CORS_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", index);

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
    makeConnection();
});