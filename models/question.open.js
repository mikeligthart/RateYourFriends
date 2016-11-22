/**
 * Created by Mike Ligthart on 21-Nov-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    question: {type: String, required: true},
    playerAnswers: [{type: Schema.Types.ObjectId, ref: 'PlayerAnswer'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('QuestionOpen', schema);