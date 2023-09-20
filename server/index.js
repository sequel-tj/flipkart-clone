import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js'

const app = express();
const log = console.log;

dotenv.config({path: './.env'});

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

DefaultData();

app.listen(process.env.PORT, () => log(`server running on port: ${process.env.PORT}`));