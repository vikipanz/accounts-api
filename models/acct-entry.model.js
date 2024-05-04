const mongoose = require('mongoose')

const aactEntrySchema = mongoose.Schema({
    lr: Number,
    date: String,
    vehical: String,
    fromLoc: String,
    toLoc: String,
    productName: String,
    loadQ: Number,
    unLoadQ: Number,
    shortageQ: Number,
    chargeQ: Number,
    rate: Number,
    freight: Number
});

const accountEntryModel =  mongoose.model('accountEntry', aactEntrySchema);

module.exports = accountEntryModel;