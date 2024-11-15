/* eslint-disable import/no-extraneous-dependencies */
import status from 'http-status';

export const info = (res, message, code, data = []) => res.status(code).json({
  status: 'success',
  message,
  data,
});

export const error = (res, message = '', data, code = 500) => res.status(code).json({
  status: 'error',
  message: message || status[`${code}_NAME`],
  data,
});
