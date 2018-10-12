const express = require('express'),
bodyParser = require('body-parser'),
Pet = require('./model');

const router = express.Router();

router.get('/', function(req, res){
  res.render('index')
});

router.get('/pets',(req,res)=>{
	Pet.find({},(err,pets)=>{
		if(err)
			res.send(err);
			res.json(pets);
	})
});

router.post('/pets',(req,res)=>{
	let name= req.body.name,
	  	species= req.body.species,
	 	breed= req.body.breed,
	 	photoUrl= req.body.photoUrl,
	 	rank= [req.body.rank],
	  	newPet= {name:name,species:species,breed:breed,photoUrl:photoUrl,rank:rank};
	Pet.create(newPet)
});

module.exports=router;