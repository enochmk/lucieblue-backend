var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
  name: "Customers",
  tableName: "tbl_customers",
  columns: {
    ID: {
      type: 'int',
      primary: true,
      generated: true,
    },
    FIRSTNAME: {
      type: 'varchar',
    },
    SURNAME: {
      type: 'varchar',
    },
    PHONE_NUMBER: {
      type: 'varchar',
    },
    ALT_NUMBER: {
      type: 'varchar',
    },
    EMAIL: {
      type: 'varchar',
    },
    CITY: {
      type: 'varchar',
    },
    COUNTRY: {
      type: 'varchar',
    },
    ADDRESS: {
      type: 'varchar',
    },
    COMMENTS: {
      type: 'varchar',
    },
    CREATED_BY: {
      type: 'varchar',
    },
    UPDATED_BY: {
      type: 'varchar',
      nullable: true
    },
    CREATE_DATE: {
      type: 'datetime',
      default: () => 'now()',
    },
    CHANGE_DATE: {
      type: 'datetime',
      default: () => 'now()',
    },
  },

});