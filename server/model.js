const mongoose=require('mongoose');

const PetSchema= new mongoose.Schema({
	name:String,
	species:String,
	breed:String,
	photoUrl:String,
	rank:[]
});

module.exports = mongoose.model('Pet', PetSchema);

