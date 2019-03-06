// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})



const config = {
	views: 'views', 		// Set views directory
	static: 'public', 		// Set static assets directory
	db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
	url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
//url: 'mongodb://localhost/mongo-pro', //this was first used
	  type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}

const app = vertex.app(config) // initialize app with config options




// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes


module.exports = app


//this is what is inside .env file which is located on the main directory
// TURBO_ENV=dev
// TURBO_CDN=https://cdn.turbo360-vertex.com
// SESSION_SECRET=YOUR_SESSION_SECRET
// TURBO_APP_ID=<TURBO_APP_ID>
// MONGODB_URI=mongodb://localhost/mongo-pro
//
// PROD_MONGODB_URI=mongodb://pranav_:pranav@123@ds133865.mlab.com:33865/pranav_
//
