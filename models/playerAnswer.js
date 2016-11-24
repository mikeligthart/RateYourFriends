/**
 * Created by Mike Ligthart on 21-Nov-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    player: {type: Schema.Types.ObjectId, ref: 'Player', required: true},
    answer: {type: [String], required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('PlayerAnswer', schema);