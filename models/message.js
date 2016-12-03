/**
 * Created by Mike Ligthart on 21-Nov-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var questionSchema = new Schema({
    question: {type: String, required: true},
    playerAnswers: [{type: Schema.Types.ObjectId, ref: 'PlayerAnswer'}]
}, { collection : 'questions', discriminatorKey : '_type'});

schema.plugin(mongooseUniqueValidator);

module.exports = questionSchema;