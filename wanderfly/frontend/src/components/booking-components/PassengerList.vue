<template>
  <div class="passenger-table">
    <h2 class="">Passenger List</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>Phone No.</th>
          <th>How Many</th>
          <th>Where to</th>
          <th>Date of Booking</th>
          <th>Check in date</th>
          <th>Check out Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <passenger-item
          v-for="(passenger, index) in passengers"
          :key="passenger._id" 
          :passenger="passenger"
          @editPassenger="editPassenger(index)"
          @removePassenger="removePassenger(passenger._id)" 
        />
      </tbody>
    </table>
    <button class="btn btn-primary mb-3" @click="showForm">Add Passenger</button>
    <passenger-form
      v-if="isFormVisible"
      @closeForm="closeForm"
      :passenger="selectedPassenger"
    />
  </div>
</template>

<script>
import axios from 'axios';
import PassengerForm from './PassengerForm.vue';
import PassengerItem from './Passengers.vue';

export default {
  components: {
    PassengerForm,
    PassengerItem,
  },
  data() {
    return {
      passengers: [],
      isFormVisible: false,
      selectedPassenger: null,
    };
  },
  methods: {
    fetchPassengers() {
      axios.get('http://localhost:4000/api/get-passengers')
        .then(res => {
          this.passengers = res.data; 
        })
        .catch(error => {
          console.error(error);
          alert('Error fetching passengers. Please try again.');
        });
    },
    showForm() {
      this.selectedPassenger = {  
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
      this.isFormVisible = true;
    },
    closeForm() {
      this.isFormVisible = false;
    },
    editPassenger(index) {
      this.selectedPassenger = { ...this.passengers[index] };
      this.isFormVisible = true;
    },
    removePassenger(passengerId) {
      if (confirm('Are you sure you want to delete this passenger?')) {
        const apiURL = `http://localhost:4000/api/delete-passenger/${passengerId}`;
        axios.delete(apiURL)
          .then(() => {
            this.passengers = this.passengers.filter(p => p._id !== passengerId); 
          })
          .catch(error => {
            console.error(error);
            alert('Error deleting passenger. Please try again.');
          });
      }
    },
    
},
  mounted() {
    this.fetchPassengers(); 
  }
};
</script>

<style scoped>
/* CSS Reseter to remove some border or make the auto filled css to be reset back from default */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body, html {
  overflow-x: hidden;
  width: 100%;
  background-color: #000;
}

h2 {
  color: #fff;
  text-align: center;
  font-size: 4em;
  font-weight: bold;
  padding: 8% 0 0;
}
table {
  border-collapse: collapse;
  margin: 5% 5% 0;
}

th, td {
  padding: 15px;
  text-align: left;
}

th {
  background-color: #000; /* Black background for headers */
  color: #fff; /* White text for headers */
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2a0; 
}

.btn-primary {
  background-color: #000000; /* Bootstrap primary color */
  border: 1px solid #fff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-left: 5%;
  margin-top: 2%;
}

.btn-primary:hover {
  background-color: #00000062; /* Darker on hover */
}

.passenger-table {
  background-color: #000;
}
tr:nth-child(odd) {
  color: #fff;
}
</style>

