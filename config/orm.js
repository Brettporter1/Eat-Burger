const connection = require('./connection');

const printQuestionMarks = num => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

// const objToSql


const orm = {
    all: (tableInput, cb)=>{
        connection.query(`SELECT * FROM ${tableInput};`, (err,res) => {
            if(err) throw err;
            cb(res);
        })
    },
    create: (table, column, values, cb) =>{
        let queryString = `INSERT INTO ${table} (${column.toString()}) VALUES (${printQuestionMarks(values.length)})`;
        console.log(queryString);
        connection.query(queryString, values, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    }, 
    update: (table, objColVals, condition, cb) =>{
        let queryString = `UPDATE  ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) throw err;
          cb(result);
        });
      },
      delete: (table, condition, cb) =>{
          let queryString = `DELETE FROM ${table} WHERE ${condition}`;
          connection.query(queryString, (err, result) => {
              if (err) throw err;
              cb(result);
          })
      }
}

module.exports = orm;