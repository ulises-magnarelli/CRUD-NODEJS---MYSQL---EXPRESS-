var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'library'
}
);

con.connect(
        (err) => {
            if(!err){
                console.log('Connection established')
            }else{
                console.log('Connection error')
            }
        }
    );

    module.exports = con;