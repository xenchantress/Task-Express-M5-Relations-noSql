const mongoose = require ('mongoose');

const authorSchema = new mongoose.Schema({
    name: String,
    posts: [{ type: mongoose.Schema.Types.ObjextId, ref: 'Post'}]
});

module.exports = mongoose.model('Author', authorSchema);