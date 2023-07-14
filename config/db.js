const mongoose = require('mongoose');

const uri = "mongodb+srv://sajiyabro:kn4Hu1uaDkN54oNm@todoapi.yakl5cf.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true }).on('open',()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDb Error");
});

module.exports = connection;