const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('Tag', tagSchema);