const mongoose = require("mongoose");
 
const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  tag: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

module.exports = mongoose.model("Post", PostSchema);
