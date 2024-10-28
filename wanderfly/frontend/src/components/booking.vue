<template>
  <div>
    <!--Section booking containing the Slogan and background image of the booking page -->
    <section class="bookingpagefirstpage">
      <div class="bookingsectionone">
        <div class="introductionbookingpage">
          <div class="bookingheaderone">
            <h1>{{ bookinghead }}</h1>
          </div>
          <div class="bookingdescone">
            <h2>{{ bookingdesc }}</h2>
          </div>
          <a href="#booking-form"><button class="bookingusbutton">Book Now</button></a>
        </div>
      </div>
    </section>

    <!-- booking Form Section -->
    <section class="bookingform" id="booking-form">
      <!-- This holds the slogan or the first part of the booking form -->
      <div class="bookingformcontainer">
        <div class="slogancontainer">
          <div class="bookingtitle">
            <h1>{{ bookingabouttitle }}</h1>
          </div>
          <div class="bookingdesc">
            <p>{{ bookingabouttitledesc }}</p>
          </div>
        </div>
        <!-- This holds the booking Form and the image in the left side-->
        <div class="bookingimageandformcontainer">
          <div class="rightcontainer">
            <img :src="images[0].src">
          </div>
          <!-- The booking Form -->
          <div class="leftformcontainer">
                  <form  @submit.prevent="handleSubmitForm">
                    <h1 class="Formtitle">Personal Information</h1>
                    <!-- Name Field -->
                    <label for="name">Name:</label><br>
                    <input type="text" v-model="booking.name" id="name" name="name" required><br><br>

                    <!-- Date of Birth Field -->
                    <label for="dob">Date of Birth:</label><br>
                    <input type="date" v-model="booking.dob" id="dob" name="dob" class="calendar" required><br><br>

                    <!-- Address Field -->
                    <label for="address">Address:</label><br>
                    <input type="text" v-model="booking.address" id="address" name="address" required><br><br>

                    <!-- Phone Number Field -->
                    <label for="phone">Phone Number:</label><br>
                    <input type="tel" v-model="booking.phone" id="phone" name="phone" required><br><br>

                    <h2 class="Formtitle">Travel Information</h2>
                    <!-- How Many Field -->
                    <label for="howmany">How Many People:</label><br>
                    <input type="number" v-model="booking.howMany" id="howmany" name="howMany" min="1" required><br><br>

                    <!-- Where to Field -->
                    <label for="whereto">Where To:</label><br>
                    <input type="text" v-model="booking.whereTo" id="whereto" name="whereTo" required><br><br>

                    <!-- Date of Booking Field -->
                    <label for="bookingdate">Date of Booking:</label><br>
                    <input type="date" v-model="booking.bookingDate" id="bookingDate" class="calendar" name="bookingdate" required><br><br>

                    <div class="labelcontainer">
                      <label for="checkin">Check-in Date:</label>
                      <label for="checkout">Check-out Date:</label>
                    </div>
                    
                    <div class="datecontainer">
                        <input type="date" v-model="booking.checkinDate" id="checkin" class="calendar" name="checkinDate" required>
                        <input type="date" v-model="booking.checkoutDate" id="checkout" class="calendar" name="checkout" required>
                    </div><br><br>

                    <!-- Submit Button -->
                    <button type="submit" class="bookingsubmitbutton">Submit</button>
                </form>
              </div>
        </div>
      </div>  
    </section>
    
    <!-- booking Section: Outro Section-->
    <section class="bookingoutro">
      <div class="bookingoutrosection">
        <img src="../assets/images/booking-airplane-img.png" alt="booking page Outro image">
        <div class="outroslogancontainer">
          <div class="bookingoutrotitle">
            <h1>{{ bookingoutrotitle }}</h1>
          </div>
          <div class="bookingoutrodesc">
            <p>{{ bookingoutrodesc }}</p>
          </div>
          <div class="bookingoutrobutton">
              <router-link to="/about"><button class="Readmoreoutrobutton">Read More</button></router-link>
          </div>
        </div>
      </div>
    </section>    
  </div>
</template>

