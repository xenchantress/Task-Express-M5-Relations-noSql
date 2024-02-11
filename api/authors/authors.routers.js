const express = require(' express ');
const router = express.Router();
const authorsController = require('./authors.controller');

router.post('/:authorId/posts', authorsController.createPost);


module.exports = router;