const mongoose = require('mongoose');
const moment = require("moment");

const contactSchema = new mongoose.Schema({
    name:{ type: String },
    mobile: { type: String },
    email: { type: String },
    description: { type: String },
    createdAt: { type: String, default: () => moment().format("DD-MM-YYYY hh:mm A") },
    updatedAt: { type: String, default: () => moment().format("DD-MM-YYYY hh:mm A") },
});

contactSchema.pre("save", function (next) {
    this.updatedAt = moment().format("DD-MM-YYYY hh:mm A");
    next();
});

contactSchema.pre("findOneAndUpdate", function (next) {
    this.set({ updatedAt: moment().format("DD-MM-YYYY hh:mm A") });
    next();
});

contactSchema.pre("updateMany", function (next) {
    this.set({ updatedAt: moment().format("DD-MM-YYYY hh:mm A") });
    next();
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
