const mongoose = require("mongoose")

const Manageschema = mongoose.Schema({
     Image: { type: String, requried: true },
     Name: { type: String, requried: true },
     ID: { type: Number, requried: true },
     Email: { type: String, requried: true },
     Mobile: { type: Number, requried: true },
     DateOfJoining: { type: String, requried: true },
     Designation: { type: String, requried: true },
     Gender: { type: String, requried: true },
     Course: { type: String, requried: true },





}, {
     timestamps: true,
     versionkey: false
})
const Manage = mongoose.model('Manage', Manageschema)

module.exports = Manage