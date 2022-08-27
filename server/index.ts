import 'dotenv/config'; // env vars import

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter';
import authRouter from './routes/authRouter';

// __dirname TS replacement
// const filename = fileURLToPath(import.meta.url);

// express constants
const app: express.Application = express();
const PORT: number | string = process.env.PORT || 3000;

// basic middleware
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

// serve static files
if (process.env.NODE_ENV?.trim() === 'production') {
    // app.use(express.static(path.join(path.dirname(filename), '../../build')));
    app.use(express.static(path.join(__dirname, '../../build')));
} else {
    // app.use(express.static(path.join(path.dirname(filename), '../client/')));
    app.use(express.static(path.join(__dirname, '../client/')));
}

// routes here
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/auth', authRouter);

// server start
// prevent running this when testing
if (process.env.NODE_ENV?.trim() !== 'test') {
    app.listen(typeof PORT === 'string' ? Number(PORT) : PORT, () =>
        console.log(`[Server] Started on port :${PORT}`)
    );
}

export default app;
