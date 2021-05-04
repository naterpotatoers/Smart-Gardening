import express from 'express'
import cors from 'cors'

import logger from './utils/logger'
import router from './routes/routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', router);

app.listen(5000, () => {
  logger.info('Server started on http://localhost:5000');
})