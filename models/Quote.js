// import mongoose from "mongoose";

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   service: String,
//   message: String,
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Contact", contactSchema);

import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model("Quote", quoteSchema);