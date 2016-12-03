/**
 * Created by Mike Ligthart on 21-Nov-16.
 */
var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var messageSchema = require('message.js');

/**
 * See for more information:
 * https://github.com/briankircho/mongoose-schema-extend
 */

var questionMCSchema = messageSchema.extend({
    answers: {type: [String], required: true},
    playerAnswers: [{type: Schema.Types.ObjectId, ref: 'PlayerAnswer'}]
});

module.exports = mongoose.model('QuestionMC', questionMCSchema);