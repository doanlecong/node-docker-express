const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title: {
        type : String,
        required : [true, "Post Must Have Title"]
    },
    body : {
        type : String,
        required: [true, "Post Must Have Body"]
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;