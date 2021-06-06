const db = require('../db');
const Reply = db.Reply;

module.exports = {
    post,
    getCommentReplies,
    getById,
    update,
    remove
};


async function post(replyParam) {
    const reply = new Reply(replyParam);

    // save reply
    await reply.save();

    const newReply = await Reply.findOne(reply)
    return {
        message: 'OK',
        data: newReply
    }
}

async function getReplyTree(root){
    var rep = await Reply.find({commentId: root.commentId, parent: root.id})
    for(let i in rep){
        rep[i] = await getReplyTree(rep[i])
    }
    root.childs = rep;
    return root
}

async function getCommentReplies(commentId) {
    var replies = await Reply.find({commentId: commentId, parent: ''}).limit(10) 
    // for(let i in replies){
    //     replies[i] = await getReplyTree(replies[i])
    // }

    return {
        message: "OK",
        data: replies
    }
}

async function getById(id) {
    const reply = await Reply.findById(id);
    return{
        message: reply? "OK": "reply not found",
        data: reply
    }
}

async function update(id, replyParam) {
    const reply = await Reply.findById(id);

    Object.assign(reply, replyParam);

    await reply.save();
}

async function remove(id) {
    await Reply.findByIdAndRemove(id);
}