import db from '../../setup/index';
import CustomerQueries from './customer.queries';
import { generateToken } from '../../../utils/helper';

export default class CustomerService {
  /**
   * Fetches a customer using email
   * @memberof CustomerService
   * @param {string} email - The email of the customer
   * @returns { Promise<Object | Error> } A promise that resolves or rejects
   * with an Object of the customer resource or a DB Error.
  */
  static async getCustomerByEmail(email) {
    return db.oneOrNone(CustomerQueries.findCustomer, [email]);
  }

  /**
   * creates a customer
   * @memberof CustomerService
   * @param {string} data - The details of the new customer
   * @returns { Promise<Object | Error> } A promise that resolves or rejects
   * with an Object of the customer resource or a DB Error.
  */
  static async createCustomer(data) {
    const { name, email, password, role } = data;

    const reference = generateToken(10);
    const customer = await db.one(CustomerQueries.saveCustomer, [
      name,
      email,
      password,
      role,
      reference
    ]);

    return customer;
  }
}
