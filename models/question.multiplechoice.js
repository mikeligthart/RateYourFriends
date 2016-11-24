/**
 * Created by Mike Ligthart on 21-Nov-16.
 */
var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');;
var questionSchema = require('question.js');

/**
 * See for more information:
 * https://github.com/briankircho/mongoose-schema-extend
 */

var questionMCSchema = questionSchema.extend({
    answers: {type: [String], required: true}
});

module.exports = mongoose.model('QuestionMC', questionMCSchema);