import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes.js';

const app = express();

app.use(cors({
    origin: process.env.RELOADER_2_URL,
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());

app.use(routes);

export default app;
