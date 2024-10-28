<template>
  <div>
    <!--Section Contact containing the Slogan and background image of the Contact page -->
    <section class="contact_page_first_page">
      <div class="contact_section_one">
        <div class="introduction_contact_page">
          <div class="contact_header_one">
            <h1>{{ contact_head }}</h1>
          </div>
          <div class="contact_desc_one">
            <h2>{{ contact_desc }}</h2>
          </div>
          <a href="#contact-form"><button class="contact_us_button">Contact us</button></a>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact_form" id="contact-form">
      <!-- This holds the slogan or the first part of the contact form -->
      <div class="contact_form_container">
        <div class="slogan_container">
          <div class="contact_title">
            <h1>{{ contact_about_title }}</h1>
          </div>
          <div class="contact_desc">
            <p>{{ contact_about_title_desc }}</p>
          </div>
        </div>
        <!-- This holds the Contact Form and the image in the left side-->
        <div class="contact_image_and_form_container">
          <div class="right_container">
            <img :src="images[0].src">
          </div>
          <!-- The Contact Form -->
          <div class="left_form_container">
              <form action="/submit-form" method="POST">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>

                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>

                <label for="phone">Phone Number:</label><br>
                <input type="tel" id="phone" name="phone" required><br><br>

                <label for="message">Message:</label><br>
                <textarea id="message" name="message" rows="5" cols="30" required></textarea><br><br>

                <button class="contact_submit_button">Submit</button>
              </form>
          </div>
        </div>
      </div>  
    </section>
    
    <!-- Contact Section: Outro Section-->
    <section class="contact_outro">
      <div class="contact_outro_section">
        <img src="../assets/images/contact-outro.png" alt="Outro image">
        <div class="outro_slogan_container">
          <div class="contact_outro_title">
            <h1>{{ contact_outro_title }}</h1>
          </div>
          <div class="contact_outro_desc">
            <p>{{ contact_outro_desc }}</p>
          </div>
          <div class="contact_outro_button">
              <router-link to="/about"><button class="Read_more_outro_button">Read More</button></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      contact_head: 'Your Journey, Our Priority at WanderFly!',
      contact_desc: 'From booking support to service questions, we’re here to make sure your travel plans are as smooth as possible. Got a question or feedback? Reach out anytime—we’re just a message away, ready to turn your travel needs into a seamless experience!',
      contact_about_title: 'Contact us',
      contact_about_title_desc: 'Reach out anytime and we’ll get you flying',
      isModalOpen: false, 
      selectedImage: '', 
      selectedImageTitle: '', 
      selectedImageDesc: '', 
      images: [
      { name: 'Contact Image', src: require('@/assets/images/contact-img1.png'), alt: 'Form Image'}
      ],
      contact_outro_title: 'Let’s make your travel dreams a reality!',
      contact_outro_desc: 'Our team at WanderFly is just a message away, ready to help you with bookings, answer questions, or provide the support you need. Connect with us, and let’s start planning your adventure together!',
      };
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

router-link:hover {
  cursor: pointer;
}

/* contact page section */
.contact_page_first_page {
  background-color: black;
}

/* Background Image cover */
.contact_section_one {
  background-image: linear-gradient(rgba(0, 0, 0, 0.423)), url(../assets/images/contact-cover.png);
  background-size: cover;
  background-position: center;
  max-width: 100%;
  max-height: 100vh;
  border: none;
}

/* Container for the Slogan */
.introduction_contact_page {
  width: 100%;
  height: 100vh;
  text-align: center;
}

/* header for the first section */
.contact_header_one {
  padding: 14% 0 2% 0;
  color: #fff;
  font-size: 70px;
  font-weight: bold;
  width: 91%;
  margin: auto;
}

/* section of the header one description */
.contact_desc_one {
  color: #fff;
  font-size: 30px;
   padding-bottom: 3%;
  width: 60%;
  margin: auto;
}

