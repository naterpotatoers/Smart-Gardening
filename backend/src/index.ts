import express, { Request, Response } from 'express'
import cors from 'cors'

import logger from './utils/logger'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(5000, () => {
  logger.info('Server started on http://localhost:5000');
})