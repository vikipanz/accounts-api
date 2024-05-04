var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const acctEntryModel = require('../models/acct-entry.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* create users listing. */
router.post('/add', function(req, res, next) {

  let entry = new acctEntryModel({
    lr: 3,
    date: '10-07-2000',
    vehical: 'MH46BH9643',
    fromLoc: 'Nerul',
    toLoc: 'Vashi',
    productName: 'GHEE',
    loadQ: 9,
    unLoadQ: 5,
    shortageQ: 3,
    chargeQ: 1,
    rate: 1000,
    freight: 9
  })

  entry.save().then(function(entry){
    res.send({ status: 200, message: 'User added successfully', entryDetails: entry })
  })
  .catch(function(err){
    res.send({status: 500, message:'Unable to add customer', error: err});
  });
});

/* update exsisting users listing. */
router.put('/update', function(req, res, next) {
  res.send('respond with a resource');
});

/* delete users listing. */
router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

/* search users listing. */
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
