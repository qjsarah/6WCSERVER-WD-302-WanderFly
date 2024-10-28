<template>
  <div class="bookingformcontainer">
    <h3>
      {{ passenger._id === null ? 'Add Passenger' : 'Edit Passenger' }}
    </h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="passenger.name" id="name" required />
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth:</label>
        <input type="date" v-model="passenger.dob" id="dob" required />
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" v-model="passenger.address" id="address" required />
      </div>
      <div class="form-group">
        <label for="phone">Phone No.:</label>
        <input type="tel" v-model="passenger.phone" id="phone" required />
      </div>
      <div class="form-group">
        <label for="howMany">How Many:</label>
        <input type="number" v-model="passenger.howMany" id="howMany" min="1" required />
      </div>
      <div class="form-group">
        <label for="whereTo">Where To:</label>
        <input type="text" v-model="passenger.whereTo" id="whereTo" required />
      </div>
      <div class="form-group">
        <label for="bookingDate">Date of Booking:</label>
        <input type="date" v-model="passenger.bookingDate" id="bookingDate" required />
      </div>
      <div class="form-group">
        <label for="checkinDate">Check-in Date:</label>
        <input type="date" v-model="passenger.checkinDate" id="checkinDate" required />
      </div>
      <div class="form-group">
        <label for="checkoutDate">Checkout Date:</label>
        <input type="date" v-model="passenger.checkoutDate" id="checkoutDate" required />
      </div>

      <button type="submit" class="submit-button">{{ passenger._id === null ? 'Add Passenger' : 'Update Passenger' }}</button>
      <button type="button" class="cancel-button" @click="$emit('closeForm')">Cancel</button>
    </form>
  </div>
</template>

<script>
import {formatDate} from '../../utils/dateFormat.js'
import axios from 'axios';
export default {
  props: {
    passenger: {
      type: Object,
      default: () => ({
        _id: null,
        name: '',
        dob: '',
        address: '',
        phone: '',
        howMany: 1,
        whereTo: '',
        bookingDate: '',
        checkinDate: '',
        checkoutDate: '',
      }),
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    handleSubmit() {
      // Format the relevant dates
      const formattedBookingDate = formatDate(this.passenger.bookingDate);
      const formattedDob = formatDate(this.passenger.dob);
      const formattedCheckinDate = formatDate(this.passenger.checkinDate);
      const formattedCheckoutDate = formatDate(this.passenger.checkoutDate);

      // Determine the API URL based on whether we're updating or creating a passenger
      const apiURL = this.passenger && this.passenger._id 
        ? `http://localhost:4000/api/update-passenger/${this.passenger._id}` 
        : 'http://localhost:4000/api/create-passenger';

      this.isLoading = true;

      // Use PUT for update and POST for create
      const requestMethod = this.passenger._id ? axios.put : axios.post;

      // Send the formatted dates along with other passenger details
      requestMethod(apiURL, {
        ...this.passenger,
        bookingDate: formattedBookingDate, // Include formatted booking date
        dob: formattedDob,                 // Include formatted date of birth
        checkinDate: formattedCheckinDate, // Include formatted check-in date
        checkoutDate: formattedCheckoutDate, // Include formatted check-out date
      })
        .then(response => {
          console.log('Passenger submitted:', response.data);
          this.$emit('passengerSubmitted');
          this.clearForm();
        })
        .catch(error => {
          console.error('Passenger submission error:', error);
          alert('Error submitting passenger data. Please try again.');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },  
    clearForm() {
      this.passenger = {
        _id: null,
        name: '',
        dob: '',
        address: '',
        phone: '',
        howMany: 1,
        whereTo: '',
        bookingDate: '',
        checkinDate: '',
        checkoutDate: '',
      };
    },
  },
};
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
.bookingformcontainer{
  background-color: #000000;
  height: 170vh;
  color: #ffffff;
  width: 50%;
  margin: 5% auto;
}
.form-container {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f8f9fa; /* Light background color */
  margin: 20px 0;
}

h3 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px; /* Space between form fields */
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold; /* Bold labels */
}

input[type="text"],
input[type="date"],
input[type="tel"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="tel"]:focus,
input[type="number"]:focus {
  border-color: #007bff; /* Change border color on focus */
  outline: none; /* Remove outline */
}

.submit-button,
.cancel-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer; /* Change cursor on hover */
}

.submit-button {
  background-color: #28a745; /* Green background for submit button */
  color: white;
  margin-right: 10px; /* Space between buttons */
}

.submit-button:hover {
  background-color: #218838; /* Darker green on hover */
}

.cancel-button {
  background-color: #6c757d; /* Grey background for cancel button */
  color: white;
}

.cancel-button:hover {
  background-color: #5a6268; /* Darker grey on hover */
}
</style>
