// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
//Quaring the schema within these endpoints
const Profile = require('../models/Profile')
 router.get('/profile',(req,res) =>{
	 //this is just for checking thayt the router is connected
	res.json({
	 confirmation:"sucess",
	 data:"this is the profile endpoint"
	})
})
//Quarin starts from here
// Method1->
// let filter = req.query
// if(req.query.age != null){
// 	filter = {
// 		age: {$gt: req.query.age}
// 	}
// }
// Profile.find(filters)
// .then(profile =>{
// 	res.json({
// 		 confirmation:"sucess",
// 		 data:profiles
// 		})
// })
//
// Method2->
// const query = req.query
// Profile.find(query) //to search a perticular data -> www.klvbjzbvjx/api/products?attribute_name=content_name
// // Profile.find({age:{$get:40}}) -> by this we will get all the all the profiles with age greater then 40
// .then(profiles =>{
// 	res.json({
// 		 confirmation:"sucess",
// 		 data:profiles
// 		})
// })
// .catch(err => {
// 	res.json({
// 		 confirmation:"fail",
// 		 data:err
// 		})
// })

//})
//Way of quaring a specific record Note-> : says a specific id
//handeling updates (in reality use a put insted of get)
router.get('/profile/update',(req,res) =>{
  const query = req.query //request id and as per the id update what ever else attribute we want like the name or age etc
const profileId = query.id
delete query['id']
Profile.findByIdAndUpdate(profileId,query,{new:true})
.then(profile =>{
  res.json({
    confirmation: 'sucess',
    data: profile
  })
})

.catch(err =>{
  res.json({
    confiramtion: 'fail',
    message: err.message
  })
})
})
//this router is to remove a data from the database
router.get('/profile/remove',(req,res) =>{
  const query = req.query
  Profile.findByIdAndRemove(query.id)
  .then( data =>{
    res.json({
      confiramtion:'sucess',
      data: 'Profile' +query.id+'Successfully removes'
    })
  })
  .catch(err =>{
    res.json({
      confiramtion: 'fail',
      data: err.message
    })
  })
})
router.get('/profile/:id', (req,res)=>{
	const id = req.params.id //for taking a attribute from the data

	Profile.findById(id)
	.then(profile =>{
		res.json({
			confiramtion:'sucess',
			data: profile
		})

	})
.catch(err =>{
	res.json({
		confiramtion: 'fail',
		message: 'Profile' + id + 'not found'
	})
})

})

router.post('/profile', (req,res) =>{
  res.json({
    confirmation: 'sucess',
    data:req.body

  })
})



module.exports = router
