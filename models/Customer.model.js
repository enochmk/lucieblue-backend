const { getRepository } = require('typeorm');
const Entity = require('../entity/CustomerEntity');

module.exports = () => getRepository(Entity);
