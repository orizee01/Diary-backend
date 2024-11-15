export default {
  findCustomer: `
  SELECT * FROM customer
   WHERE email = $1`,

  saveCustomer: `
    INSERT INTO customer(
      name,
      email,
      password,
      role
    ) VALUES ($1, $2, $3, $4 )
    RETURNING *;
  `,

};
