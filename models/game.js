/**
 * Created by Mike Ligthart on 21-Nov-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

/**
 * TODO: don't foget to notify when questions has been updated with markModified()
 * See example:
 * person.anything = { x: [3, 4, { y: "changed" }] };
 * person.markModified('anything');
 * person.save(); // anything will now get saved
 */

var schema = new Schema({
    host: {type: Schema.Types.ObjectId, ref: 'Host', required: true},
    questions: {type: Schema.Types.Mixed},
    players: [{type: Schema.Types.ObjectId, ref: 'Player'}],
    roomNumber: String
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Game', schema);