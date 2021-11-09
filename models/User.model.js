const { getRepository } = require('typeorm');
const Entity = require('../entity/UserEntity');

module.exports = () => getRepository(Entity);
