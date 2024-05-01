import express, { NextFunction, Request, Response } from 'express';
import authRoute from './routes/auth.routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../public/swagger.json';

//express app
const app = express();  

//middleware
app.use(express.json());
app.use(express.static('public'));

app.use((_req: Request, _res: Response, _next: NextFunction) => {
  console.log(_req.path, _req.method);
  _next();
});

// serve your swagger.json file
app.get('/docs/swagger.json', (req: Request, res: Response) => {
  res.sendFile('swagger.json', { root: '.' });
});

//route
app.use('/auth/', authRoute);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
