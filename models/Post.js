const { model, Schema } = require('mongoose');
const mongoose = require(' mongoose');


const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author'}
});

module.exports = model('Post', PostSchema);
//Should PostSchema be camelCase?