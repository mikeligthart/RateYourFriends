/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
var mongoose = require('mongoose');
var messageSchema = require('message.js');

/**
 * See for more information:
 * https://github.com/briankircho/mongoose-schema-extend
 */

var questionOpenSchema = messageSchema.extend({
    playerAnswers: [{type: Schema.Types.ObjectId, ref: 'PlayerAnswer'}]
});

module.exports = mongoose.model('QuestionOpen', questionOpenSchema);