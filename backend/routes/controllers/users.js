import express from 'express';
var router = express.Router();
const {initializeApp} = require('firebase-admin/app');
const app = initializeApp();

// TODO: User information must add a field to req.session called "req.session.isAuthenticated" that lets the session know the user is logged in
// Since we aren't using Microsoft Identity for authentication, you need to add this to req.sessions manually through middleware
// There should also be a req.session.username that refers to the user's EMAIL


// Get display information + itineraries for user
router.get('/', async function(req, res, next) {
  let session = req.session
  if(session.isAuthenticated) {
    let username = req.session.username;

    // Get user information and itineraries
    let userInfo = await req.models.findOne({username: username});
    let itineraries = await req.models.find({username: username});

    // TODO: send relevant information as JSON for frontend to use (include itinerary IDs!)
    res.json({
      // FILL THIS OUT WITH RELEVANT FIELDS NEEDED BY FRONTEND
    });
  } else {
    res.send('Error: You must be logged in to see this information')
  }
});

// Create new account
// TODO: This handler should receive a post request from the React frontend and add a new user to the MongoDB database
router.post('/new', async function(req, res, next) {
  let session = req.session;
  let body = req.body;

  if(session.isAuthenticated) {
    // Add new account to database
    let username = session.account.username;
    let name = session.account.name;
    let birth_date = body.birth_date;
    try {
      // Create and save new user
      const newUser = new req.models.UserInfo({
        username: username,
        birth_date: birth_date,
        last_updated: Date.now(),
        name: name
      });
      await newUser.save()
      res.json({"status": "success"});
    } catch (error ){
      res.status(500).json({status: "error", error: error});
    } 
  } else {
    res.send("Error: Unauthenticated account cannot create new profile");
  };
});

// New account page
router.get('/new', function(req, res, next) {
  let session = req.session;

  if(session.isAuthenticated) {
    // Send new account page
  } else {
    res.send("Error: Unauthenticated account cannot create new profile");
  };
});

// Find the currently logged in user information from the session and remove the user and their itineraries from the database
router.delete("/", async (req, res, next) =>{
  let session = req.session;
  if(session.isAuthenticated) {
    let username = req.session.account.username;
    // delete the user and associated itineraries
    await req.models.Itinerary.deleteMany({username: username});
    await req.models.UserInfo.deleteOne({username: username});
    res.json({status: "success"});
  } else {
    res.status(401).json({status: "unauthorized"});
  }
});

export default router;
