import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Router from './routes/route.js';
import Connection from './database/db.js';
import DefaultData from './default.js'

const app = express();

dotenv.config({ path: './.env' });

app.use(express.json());
app.use(cors());
app.use('/', Router);

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

DefaultData();

app.listen(process.env.PORT, () => console.log(`server running on port: ${process.env.PORT}`));