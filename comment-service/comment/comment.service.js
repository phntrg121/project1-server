const db = require('../db');
const Comment = db.Comment;

module.exports = {
    post,
    getVideoComments,
    getById,
    update,
    remove
};


async function post(commentParam) {
    const comment = new Comment(commentParam);

    // save comment
    await comment.save();

    const newComment = await Comment.findOne(comment)
    return {
        message: 'OK',
        data: newComment
    }
}

async function getVideoComments(videoId) {
    const comments = await Comment.find({videoId: videoId}).limit(20);
    return {
        message: "OK",
        data: comments
    }
}

async function getById(id) {
    const comment = await Comment.findById(id);
    return{
        message: comment? "OK": "Comment not found",
        data: comment
    }
}

async function update(id, commentParam) {
    const comment = await Comment.findById(id);

    Object.assign(comment, commentParam);

    await comment.save();
}

async function remove(id) {
    await Comment.findByIdAndRemove(id);
}