const orm = require('../config/orm');

const burger = {
    all: cb =>{
        orm.all('burgers', res =>{
            cb(res);
        })
    },
    create: (cb) => {
        orm.create('burgers', ['burger_name', 'devoured'],[name, false], cb)
    }, 
    update: (id, cb) =>{
        let condition = `id=${id}`;
        orm.update('burgers', {devoured: true}, condition, cb);
    },
    delete: (id, cb) =>{
        let condition = `id=${id}`;
        orm.delete("burgers", condition, res => {
          cb(res);
        });
      }
}

module.exports = burger;
