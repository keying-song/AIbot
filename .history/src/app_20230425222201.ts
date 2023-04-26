import express, { Application } from 'express';
import todoRouter from './router/todo-router';
import authRouter from './router/auth-router';
import { Database } from './database';
import { ppid } from 'process';

const app: Application = express();

app.use(express.json());

app.use('/todo', todoRouter);
app.use('/auth', authRouter);
app.use("/",(req, res)=>{
  res
} )

databseInit();

async function databseInit() {
  await Database.initilize();
  app.listen(8000);
  console.log("DB connected. server run at port 8000");
}
