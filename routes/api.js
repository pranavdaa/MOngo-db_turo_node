// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
//Quaring the schema within these endpoints
const Profile = require('../models/Profile')
 router.get('/profile',(req,res) =>{
	 //this is just for checking thayt the router is connected
// 	res.json({
// 	 confirmation:"sucess",
// 	 data:"this is the profile endpoint"
// 	})
//Quarin starts from here
Method1->
let filter = req.query
if(req.query.age != null){
	filter = {
		age: {$gt: req.query.age}
	}
}
Profile.find(filters)
.then(profile =>{
	res.json({
		 confirmation:"sucess",
		 data:profiles
		})
})

Method2->
const query = req.query
Profile.find(query) //to search a perticular data -> www.klvbjzbvjx/api/products?attribute_name=content_name
// Profile.find({age:{$get:40}}) -> by this we will get all the all the profiles with age greater then 40
.then(profiles =>{
	res.json({
		 confirmation:"sucess",
		 data:profiles
		})
})
.catch(err => {
	res.json({
		 confirmation:"fail",
		 data:err
		})
})

})


module.exports = router
