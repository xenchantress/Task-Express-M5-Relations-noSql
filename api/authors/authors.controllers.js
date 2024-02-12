//const Author = require('./author.model');
const Author = require("../models/author");

const createPost = async (req, res) => {
  try {
    const { authorId, title, content } = req.body;

    const post = await Post.create({ title, content });

    const author = await Author.findByIdAndUpdate(
      authorId,
      {
        $push: {
          posts: post.id,
        },
      },
      { new: true }
    );
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
};
