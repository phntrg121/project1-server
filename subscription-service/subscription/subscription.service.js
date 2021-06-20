const db = require('../db');
const Subscription = db.Subscription;

module.exports = {
    create,
    getSubscriber,
    getSubscription,
    subscribe,
    check,
};

async function create(param) {

    const sub = new Subscription({ userId: param.userId});

    await sub.save();

    const newSub = await Subscription.findById(sub._id);
    return {
        message: 'OK',
        data: newSub
    }
}

async function getSubscriber(id){
    const sub = await Subscription.findOne({userId: id})
    delete sub.subscriptionCount
    delete sub.subscriptions
    return{
        message:"OK",
        data: sub
    }
}

async function getSubscription(id){
    const sub = await Subscription.findOne({userId: id})
    delete sub.subscriberCount
    delete sub.subscribers
    return{
        message:"OK",
        data: sub
    }
}

async function subscribe(param) {
    const sub = await Subscription.findOne({userId: param.userId, subscriptions: param.otherId})
    
    if(!sub){        
        await Subscription.findOneAndUpdate(
            { userId: param.userId },
            { $inc: { subscriptionCount : 1 }, $push: { subscriptions: param.otherId } }
        );
        await Subscription.findOneAndUpdate(
            { userId: param.otherId },
            { $inc: { subscriberCount : 1 }, $push: { subscribers: param.userId } }
        );

        return {
            message: 'OK',
            data: true
        }
    }
    else{
        await Subscription.findOneAndUpdate(
            { userId: param.userId },
            { $inc: { subscriptionCount : -1 }, $pull: { subscriptions: param.otherId } }
        );    
        await Subscription.findOneAndUpdate(
            { userId: param.otherId },
            { $inc: { subscriberCount : -1 }, $pull: { subscribers: param.userId } }
        );

        return {
            message: 'OK',
            data: false
        }
    }
}

async function check(param) {
    const sub = await Subscription.findOne({userId: param.userId, subscriptions: param.otherId})
    return {
        message: "OK",
        data: sub? true : false
    }
}