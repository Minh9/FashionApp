const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothSchema = new Schema(
  {
    name: {
      type: String
    },
    type: {
      type: String
    }
  }
);

let Fashion = mongoose.model("Cloth", clothSchema);

module.exports = Fashion;
