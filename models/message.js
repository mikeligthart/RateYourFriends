/**
 * Created by Mike Ligthart on 21-Nov-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var messageSchema = new Schema({
    text: {type: String, required: true}
}, { collection : 'messages', discriminatorKey : '_type'});

schema.plugin(mongooseUniqueValidator);

module.exports = messageSchema;