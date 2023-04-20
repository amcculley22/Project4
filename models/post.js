const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId; // Import ObjectId

const postSchema = new Schema(
  {
    picture: { type: String, required: true },
    caption: {
      type: String,
    },
    location: {
      type: String,
      default: "",
    },
    userId: {
      type: String,
    },
    username: {
      type: String,
    },
    comments: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Post", postSchema);
