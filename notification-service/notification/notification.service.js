const db = require('../db');
const Notification = db.Notification;

module.exports = {
    create,
    getByUserId,
    pushNotification,
};

async function create(param){
    return {}
}

async function pushNotification(id, params){
}

async function getByUserId(id) {
    return {}
}