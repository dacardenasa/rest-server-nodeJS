const { Schema, model } = require("mongoose");

const CategorySchema = Schema({
  name: {
    type: String,
    required: [true, "The name of the category is required"],
    unique: true
  },
  state: {
    type: Boolean,
    default: true,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

CategorySchema.methods.toJSON = function () {
  const { __v, state, ...restCategory } = this.toObject();
  return restCategory;
};

module.exports = model("Category", CategorySchema);
