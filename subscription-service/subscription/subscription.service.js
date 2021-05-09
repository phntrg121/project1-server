const db = require('../db');
const Subscription = db.Subscription;

module.exports = {
    create,
    getSub,
    getSubCount,
    subscribe,
    check,
};

async function create(id) {

    const sub = new Subscription({ userId: id});

    await sub.save();

    const newSub = await Subscription.findOne({ userId: id });
    return {
        message: 'OK',
        data: newSub
    }
}

async function getSub(id){
    const sub = await Subscription.findById(id)
    return{
        message:"OK",
        data: sub
    }
}

async function getSubCount(id){
    var sub = await Subscription.findOne({userId: id})
    delete sub.subscribers
    delete sub.subscriptions
    return{
        message:"OK",
        data: sub
    }
}

async function subscribe(subParam) {
    const sub = await Subscription.findOne({userId: subParam.userId, subscriptions: subParam.otherId})
    
    if(!sub){        
        await Subscription.findOneAndUpdate(
            { userId: subParam.userId },
            { $inc: { subscriptionCount : 1 }, $push: { subscriptions: subParam.otherId } }
        );
        await Subscription.findOneAndUpdate(
            { userId: subParam.otherId },
            { $inc: { subscriberCount : 1 }, $push: { subscribers: subParam.userId } }
        );

        return {
            message: 'OK',
            data: true
        }
    }
    else{
        await Subscription.findOneAndUpdate(
            { userId: subParam.userId },
            { $inc: { subscriptionCount : -1 }, $pull: { subscriptions: subParam.otherId } }
        );    
        await Subscription.findOneAndUpdate(
            { userId: subParam.otherId },
            { $inc: { subscriberCount : -1 }, $pull: { subscribers: subParam.userId } }
        );

        return {
            message: 'OK',
            data: false
        }
    }
}

async function check(subParam) {
    const sub = await Subscription.findOne({userId: subParam.userId, subscriptions: subParam.otherId})
    return {
        message: "OK",
        data: sub? true : false
    }
}