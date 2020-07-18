import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParse from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['fake string'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
