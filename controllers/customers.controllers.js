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

  const response = await Customer.delete({
    ID: req.params.id,
  });


  return res.send({
    status: true,
    message: response,
  });
});

//
// GET one customer from DB
//
exports.getCustomer = asyncHandler(async (req, res, next) => {
  const Customer = CustomerRepo();

  const response = await Customer.findOne({
    ID: req.params.id,
  });

  return res.send({
    status: true,
    message: response,
  });
});

/**
 * @description: Get all users from the DB
 */
exports.getCustomers = asyncHandler(async (req, res, next) => {
  const Customer = CustomerRepo();

  const result = await Customer.find();

  return res.send({
    status: true,
    message: result,
  });
});

exports.updateCustomer = asyncHandler(async (req, res, next) => {
  const Customer = CustomerRepo();

  const response = await Customer.update(req.params.id, {
    FIRSTNAME: req.body.firstname,
    SURNAME: req.body.lastname,
    ADDRESS: req.body.address,
    ALT_NUMBER: req.body.altNumber,
    CITY: req.body.city,
    COMMENTS: req.body.comments,
    COUNTRY: req.body.country,
    EMAIL: req.body.email,
    PHONE_NUMBER: req.body.phoneNumber,

  });

  return res.send({
    status: true,
    message: response,
  });
});