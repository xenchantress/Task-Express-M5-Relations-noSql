const mongoose = require('mongoose');
//const router = express.Router();
// const Post = require('./models/post');
// const Tag = require('/:postId/tag');


const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}
});

module.exports = mongoose.model('Post', PostSchema);
//Should PostSchema be camelCase?