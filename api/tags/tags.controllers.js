const Tag = require('../../models/Tag');


exports.getTagsWithPosts = async (req, res) => {
    try{
        const tags = await Tag.find().populate('posts');
        rse.json(tags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};