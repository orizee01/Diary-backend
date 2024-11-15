import { Response } from '../utils/index';

const errorHandler = (error, req, res) => {
  let code = error.statusCode ? error.statusCode : 500;
  let message = 'Ops!. Something went wrong :(';

  if (error.message === 'jwt malformed') {
    message = 'Invalid or expired token';
    code = 401;
  }

  if (error.message === 'jwt expired' || error.message === 'invalid signature') {
    message = 'Session expired. Kindly login to continue.';
    code = 401;
  }

  logger.error(error.message);
  return Response.error(res, message, code);
};

export default errorHandler;