/* Contact Us Button */
.contact_us_button {
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

.contact_us_button:hover {
  background-color: #00000056;
  transition: 0.5s;
}

/* Contact Form container */
.contact_form_container{
  background-color: #000000;
  width: 100%;
  height: 110vh;
  color: #ffffff;

}

.right_container img {
  max-width: 100%;
  height: auto;
}

/* This holds the Slogan for contact */
.slogan_container{
  text-align: center; 
  padding: 4% 0 0 0 ;
}

.contact_title{
  font-size: 70px;
}

.contact_desc{
  font-size: 25px;
  padding: 0 0 3% 0;
  width: 38%;
  margin: auto;
}

/* This holds the image and the form */
.contact_image_and_form_container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

/* Form container */
.left_form_container {
  width: 50%;
  display: flex;
  justify-content: center; /* Center form horizontally within the container */
  align-items: center; /* Center form vertically within the container */
  padding: 4% 1% 0 0;
  font-size: 20px;
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
.contact_submit_button{
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


.contact_submit_button:hover{
  background-color: #00000056;
  transition: 0.5s;
}

/* Outro Section of the contact page */
/* Container for contact outo section */
.contact_outro {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 60vh;
  position: relative; /* Set relative positioning for absolute children */
}

/* background image container and this is where you also adjust the darkness of the background*/
.contact_outro_section {
  width: 100%;
  height: auto;
  position: relative; /* Set relative positioning for the image */
}

/* contact outro Image cover */
.contact_outro_section img {
  width: 100%;
  height: auto; /* Make the image fill the section */
  object-fit: cover; /* Ensure the image covers the section without distortion */
}

/* contact Outro Slogran (title, and Description) contianer*/
.outro_slogan_container {
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

/* contact outro elemets*/
.contact_outro_title h1{
  font-size: 40px;
  font-weight: bold;
  padding: 60px 50px 10px 0;/* top righht bottom left */
}

.contact_outro_desc {
  width: 50%;
  padding: 0 0 0 49% ;
}

.contact_outro_desc p,.contact_outro_button {
  font-size: 21px;
  padding: 20px 50px 10px 0;
}

/* contact Outro Button */
.Read_more_outro_button{
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

/* contact Outro Button hover effect */
.Read_more_outro_button:hover{
  background-color: #00000056;
  transition: 0.5s;
}

/* MOBILE AND TABLET */

/* Tablet view */
@media (max-width: 768px) {
  /* Adjusting the font sizes */
  .contact_header_one {
    font-size: 50px; 
  }

  .contact_desc_one {
    font-size: 24px;
  }

  .contact_us_button {
    font-size: 18px; 
    padding: 8px 30px; 
  }

  .contact_form_container {
    height: 100vh; 
  }

  .contact_title {
    font-size: 50px; 
  }

  .contact_desc {
    font-size: 20px; 
    width: 80%; 
  }

  .contact_image_and_form_container {
    flex-direction: column; 
    padding: 20px;
  }

  .left_form_container {
    width: 100%; 
    text-align: center;
  }

  .right_container img{
    max-width: 20%;
    height: auto;
  }

  form {
    width: 100%; 
    padding: 20px; 
  }

  .contact_submit_button {
    padding: 8px 30px;
    font-size: 18px;
    margin: 0 auto;
  }

  .contact_outro_title h1 {
    font-size: 30px; 
    padding: 40px 20px 10px 0;
  }

  .contact_outro_desc {
    padding: 0 0 0 0;
    width: 100%; 
  }

  .contact_outro_desc p {
    font-size: 18px;
    padding: 20px 20px 10px 0;
  }

  .Read_more_outro_button {
    right: 5%; 
    font-size: 18px;
    padding: 8px 30px;
  }
}

/* Mobile view (480px and below) */
@media (max-width: 480px) {
  .contact_header_one {
    font-size: 40px;
  }

  .contact_desc_one {
    font-size: 18px;
  }

  .contact_us_button {
    font-size: 16px;
    padding: 6px 20px;
  }

  .contact_title {
    font-size: 40px;
  }

  .contact_desc {
    font-size: 18px;
    width: 90%;
  }

  .contact_image_and_form_container {
    padding: 10px;
  }

  .left_form_container, 
  .right_container {
    padding: 10px;
  }

  form {
    padding: 10px;
  }

  input, textarea {
    padding: 7px 8px;
  }

  .contact_submit_button {
    font-size: 16px;
    padding: 6px 20px;
  }

  .contact_outro_title h1 {
    font-size: 24px;
    padding: 20px;
  }

  .contact_outro_desc p {
    font-size: 16px;
    padding: 10px 0;
  }

  .Read_more_outro_button {
    font-size: 16px;
    padding: 6px 20px;
  }
}

</style>