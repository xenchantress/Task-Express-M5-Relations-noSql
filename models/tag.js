const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

// router.get('/', async (req,res) => {
//     try{
//         const tags = await tagSchema.find().populate('posts');
//         res.json(tags);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

module.exports = mongoose.model('Tag', tagSchema);