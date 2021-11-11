const asyncHandler = require('../middleware/async');
const CustomerRepo = require('../models/Customer.model');

/**
 * @description: Add a new Customer to database
 */
exports.addCustomer = asyncHandler(async (req, res, next) => {
  const Customer = CustomerRepo();

  const response = await Customer.save({
    FIRSTNAME: req.body.firstname,
    SURNAME: req.body.lastname,
    ADDRESS: req.body.address,
    ALT_NUMBER: req.body.altNumber,
    CITY: req.body.city,
    COMMENTS: req.body.comments,
    COUNTRY: req.body.country,
    EMAIL: req.body.email,
    PHONE_NUMBER: req.body.phoneNumber,
    CREATED_BY: req.body.createdBy,
  });

  return res.send({
    status: true,
    message: response,
  });
});


/**
 * @description: delete a Customer from database
 */
exports.deleteCustomer = asyncHandler(async (req, res, next) => {
  const Customer = CustomerRepo();

  const response = await User.delete({
    ID: req.params.id,
  });


  return res.send({
    status: true,
    message: response,
  });



});


exports.getCustomer = asyncHandler(async (req, res, next) => {
  const Customer = CustomerRepo();

  const response = await Customer.find({
    ID: req.params.id,
  });

  return res.send({
    status: true,
    message: response,
  });
});


/**
 * @description: update a Customer in the database
 */