var mysql = require('mysql');
var connMySql = () => {
	console.log('Hoje ninguem me segura!!!!');
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'portal_noticias',
	});
};

module.exports = () => {
	return connMySql;
};
