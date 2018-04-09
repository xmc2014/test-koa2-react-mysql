const mysql = require('mysql');

const pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'usbw',
	database:'appointment'
});

let query = async(sql,values)=>{
	console.log(sql);
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,connection)=>{
			if(err){
				reject(err);
			}else{
				connection.query(sql,values,(error,results,fields)=>{
					if(err){						
						reject(err);
					}else{
						resolve({
							status:200,
							msg:'sucuss',
							data:results
						});
					}
					connection.release();
				});
			}
		});
	});
}

module.exports = {
    query
}