var express = require('express');
var router = express.Router();

var term = require('../models/term');


router.get('/terms', term.getAll, renderIndex);

function renderIndex(req, res){
    var mustachvar ={
        term: res.locals.term
    }
    console.log(mustachvar)
    res.render('./terms/index',mustachvar )
}



module.exports = router;