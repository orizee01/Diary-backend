/* eslint-disable import/no-extraneous-dependencies */

import bcrypt from 'bcrypt';
import Chance from 'chance';

const chance = new Chance();

/**
 * This is used for generating a hash and a salt from a String.
 * @param {string} password - String to be encrypted.
 * @memberof Helper
 * @returns {Promise<string>} - A promise that resolves to the hashed password.
 */
export const hashPassword = (password) => bcrypt.hash(password, 10);

/**
 * This generates a token.
 * @param {number} length - The length of the token.
 * @memberof Helper
 * @returns {string} - Generated unique token.
 */
export const generateToken = (length) => chance.string({ length, alpha: true, numeric: true });

/**
 * This generates an OTP.
 * @param {number} length - The length of the OTP.
 * @memberof Helper
 * @returns {string} - Generated OTP.
 */
export const generateOTP = (length) => chance.string({ length, numeric: true });

// Export all functions as a default object
export default {
  hashPassword,
  generateToken,
  generateOTP
};
