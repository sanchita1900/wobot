var mongoose = require('mongoose');
require('dotenv').config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true, 

        useUnifiedTopology: true 
    });
    return console.log('Database Connected');
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = {
  connect,
};