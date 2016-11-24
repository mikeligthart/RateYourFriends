/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
var mongoose = require('mongoose');
var QuestionSchema = require('question.js');

module.exports = mongoose.model('QuestionOpen', QuestionSchema);