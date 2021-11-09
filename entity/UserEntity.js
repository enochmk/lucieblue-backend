var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
	name: 'Users',
	tableName: 'tbl_users',
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
		PASSWORD: {
			type: 'varchar',
		},
		STATUS: {
			type: 'int',
		},
		CREATE_DATE: {
			type: 'datetime2',
			default: () => 'getDate()',
		},
			CHANGE_DATE: {
			type: 'datetime2',
			//default: () => 'getDate()',
		},

	},
});
