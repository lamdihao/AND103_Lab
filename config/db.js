const mongoose = require('mongoose');

const local = "mongodb+srv://haold0112:usu8d9QI5D2JuNNI@cluster0.r6ycs3r.mongodb.net/md18301";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
