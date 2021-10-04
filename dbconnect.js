const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb://localhost:27017/Fashion";

const connect = mongoose.connect(url, { useUnifiedTopology: true,useNewUrlParser: true  });

module.exports = connect;
