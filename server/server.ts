import  dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import express from "express";
import cors from "cors";
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { connectToDB } from './script';
import { appRouter } from './routers';

// connect to the database
const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

console.log(process.env.DATABASE_URL);

connectToDB();


// launch web server
const app = express();

app.use(cors({
    origin: "*"
}));

app.use('/trpc', createExpressMiddleware({ router: appRouter }));

app.listen(3000, () => console.dir("server is running on port 3000 🔥🔥"));
