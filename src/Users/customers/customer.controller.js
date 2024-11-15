/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import CustomerService from './customer.service';
import { Response, Helpers } from '../../../utils';

/**
 * controllers that contains methods for managing customer endpoints
  * @class CustomerController
 */
class CustomerController {
  /**
   * creates a new customer
   *
   * @static
   * @param {Request} req - The request from the endpoint.
   * @param {Response} res - The response returned by the method.
   * @returns { JSON } A JSON response with a success message or error.
   * @memberof CustomerController
   */
  static async CustomerController(req, res) {
    // Destructure only the required field
    const { name, email, password, role } = req.body;

    // Normalize the email
    const trimmedEmail = email ? email.trim().toLowerCase() : null;

    // check if email already exists
    const customerExist = await CustomerService.getCustomerByEmail({ email: trimmedEmail });
    if (customerExist) {
      return Response.error(res, 'Accout exist, Kindly proceed to the login Screen', 409);
    }
    // hashed the data before storing
    const hashedPassword = await Helpers.hashPassword(password);

    // Prepare the customer data for creation
    const CustomerData = {
      name,
      email: trimmedEmail,
      password: hashedPassword,
      role
    };

    // Create new Customer

    const customer = await CustomerService.createCustomer(CustomerData);

    // send response with limited customer details
    Response.info(res, 'User created successfully!', 201, _.pick(customer, ['name', 'role', 'email']));
  }
}
export default CustomerController;
