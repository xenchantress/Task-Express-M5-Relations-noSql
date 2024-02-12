const express = require(" express ");
const router = express.Router();
const Author = require("./author.model");
const {createPost} = require("./authors.controllers");

router.post("/:authorId/posts", createPost);

router.get("/", async (req, res) => {
  try {
    const authors = await Author.find().populate("posts");
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
