var mdb = require('mongoose');
var userSchema = new mdb.Schema({
    firstName: String,
    lastName: String,
    email: String
});
var User = mdb.model("users", userSchema);
module.exports = User;