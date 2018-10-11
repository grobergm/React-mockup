const mongoose=require(mongoose);

const PetSchema= new mongoose.Schema({
	name:String,
	species:String,
	breed:String,
	score:[]
});

module.exports = mongoose.model('Pet', PetSchema);

