/**
 * Created by Mike Ligthart on 21-Nov-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

/**
 * Use instanceof to differentiate between QuestionOpen and QuestionMc
 */


var schema = new Schema({
    host: {type: Schema.Types.ObjectId, ref: 'Host', required: true},
    questions: [{type: Schema.Types.ObjectId, ref: 'QuestionOpen'}],
    players: [{type: Schema.Types.ObjectId, ref: 'Player'}],
    roomNumber: String
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Game', schema);