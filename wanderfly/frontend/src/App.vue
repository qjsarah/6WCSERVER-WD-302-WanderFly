<template>
  <div id="app">
    <!-- Header with Logo, Navigation -->
    <header class="header">
      <!-- Left Header: Logo -->
      <div class="Left-header">
        <router-link class="nav-link" to="/">
          <img :src="logo" alt="WanderFly Logo" class="logo" />
        </router-link>
      </div>
      <!-- Right Header: Navigation Links -->
      <div class="right-header">
        <nav class="nav-head">
          <ul class="navlink">
            <li><router-link class="nav-link" to="/">Home</router-link></li>
            <li><router-link class="nav-link" to="/about">About</router-link></li>
            <li><router-link class="nav-link" to="/booking">Booking</router-link></li>
            <li><router-link class="nav-link" to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view />
    <!-- Footer Section -->
    <footer class="footer">
          <div class="footercontent">
            <div class="logodescfooter">
              <div class="logo">
                <router-link to="/"><img :src="Logo" alt="WanderFly Logo" class="social-icon" /></router-link>
              </div>
              <div class="desc">
                <h2>{{ footerdesc }}</h2>
              </div>
            </div>
              <div class="quicklink">
                <h2>Quick Links</h2>
                <ul>
                  <li><router-link to="/about">About</router-link></li>
                  <li><router-link to="/booking">Book Now</router-link></li>
                  <li><router-link to="/contact">Contact Us</router-link></li>
                  <li><router-link to="/view-booking">Passenger List</router-link></li>
        </ul>
              </div>
              <div class="contact">
                <h2>Contact</h2>
                <ul>
                  <li>{{ num }}</li>
                  <li>{{ email }}</li>
                </ul>
              </div>
              <div class="connect">
                <h2>Connect</h2>
                <div class="socialscontainer">
                  <img :src="facebookLogo" alt="Facebook" class="social-icon" />
                  <img :src="InstaLogo" alt="InstaLogo" class="social-icon" /><img :src="twitterLogo" alt="twitterLogo" class="social-icon" />
                </div>
              </div>
          </div>
          <div class="footercreatedby">
              <p>&copy; {{ new Date().getFullYear() }} {{ footer }}</p>
            </div>
        </footer>
  </div>
</template>
<script>
import logo from '@/assets/images/logo.png'; // Import the logo

export default {
  name: "App",
  data() {
    return {
      logo,
      footer: 'Copyright @2024 All Rights reserve | Created by WanderFly Team',
      footerdesc: "We'll Get You Flying",
      num: '09123123123',
      email: 'wfly.b@gmail.com',
      facebookLogo: require('@/assets/FacebookLogo.png'),
      InstaLogo: require('@/assets/InstagramLogo.png'),
      twitterLogo: require('@/assets/TwitterLogo.png'),
      Logo: require('@/assets/images/logo.png')
    };
  }
};
</script>

<style>
/* Css reseter for automatic reset */
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
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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

/* Header and container layout */
.header {
  position: absolute;
  top: 0;
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 1;
}

/* Left header (Logo) styling */
.left-header  {
  width: 50px;
  height: 50px;
  margin: 0;
}

.leftheader img{
padding: 0 0 0 0;
}

