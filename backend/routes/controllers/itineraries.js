import express from 'express';
var router = express.Router();
import cache from 'memory-cache'

// Post new itinerary to database attached to account
router.post('/', async function(req, res, next) {
    let session = req.session;
    let body = req.body;
    if(session.isAuthenticated) {
        try {
            // Get quiz results from request body
            let searchFilter = getEventPreferences(body);

            let potentialEvents = req.models.Event.find(searchFilter);

            const newItinerary = new req.models.Itinerary({
              // TODO: Add all other fields to itinerary
              username: session.account.username,
              created_date: Date.now(),
            });
        
            await newItinerary.save()
            res.json({"status": "success"});
          } catch (error){
            res.status(500).json({status: "error", error: error});
          }
    } else {
      res.send('Error: you must be logged in to create an itinerary')
    }
  });

  // Delete itinerary with requested URL param ID
router.delete("/:id", async (req, res, next) =>{
  // ID of itinerary to delete
  let itinerary_id = req.params.id;
  let session = req.session;
  if(session.isAuthenticated) {
    let username = req.session.username;
    // delete itinerary
    try {
      await req.models.Itinerary.deleteOne({_id: itinerary_id, username: username});
      res.json({status: "success"});
    } catch (err) {
      res.status(404).json({error: err})
    }
  } else {
    res.status(401).json({status: "unauthorized"});
  }
});

router.get("/:id", async (req, res, next) =>{
  // ID of itinerary to get
  let itinerary_id = req.params.id;
  let session = req.session;
  if(session.isAuthenticated) {
    let username = req.session.username;
    // Get itinerary
    let itinerary = await req.models.Itinerary.findOne({username: username, _id: itinerary_id});
    if (!itinerary) {
      res.status(404).json({status: "No itinerary with requested ID exists"});
      return;
    }
    res.json({
      _id: itinerary._id,
      username: username,

    });
  } else {
    res.status(401).json({status: "unauthorized"});
  }
});


// Returns relevant preferences to match with event
function getEventPreferences(body) {
  let logisticalResponses = body.logistical;
  let location = logisticalResponses[0];
  let day = logisticalResponses[1];
  let time = logisticalResponses[2];
  let budget = logisticalResponses[3];
  let age = logisticalResponses[4];
  let preferenceResponses = body.preferences;
  let group = preferenceResponses[0];
  let activity = preferenceResponses[1];
  let freeTime = preferenceResponses[2];
  let food = preferenceResponses[3];
  let sign = preferenceResponses[4];
  let music = preferenceResponses[5];
  let extra = preferenceResponses[6];
  let searchFilter = {};
  if (location != "I don't know yet") {
    searchFilter['neighborhood'] = location;
  }
  if (budget != "N/A" && budget != "I don't know yet") {
    searchFilter['price'] = budget.length;
  }

  return searchFilter;
} 

export default router;