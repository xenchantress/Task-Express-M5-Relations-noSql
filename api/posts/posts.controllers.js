const Post = require("../../models/Post");
const Author = require("../../models/Author");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: "Error getting posts" });
  }
};

exports.createPost = async (req, res) => {
  try {
    req.body.authorId = req.user._id;
    const post = await Post.create(req.body);
    const author = await Author.findById(req.user._id);

    return res.status(201).json(post);
  } catch (error) {
    console.log("Error in creating a post", error);
    res.status(500).json({ error: "Error creating a post" });
  }
};

exports.postsUpdate = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.post.id, req.body);
    res.status(204).end();
  } catch (error) {
    console.error("Error updating post", error);
    res.status(500).json({ error: "Error updating post" });
  }
};

exports.postsGet = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error("Error getting posts", error);
    res.status(500).json({ error: "Error getting posts" });
  }
};
