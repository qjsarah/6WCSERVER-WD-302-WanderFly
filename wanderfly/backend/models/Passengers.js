const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PassengerSchema = new Schema({
    name: {
        type: String,
    },
    dob: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    howMany: {
        type: Number,
        min: 1,
    },
    whereTo: {
        type: String,
    },
    bookingDate: {
        type: Date,
    },
    checkinDate: {
        type: Date,
    },
    checkoutDate: {
        type: Date,
    },
}, {
    collection: 'Passengers',
    timestamps: true
});

module.exports = mongoose.model('Passenger', PassengerSchema);
