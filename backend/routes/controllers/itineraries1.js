import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

createRoute({
    method: 'POST',
    path: '/',
    description: "Post new itinerary to database attached to account",
    router,
    schema,
    requireUserModel: true,
    handler: async (req, res) => {
        try {
            // Get quiz results from request body
            let body = req.body;
            let searchFilter = getEventPreferences(body);

            let potentialEvents = req.models.Event.find(searchFilter);

            const newItinerary = new req.models.Itinerary({
              // TODO: Add all other fields to itinerary
              username: session.account.username, 
              created_date: Date.now(),
              // Change searchFilter. after testing
              Event0Id: req.models.Event.find(searchFilter.location),
              Event1Id: req.models.Event.find(searchFilter.location),
              Event2Id: req.models.Event.find(searchFilter.location)
            });
        
            await newItinerary.save()
            res.json({"status": "success"});
          } catch (error){
            res.status(500).json({status: "error", error: error});
          }
    }
});

createRoute({
    method: 'DELETE',
    path: '/:id',
    description: "Delete itinerary with requested URL param ID",
    router,
    schema,
    requireUserModel: true,
    handler: async (req, res) => {
        try {
            await req.models.Itinerary.deleteOne({_id: itinerary_id, username: username});
            res.json({status: "success"});
          } catch (err) {
            res.status(404).json({error: err})
          }
    }
});

createRoute({
    method: 'GET',
    path: '/:id',
    description: "Get itinerary",
    router,
    schema,
    requireUserModel: true,
    handler: async (req, res) => {
        let username = user.email;
        let itinerary_id = req.params.id;
        let itinerary = await req.models.Itinerary.findOne({username: username, _id: itinerary_id});
        if (!itinerary) {
            res.status(404).json({status: "No itinerary with requested ID exists"});
        return;
        }
        res.json({
        _id: itinerary._id,
        username: username,

    });
    }
});

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