/* Navigation links in the Left */
.navlink {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.navlink li {
  margin: 0 30px 0 30px;/* top righht bottom left */
}

.navlink li a {
  text-decoration: none;
  color: #ffffff; 
  font-size: 18px;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease;
}

/* Hover effect for navigation links */
.navlink li a:after {
  content: "";
  position: absolute;
  background-color: #ffffff;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 2px;
  transition: width 0.5s;
}

.navlink li a:hover:after {
  width: 100%;
}

/*Hover Effect*/
.navlink li a:hover {
  color: #ffffff; 
}

/************************** FOOTER **********************/
.footer {
  background-color: rgb(0, 0, 0); /* Set the background color of the footer */
  color: white; /* Set text color */
  height: 50vh;
  width: 100%;
  font-weight: bold;
}

.footercontent{
  display: flex;
  padding: 0 5% 0 5%;
  height: 50vh;
  text-decoration: none; /* Remove underline */
}

.footernav  {
  color: white; /*Link color */
}

.desc h2{
  font-size: 18px;
  padding: 35px 10px 20px 0;
}

.logodescfooter, .quicklink, .contact, .connect{
  width: 100%;
  padding: 40px 10px 0 10px;
}

.quicklink h2, .contact h2, .connect h2{
  font-size: 28px;
  color: #ffffff;
}

.logodescfooter{
  text-align: left;
  font-size: 20px;
  padding: 10px 10px 20px 30px;
}

.quicklink {
    position: relative; /* Ensure this is set so the pseudo-element is positioned correctly */
}

.quicklink a {
    color: #fff;
    text-decoration: none; /* No underline */
    position: relative; /* Make sure the link has a relative position */
}

.quicklink h2 {
    padding: 40px 10px 20px 30px;
    font-size: 30px;
}

.quicklink ul {
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
    list-style-type: none; /* Remove bullet points */
}

.quicklink li {
    padding: 15px 10px 10px 30px;
    font-size: 24px;
    text-align: left;
    position: relative; /* Ensure li has relative positioning for after effect */
}

.quicklink li a:after {
    position: absolute;
    content: "";
    background-color: #ffffff;
    left: 0; /* Start from the left */
    bottom: -10px; /* Position at the bottom of the link */
    width: 100%; /* Full width */
    height: 3px; /* Height of the underline */
    transform: scaleX(0); /* Initially hidden */
    transform-origin: left;
    transition: transform 0.5s ease; /* Smooth transition */
}

.quicklink li a:hover:after {
    transform: scaleX(1); /* Scale to full width on hover */
}

.contact {
    position: relative;
}

.contact h2 {
    padding: 40px 10px 20px 30px;
    font-size: 30px;
}

.contact ul {
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
    list-style-type: none; /* Remove bullet points */
}

.contact li {
    padding: 15px 10px 10px 30px;
    font-size: 24px;
    text-align: left;
    position: relative;
}

.contact li:after {
    position: absolute;
    content: "";
    background-color: #ffffff;
    left: 10%;
    bottom: 0; /* Position at the bottom of the item */
    width: 60%; /* Full width */
    height: 3px; /* Height of the underline */
    transform: scaleX(0); /* Initially hidden */
    transform-origin: left; /* Start from the left side */
    transition: transform 0.5s ease; /* Smooth transition */
}

.contact li:hover:after {
    transform: scaleX(1); /* Scale to full width on hover */
}


.connect h2{
  padding: 40px 10px 20px 30px;
  font-size: 30px;
}

.socialscontainer{
  width: 60%;
  padding: 0 0 0 30px;
}

.connect img{
  padding: 10px 20px 0 0;
}

.footercreatedby{
  text-align: center;
  background-color: #000000;
}

@media (max-width: 768px) {
  .footercontent {
    flex-direction: column; 
    align-items: center; 
  }

  .logodescfooter,
  .quicklink,
  .contact,
  .connect {
    width: 100%; 
    text-align: center; 
    padding: 10px; 
  }

  .quicklink h2,
  .contact h2,
  .connect h2 {
    font-size: 24px; 
  }

  .quicklink li,
  .contact li {
    font-size: 20px; 
    padding: 10px;
  }

  .socialscontainer {
    width: 100%; 
    padding: 0; 
  }

  .footercreatedby {
    font-size: 16px; 
    padding: 10px 0; 
  }
}
@media (max-width: 480px) {
  /* Footer adjustments */
  
  .footercontent {
    padding: 10px;
  }

  .quicklink, .contact, .connect {
    padding: 10px;
  }

  .socialscontainer {
    width: 100%;
    padding: 5px 0;
  }

  .footercreatedby {
    font-size: 14px;
    padding: 5px;
  }
}
</style>
