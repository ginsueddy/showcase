import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

createRoute({
    method: 'GET',
    path: '/',
    description: "Get display information + itineraries for user",
    router,
    schema,
    requireUserModel: true,
    handler: async (req, res) => {
        let username = user.email;
        // Get user information and itineraries
        let userInfo = await req.models.findOne({username: username});
        let itineraries = await req.models.find({username: username});

        // TODO: send relevant information as JSON for frontend to use (include itinerary IDs!)
        res.json({
        // FILL THIS OUT WITH RELEVANT FIELDS NEEDED BY FRONTEND
            name: itineraries.name,
            address: itineraries.address,
            city: itineraries.city,
            neighborhood: itineraries.neighborhood,
            state: itineraries.state,
            zip: itineraries.zip,
            categories: itineraries.categories,
            price: itineraries.price,
            phone: itineraries.phone,
            businessImgUrl: itineraries.businessImgUrl,
            hoursOfOperation: itineraries.hoursOfOperation,

        });
    }
});

createRoute({
    method: 'POST',
    path: '/new',
    description: "Create new account",
    router,
    schema,
    requireUserModel: true,
    handler: async (req, res) => {
        let username = user.email
        let name = user.displayName
        try {
            // Create and save new user
            const newUser = new req.models.UserInfo({
              username: username,
              last_updated: Date.now(),
              name: name
            });
            await newUser.save()
            res.json({"status": "success"});
          } catch (error ){
            res.status(500).json({status: "error", error: error});
          }
    }
});

createRoute({
    method: 'DELETE',
    path: '/',
    description: "Find the currently logged in user information from the session and remove the user and their itineraries from the database",
    router,
    schema,
    requireUserModel: true,
    handler: async (req, res) => {
        // let username = get username from firebase
        await req.models.Itinerary.deleteMany({username: username});
        await req.models.UserInfo.deleteOne({username: username});
        res.json({status: "success"});
    }
});


