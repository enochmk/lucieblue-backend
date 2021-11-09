var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
	name: 'Users',
	tableName: 'tbl_users',
	columns: {
		ID: {
			type: 'varchar',
			primary: true,
		},
		FORENAMES: {
			type: 'varchar',
		},
		SURNAME: {
			type: 'varchar',
		},
		TIMESTAMP: {
			type: 'datetime2',
			default: () => 'getDate()',
		},
	},
});
