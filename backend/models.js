import mongoose, { Schema } from 'mongoose';
let COLLECTION = 'nightplanner'
let DATABASE = `mongodb+srv://arjunsrivastava01:arjunsrivastava01@info441.o2o9t.mongodb.net/${COLLECTION}?retryWrites=true&w=majority` // MongoDB url
let models = {};

main();

async function main() {
    // MongoDB database url
    await mongoose.connect(DATABASE);
    console.log('connected to mongodb database: ' + COLLECTION);

    // User information
    const UserSchema = new mongoose.Schema({
        username: String,
        name: String,
        birth_date: Date,
        last_updated: Date,
    });

    const User = mongoose.model('User', UserSchema);
    models.User = User;

    // Event
    const EventSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            city: String,
            required: true
        },
        neightborhood: {
            type: String,
            required: true
        },
        state: {
            type: String, 
            required: true
        },
        zip: {
            type: String, 
            required: true
        },
        categories: {
            type: Array, 
            required: true
        },
        price: {
            type: Number, 
            required: true
        },
        phone: {
            type: String, 
            required: true
        },
        businessImgUrl: {
            type: String,
            required: true
        },
        hoursOfOperation: {
            type: String,
            required: true
        }
    });

    const Event = mongoose.model('Event', EventSchema);
    models.Event = Event;

    // Itinerary
    const ItinerarySchema = new mongoose.Schema({
        username: mongoose.Schema.Types.ObjectId,
        created_date: Date,
        Event0Id:  {
            type: Schema.Types.ObjectId,
            ref: "Event",
            required: true
        },
        Event1Id: {
            type: Schema.Types.ObjectId,
            ref: "Event",
            requried: true
        },
        Event2Id: {
            type: Schema.Types.ObjectId,
            ref: "Event",
            required: true
        }
    });

    const Itinerary = mongoose.model('Itinerary', ItinerarySchema);
    models.Itinerary = Itinerary;
}


export default models;