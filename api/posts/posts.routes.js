//I need to require
const express = require("express");
const router = express.Router();
const {
  fetchPost,
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require("./posts.controllers");

router.param("postId", async (req, res, next, postId) => {
  const post = await fetchPost(postId, next);
  if (post) {
    req.post = post;
    next();
  } else {
    const err = new Error("Post Not Found");
    err.status = 404;
    next(err);
  }
});

//router.get('/', postsGet);

//this is how we fetch authors, each author posts will be populated
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("tags");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.get('/', async (req,res) => {
//   try {
//     const posts = await Post.find().populate('tags');
//     res.json(posts);
//   } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
// });






router.post(':postId/tags/:tagId', async (req,res) =>{
  try{
    const postId = req.params.postId;
    const tagId = req.params.tagId;
//const { postId, tagId } = req.params;

    await Post.findByIdAndUpdate(postId, {$push: { tags: tagId }});
    await Tag.findByIdAndUpdate(tagId, {$push: { posts:postId }});

    res.status(200).send('Tag added to post successfully');

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post("/", postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