<script>
import {formatDate} from '../utils/dateFormat.js'
import axios from 'axios';
export default {
  name: 'bookingPage',
  data() {
    return {
      bookinghead: 'Book Your Next Adventure',
      bookingdesc: 'You’re just a few simple steps away from booking your flight. Let’s make your travel dreams come true—enter your details below to find the best flight options for your next getaway!',
      bookingabouttitle: 'Book Now',
      bookingabouttitledesc: 'We’ll get you flying!',
      isModalOpen: false, 
      selectedImage: '', 
      selectedImageTitle: '', 
      selectedImageDesc: '', 
      images: [
      { name: 'booking Image', src: require('@/assets/images/booking-luggage-img.png'), alt: 'booking Form Image'}
      ],
      bookingoutrotitle: 'Board Now, Embrace Every Mile!',
      bookingoutrodesc: 'Welcome aboard WanderFly! Your next adventure awaits, and we’re excited to take you there. With WanderFly, you can count on a hassle-free booking process and a memorable journey ahead. Thank you for letting us be a part of your travel story!',
      booking: {
        name: '',
        dob: '',
        address: '',
        phone: '',
        howMany: 1,
        whereTo: '',
        bookingDate: '',
        checkinDate: '',
        checkoutDate: '',
      },
    }
  },
  
  methods: {
    openModal(image) {
      this.selectedImage = image.src;
      this.selectedImageTitle = image.title;
      this.selectedImageDesc = image.description;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = '';
      this.selectedImageTitle = '';
      this.selectedImageDesc = '';
    },
    handleSubmitForm() {
      // Format the relevant dates
      const formattedBookingDate = formatDate(this.booking.bookingDate);
      const formattedDob = formatDate(this.booking.dob);
      const formattedCheckinDate = formatDate(this.booking.checkinDate);
      const formattedCheckoutDate = formatDate(this.booking.checkoutDate);
      
      // Prepare the API URL for creating a booking
      const apiURL = 'http://localhost:4000/api/create-booking';

      // Set loading state
      this.isLoading = true;

      // Send the formatted dates along with other booking details
      axios.post(apiURL, {
        ...this.booking,
        bookingDate: formattedBookingDate, // Include formatted booking date
        dob: formattedDob, // Include formatted date of birth
        checkinDate: formattedCheckinDate, // Include formatted check-in date
        checkoutDate: formattedCheckoutDate, // Include formatted check-out date
      })
        .then(response => {
          console.log(response.data);
          alert('Booking successful!');
          
          // Reset the booking form
          this.booking = {
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
        })
        .catch(error => {
          console.error('Error submitting booking:', error.response ? error.response.data : error.message);
          alert('There was an error submitting your booking. Please try again.');
        })
        .finally(() => {
          this.isLoading = false;
        });
    }


  },
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

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* booking page section */
.bookingpagefirstpage {
  background-color: black;
}

router-link:hover {
  cursor: pointer;
}

/* Background Image cover */
.bookingsectionone {
  background-image: linear-gradient(rgba(0, 0, 0, 0.423)), url(../assets/images/booking-map-img.png);
  background-size: cover;
  background-position: center;
  max-width: 100%;
  max-height: 100vh;
  border: none;
}

/* Container for the Slogan */
.introductionbookingpage {
  width: 100%;
  height: 100vh;
  text-align: center;
}

/* header for the first section */
.bookingheaderone {
  padding: 14% 0 2% 0;
  color: #fff;
  font-size: 70px;
  font-weight: bold;
  width: 91%;
  margin: auto;
}

/* section of the header one description */
.bookingdescone {
  color: #fff;
  font-size: 30px;
  padding-bottom: 3%;
  width: 60%;
  margin: auto;
}

/* booking Us Button */
.bookingusbutton {
  color: #ffffff;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  padding: 10px 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  background-color: transparent;
  margin: auto;
  transition: 0.8s;
}

.bookingusbutton:hover {
  background-color: #00000056;
  transition: 0.5s;
}

/* booking Form container */
.bookingformcontainer{
  background-color: #000000;
  width: 100%;
  height: 170vh;
  color: #ffffff;

}

/* This holds the Slogan for booking */
.slogancontainer{
  text-align: center; 
  padding: 4% 0 0 0 ;
}

.bookingtitle{
  font-size: 70px;
}

.bookingdesc{
  font-size: 25px;
  padding: 0 0 3% 0;
  width: 38%;
  margin: auto;
}

/* This holds the image and the form */
.bookingimageandformcontainer {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; 
}

/* Form container */
.leftformcontainer {
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 4% 1% 0 0;
  font-size: 20px;
}

.Formtitle{
  text-align: center;
  font-size: 40px;
}

.labelcontainer label{
  padding: 0 160px 0 0;
}

.datecontainer {
    display: flex;
}

.datecontainer input {
  justify-content: space-between;
  margin-right: 10px;
  align-items: center;
}
form {
  width: 90%; /* Adjust the width of the form */
}

input, textarea {
  width: 100%; /* Full width of the form */
  padding: 9px 10px;
  margin: 8px 0;
}

/* Submit Button */
.bookingsubmitbutton{
  padding: 10px 40px;
  color: #ffffff;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  padding: 10px 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  background-color: transparent;
  transition: 0.8s;
  margin: 0 0 0 38%;
}


.bookingsubmitbutton:hover{
  background-color: #00000056;
  transition: 0.5s;
  cursor: pointer;
}

/* Outro Section of the booking page */
/* Container for booking outo section */
.bookingoutro {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 60vh;
  position: relative; /* Set relative positioning for absolute children */
}

/* background image container and this is where you also adjust the darkness of the background*/
.bookingoutrosection {
  width: 100%;
  height: auto;
  position: relative; /* Set relative positioning for the image */
}

/* booking outro Image cover */
.bookingoutrosection img {
  width: 100%;
  height: auto; /* Make the image fill the section */
  object-fit: cover; /* Ensure the image covers the section without distortion */
}

/* booking Outro Slogran (title, and Description) contianer*/
.outroslogancontainer {
  position: absolute; /* Position it relative to the nearest positioned ancestor */
  top: 0; /* Center vertically */
   /* Center horizontally */
  width: 100%;
  height: 57vh;
  color: white; /* Change text color for visibility */
  z-index: 1; /* Ensure the text is above the image */
  background-color: #00000067;
  text-align: right;
}

/* booking outro elemets*/
.bookingoutrotitle h1{
  font-size: 40px;
  font-weight: bold;
  padding: 60px 50px 10px 0;/* top righht bottom left */
}

.bookingoutrodesc {
  width: 50%;
  padding: 0 0 0 49% ;
}

.bookingoutrodesc p,.bookingoutrobutton {
  font-size: 21px;
  padding: 20px 50px 10px 0;
}

/* booking Outro Button */
.Readmoreoutrobutton{
  position: absolute;
  right: 12%;
  color: #ffffff;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  padding: 10px 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  background-color: transparent;
  margin: auto;
  transition: 0.8s;
}

/* booking Outro Button hover effect */
.Readmoreoutrobutton:hover{
  background-color: #00000056;
  transition: 0.5s;
}

/* MOBILE AND TABLET */

/* General Styles for Mobile */
@media only screen and (max-width: 768px) {
  /* Booking Section One */
  .bookingheaderone {
    font-size: 40px;
    padding: 30% 0 5% 0;
  }

  .bookingdescone {
    font-size: 20px;
    width: 90%;
  }

  .bookingusbutton {
    font-size: 16px;
    padding: 8px 20px;
    margin: 20px 0;
  }

  /* Booking Form Section */
  .bookingformcontainer {
    height: auto;
  }

  .bookingtitle {
    font-size: 40px;
  }

  .bookingdesc {
    font-size: 18px;
    width: 85%;
  }

  .bookingimageandformcontainer {
    flex-direction: column;
    align-items: center;
  }

  .leftformcontainer {
    width: 100%;
    padding: 20px;
  }

  .rightcontainer img {
    width: 90%;
  }

  .Formtitle {
    font-size: 30px;
  }

  form {
    width: 100%;
  }

  input, textarea {
    font-size: 16px;
    padding: 7px;
  }

  .datecontainer {
    flex-direction: column;
  }

  .bookingsubmitbutton {
    width: 100%;
    font-size: 18px;
  }

  /* Outro Section */
  .bookingoutrotitle h1 {
    font-size: 30px;
    padding: 30px 20px;
  }

  .bookingoutrodesc {
    width: 100%;
    padding: 0 20px;
  }

  .Readmoreoutrobutton {
    font-size: 16px;
    padding: 10px 20px;
  }
}


/* MOBILE AND TABLET VIEW */
/* Tablet View */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  /* Booking Section One */
  .bookingheaderone {
    font-size: 50px;
    padding: 20% 0 5% 0;
  }

  .bookingdescone {
    font-size: 25px;
    width: 80%;
  }

  .bookingusbutton {
    font-size: 18px;
    padding: 10px 30px;
  }

  /* Booking Form Section */
  .bookingtitle {
    font-size: 50px;
  }

  .bookingdesc {
    font-size: 20px;
    width: 75%;
  }

  .bookingimageandformcontainer {
    flex-direction: column;
    align-items: center;
  }

  .leftformcontainer {
    width: 80%;
  }

  .rightcontainer img {
    width: 70%;
  }

  .Formtitle {
    font-size: 35px;
  }

  form {
    width: 95%;
  }

  input, textarea {
    font-size: 18px;
    padding: 8px;
  }

  .datecontainer {
    flex-direction: row;
  }

  .bookingsubmitbutton {
    width: 60%;
    font-size: 20px;
  }

  /* Outro Section */
  .bookingoutrotitle h1 {
    font-size: 35px;
    padding: 40px 30px;
  }

  .bookingoutrodesc {
    width: 80%;
  }

  .Readmoreoutrobutton {
    font-size: 18px;
    padding: 10px 30px;
  }
}

/* Larger screens */
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  /* Booking Section One */
  .bookingheaderone {
    font-size: 60px;
  }

  .bookingdescone {
    font-size: 28px;
    width: 75%;
  }

  .bookingusbutton {
    font-size: 20px;
  }

  /* Booking Form Section */
  .bookingtitle {
    font-size: 55px;
  }

  .bookingdesc {
    font-size: 22px;
    width: 70%;
  }

  .bookingimageandformcontainer {
    flex-direction: row;
    align-items: center;
  }

  .leftformcontainer {
    width: 60%;
  }

  .rightcontainer img {
    width: 50%;
  }

  .Formtitle {
    font-size: 40px;
  }

  form {
    width: 80%;
  }

  input, textarea {
    font-size: 20px;
  }

  .bookingsubmitbutton {
    width: 50%;
    font-size: 22px;
  }

  /* Outro Section */
  .bookingoutrotitle h1 {
    font-size: 40px;
  }

  .bookingoutrodesc {
    width: 70%;
  }

  .Readmoreoutrobutton {
    font-size: 20px;
  }
}

