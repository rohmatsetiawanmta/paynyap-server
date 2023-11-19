import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api', routes);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

app.listen(port, () => {
  console.log(`[TS server]: Server is running at http://localhost:${port}`);
});
