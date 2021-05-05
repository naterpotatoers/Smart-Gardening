import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

import logger from "middleware/logger";

// Boot express
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 5000;

// Application routing
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "Hello from Ornio AS" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
