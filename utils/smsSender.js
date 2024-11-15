// import AfricasTalking from 'africastalking';

// const {
//   PAYSMOSMO_SMS_USERNAME,
//   PAYSMOSMO_SMS_API_KEY,
//   PAYSMOSMO_SMS_SENDER_ID,
//   PAYSMOSMO_NODE_ENV
// } = process.env;

// const sendSMS = async (phoneNumber, message) => {
//   if (PAYSMOSMO_NODE_ENV === 'test') return true;

//   const africasTalking = new AfricasTalking({
//     apiKey: PAYSMOSMO_SMS_API_KEY,
//     username: PAYSMOSMO_SMS_USERNAME
//   });

//   const options = { to: phoneNumber, message };
//   if (PAYSMOSMO_SMS_SENDER_ID) options.from = PAYSMOSMO_SMS_SENDER_ID;

//   const response = await africasTalking.SMS.send(options);
//   logger.info(response);

//   const { SMSMessageData: { Recipients } } = response;
//   return Recipients[0].statusCode === 101;
// };

// export default sendSMS;
