var fs = require('fs');
var mysql = require('mysql');

var config = JSON.parse(fs.readFileSync("config-secret.json"))

var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	port: config.port,
    database: config.database
});

connection.connect();

connection.query('use hospital_data', function (error, results, fields) {
    console.log(results);
    console.log('connected!');
});

connection.query('select patients.last_name, rooms.period, medicines.medicine_codefrom (patients inner join patients_mediciens on patients.patient_id=patients_mediciens.patient_id) inner join rooms on patients_id=rooms.id where patients.first_name = pren', function (error, results, fields) {
    console.log(results);
    console.log('connected!');
});

connection.end();