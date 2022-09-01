import 'dotenv/config'; // env vars import
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import aws from 'aws-sdk';
import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter';
import authRouter from './routes/authRouter';
// FOR DEV/PROD ENV: UNCOMMENT LINE BELOW
// note: dotenv conditional does not fix parsing issue with jest env
const filename = fileURLToPath(import.meta.url);
// AWS setup
aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: 'us-west-1',
    signatureVersion: 'v4',
});
// express constants
const app = express();
const PORT = process.env.PORT || 3000;
// basic middleware
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());
// serve static files
if (process.env.NODE_ENV?.trim() === 'production') {
    // FOR DEV/PROD ENV: UNCOMMENT LINE BELOW
    app.use(express.static(path.join(path.dirname(filename), '../../build')));
    // FOR TESTING ENV: UNCOMMENT LINE BELOW
    // app.use(express.static(path.join(__dirname, '../../build')));
}
else {
    // FOR DEV/PROD ENV: UNCOMMENT LINE BELOW
    app.use(express.static(path.join(path.dirname(filename), '../client/')));
    // FOR TESTING ENV: UNCOMMENT LINE BELOW
    // app.use(express.static(path.join(__dirname, '../client/')));
}
// routes here
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/auth', authRouter);
// server start
// prevent running this when testing
if (process.env.NODE_ENV?.trim() !== 'test') {
    app.listen(typeof PORT === 'string' ? Number(PORT) : PORT, () => console.log(`[Server] Started on port :${PORT}`));
}
export default app;
