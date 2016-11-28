/**
 * Created by Mike Ligthart on 25-Nov-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

/**
 * Use instanceof to differentiate between QuestionOpen and QuestionMc
 */


var schema = new Schema({
    name: {type: String, required: true},
    host: {type: Schema.Types.ObjectId, ref: 'Host', required: true},
    questions: [{type: Schema.Types.ObjectId, ref: 'QuestionOpen', required: true}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('GameTemplate', schema);