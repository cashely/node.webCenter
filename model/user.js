var mongoose = require('../config.db.js');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	username : {type:String},
	password : {type:String},
	userage : {type:Number},
	loginDate : {type:Date},
	lastDate : {type:Date},
	ip:{type:String},
	email:{type:String}
});
module.exports = mongoose.model('User',UserSchema);