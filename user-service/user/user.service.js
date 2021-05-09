const bcrypt = require('bcrypt');
const db = require('../db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    remove
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if(user && bcrypt.compareSync(password, user.hash)) {
        return {
            message: 'OK',
            data: user
        }
    }
    else{
        return {
            message: 'Incorrect email or password',
            data: null
        }
    }
    // if (user && bcrypt.compareSync(password, user.hash)) {
    //     return {
    //         ...user.toJSON()
    //     };
    // }
}

async function getAll() {
    return await User.find();
}

async function getById(id) {
    const user = await User.findById(id);
    if(!user) return {
        message: "User not found",
        data: null
    }
    return {
        message: "OK",
        data: user
    }
}

async function create(userParam) {
    // validate
    if (await User.findOne({ email: userParam.email })) {
        return {
            message: 'Email is already used',
            data: null
        }
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();

    const newUser = await User.findOne({ email: userParam.email });
    return {
        message: 'OK',
        data: newUser
    }
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function remove(id) {
    await User.findByIdAndRemove(id);
}