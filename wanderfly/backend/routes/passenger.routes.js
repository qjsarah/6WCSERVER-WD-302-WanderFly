const express = require('express');
const passengerRoute = express.Router();
let passengerModel = require('../models/Passengers.js');

// Create a new passenger
passengerRoute.route('/create-booking').post(async (req, res, next) => {
  try {
    const data = await passengerModel.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    return next(error);
  }
});

passengerRoute.route('/create-passenger').post(async (req, res, next) => {
  try {
    const data = await passengerModel.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    return next(error);
  }
});

// Get all passengers
passengerRoute.route('/get-passengers').get(async (req, res, next) => {
  try {
    const data = await passengerModel.find();
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Update a passenger by ID
passengerRoute.route('/update-passenger/:id').put(async (req, res, next) => {
  try {
    const data = await passengerModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!data) {
      return res.status(404).json({ msg: "Passenger not found" });
    }
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Delete a passenger by ID
passengerRoute.route('/delete-passenger/:id').delete(async (req, res, next) => {
  try {
    const data = await passengerModel.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ msg: "Passenger not found" });
    }
    res.status(200).json({ msg: "Passenger deleted successfully", data });
  } catch (error) {
    return next(error);
  }
});

module.exports = passengerRoute;
