import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js'
import cors from 'cors';
import Router from './routes/route.js';

const app = express();
const log = console.log;

dotenv.config({path: './.env'});

app.use(express.json()); 
app.use(cors());
app.use('/', Router);

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

DefaultData();

app.listen(process.env.PORT, () => log(`server running on port: ${process.env.PORT}`));