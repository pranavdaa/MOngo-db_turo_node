const mongoose = require('mongoose')
const Profile = new mongoose.Schema({

firstName:{type:String, trim:true, default:''},
lastName:{type:String, trim:true, default:''},
age:{type:Number, default:0},
team:{type:String, trim:true, default:''},
position:{type:String, trim:true, default:''}
})
//use of trim -> cuts the empty space left by user wile enetring the data like 'bob' and 'bob ' will be same after this
//If user does not give any value then this is the value entered
//the mongoose arm provides us certain tools whish help us get the most efficiant data possible.like trim and default
module.exports = mongoose.model('Profle',Profile)

//Second is the schema we have defined above schema