/* Mobile View (up to 480px) */
@media only screen and (max-width: 480px) {
  /* Booking Section One */
  .bookingheaderone {
    font-size: 35px;
    padding: 40% 0 5% 0;
  }

  .bookingdescone {
    font-size: 18px;
    width: 95%;
  }

  .bookingusbutton {
    font-size: 14px;
    padding: 8px 15px;
    margin: 15px 0;
  }

  /* Booking Form Section */
  .bookingformcontainer {
    height: auto;
  }

  .bookingtitle {
    font-size: 35px;
  }

  .bookingdesc {
    font-size: 16px;
    width: 90%;
  }

  .bookingimageandformcontainer {
    flex-direction: column;
    align-items: center;
  }

  .leftformcontainer {
    width: 100%;
    padding: 10px;
  }

  .rightcontainer img {
    width: 85%;
  }

  .Formtitle {
    font-size: 25px;
  }

  form {
    width: 100%;
  }

  input, textarea {
    font-size: 14px;
    padding: 5px;
  }

  .datecontainer {
    flex-direction: column;
  }

  .bookingsubmitbutton {
    width: 100%;
    font-size: 16px;
  }

  /* Outro Section */
  .bookingoutrotitle h1 {
    font-size: 25px;
    padding: 20px 15px;
  }

  .bookingoutrodesc {
    width: 100%;
    padding: 0 15px;
  }

  .Readmoreoutrobutton {
    font-size: 14px;
    padding: 8px 15px;
  }
}

</style>