import express, { Express } from "express";
import { authRouter, userRouter } from "./routes";
import { config } from 'dotenv'; 

config()

const app: Express = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('🚀 Server running on port ' + port))