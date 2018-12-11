var db = require('../db/config');
var term = {};

term.getAll = function(reg, res , next){
    db.manyOrNone("SELECT * FROM terms;")
    .then(function (result){
        res.locals.term = result;
        next();
    })
    .catch(function(error){
console.log(error)
next()
    }) 
}



module.exports = term;