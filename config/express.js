/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import FileStreamRotator from 'file-stream-rotator';
import 'express-async-errors';
import loggerInit from '../logger';
import routes from '../routes/apiGatWay';
import errorHandler from './errorHandler';
// eslint-disable-next-line no-unused-vars
import config from '.';

const logDirectory = '../logger';
const checkLogDir = fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const expressConfig = (app) => {
  let accessLogStream;
  let logger;

  // initialize logger
  if (app.get('env') === 'development') logger = loggerInit('development');
  else if (app.get('env') === 'production') logger = loggerInit('production');
  else if (app.get('env') === 'test') logger = loggerInit('test');
  else logger = loggerInit();

  global.logger = logger;
  logger.info('Application starting...');
  logger.debug("Overriding 'Express' logger");

  if (checkLogDir) {
    accessLogStream = FileStreamRotator.getStream({
      date_format: 'YYYYMMDD',
      filename: `${logDirectory}/access-%DATE%.log`,
      frequency: 'weekly',
      verbose: false,
    });
  }

  app.use(morgan('combined', { stream: accessLogStream }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Use helmet to secure Express headers
  app.use(helmet());
  app.disable('x-powered-by');

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use('/v1/', routes);
  app.use(errorHandler);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development' || app.get('env') === 'test') {
    app.use((err, req, res) => res.status(err.status || 500)
      .json({
        message: err.message,
        error: err,
      }));
  }

  // production error handler
  // remove stacktrace
  app.use((err, req, res) => res.status(err.status || 500).json({ message: err.message }));
};

export default expressConfig;
