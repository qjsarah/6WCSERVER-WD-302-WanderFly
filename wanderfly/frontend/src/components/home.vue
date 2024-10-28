<template>
  <div>

    <!-- Hamburger Menu for Mobile View -->
    <div class="hamburger" @click="toggleMenu">
      <span class="bar" v-for="n in 3" :key="n"></span>
    </div>

    <!-- Mobile Menu -->
    <nav v-if="isMenuOpen" class="mobile-menu">
      <ul>
        <li><a href="../components/about.vue">About</a></li>
        <li><a href="../components/booking.vue">Book Now</a></li>
        <li><a href="../components/contact.vue">Contact us</a></li>
      </ul>
      <button class="close-menu" @click="toggleMenu">Close</button>
    </nav>


    <!--Section Home containing the Slogan and background image of the Home page -->
    <section class="homepagefirstpage">
      <div class="homesectionone">
        <div class="introductionhomepage">
          <div class="homeheaderone">
            <h1>{{ homehead }}</h1>
          </div>
          <div class="homedescone">
            <h2>{{ homedesc }}</h2>
          </div>
          <router-link to="/booking"><button class="booknowbutton">Book Now</button></router-link>
        </div>
      </div>
    </section>

    <!-- Home Page: About Section -->
    <section class="homesecondpageabout">
      <div class="aboutpagecontainer">
        <div class="aboutpageintro">
          <h1>{{ homeabouttitle }}</h1>
        </div>
        <div class="aboutpagedesc">
          <h3>{{ homeabouttitledesc }}</h3>
        </div>

        <!-- Gallery Image Container this holds the whole section of the gallery-->
        <div class="gallerycontainer">
          <!-- Images Containers this holds all the images -->
          <div class="aboutgallery">
            <div v-for="(image, index) in images" :key="index" :class="image.name">
              <img
                @click="openModal(image)"
                :src="image.src"
                :alt="image.alt"
              />
            </div>
          </div>
        </div>

        <!-- A modal function for the modal to work -->
        <div v-if="isModalOpen" class="modal" @click.self="closeModal">
          <span class="close" @click="closeModal">&times;</span>
          <div class="modal-content">
            <img :src="selectedImage" alt="Selected Image" class="modal-image" />
            <div class="modal-text">
              <!-- Modal Title -->
              <h2>{{ selectedImageTitle }}</h2>
              <!-- Modal Description -->
              <p>{{ selectedImageDesc }}</p>
            </div>
            <div class="modal-button">
              <router-link to="/booking"><button class="booknowaboutbutton">Book Now</button></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Home Section: Outro Section-->
    <section class="homeoutro">
      <!-- Outro image container -->
      <div class="homeoutrosection">
        <img src="../assets/images/home-outro.png" alt="Home page Outro image">
        <div class="outroslogancontainer">
          <div class="homeoutrotitle">
            <h1>{{ homeoutrotitle }}</h1>
          </div>

          <div class="homeoutrodesc">
            <p>{{ homeoutrodesc }}</p>
          </div>
          
          <div class="homeoutrobutton">
              <router-link to="/booking"><button class="booknowoutrobutton">Book Now</button></router-link>
          </div>
        </div>
      </div>
    </section>

    
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      homehead: 'Your Ticket to the World Awaits!',
      homedesc: 'Explore new horizons with our best flight deals.',
      homeabouttitle: 'Your Journey Begins',
      homeabouttitledesc: 'Explore Top destinations',
      isModalOpen: false, 
      selectedImage: '', 
      selectedImageTitle: '', 
      selectedImageDesc: '', 
      images: [
        {
            name: 'korea',
            src: require('@/assets/images/korea.png'),
            alt: 'Korea Image',
            title: 'Explore Korea: A Land of History, Culture, and Modern Innovation',
            description: 'From the ancient palaces of Seoul to the scenic beauty of Jeju Island, Korea offers a blend of history, culture, and cutting-edge technology. Discover vibrant street markets, taste traditional Korean cuisine, and witness the famous K-pop culture firsthand. Experience the peaceful temples of Gyeongju and the bustling streets of Gangnam for an unforgettable adventure.'
        },
        {
            name: 'japan',
            src: require('@/assets/images/japan.png'),
            alt: 'Japan Image',
            title: 'Explore Japan: Where Tradition Meets Tomorrow',
            description: 'Japan is a captivating mix of the ancient and the ultra-modern. Discover serene temples in Kyoto, neon-lit skyscrapers in Tokyo, and breathtaking natural scenery. From cherry blossoms to mountain trails, sushi to ramen, every moment in Japan promises something memorable. Embrace the beauty and spirit of this unique country where every season brings its own charm.'
        },
        {
            name: 'china',
            src: require('@/assets/images/china.png'),
            alt: 'China Image',
            title: 'Explore China: Land of Wonders, Tradition, and Innovation',
            description: 'China offers timeless historical landmarks, from the Great Wall to the Forbidden City. Wander through the bustling markets of Shanghai, enjoy the tranquil beauty of Guilin’s landscapes, and explore a culture that’s rich in history and tradition. Discover a vast country where ancient heritage meets dynamic growth and modernization.'
        },
        {
            name: 'spain',
            src: require('@/assets/images/spain.png'),
            alt: 'Spain Image',
            title: 'Explore Spain: A Tapestry of Cultures, Sun, and Art',
            description: 'Immerse yourself in Spain’s passion for life, from the artistic streets of Barcelona to the historical heart of Madrid. Enjoy Spanish cuisine, famous for tapas and paella, and experience the rhythm of Flamenco. Spain’s architecture, coastal beauty, and cultural richness make it a must-see European destination.'
        },
        {
            name: 'lasVegas',
            src: require('@/assets/images/las-vegas.png'),
            alt: 'Las Vegas Image',
            title: 'Explore Las Vegas: The City That Never Sleeps',
            description: 'Las Vegas is a city of lights, entertainment, and endless possibilities. From world-class shows to grand casinos, this city is a playground for travelers seeking excitement. Marvel at the Strip’s iconic hotels and discover hidden gems, from trendy dining spots to desert landscapes just beyond the city’s glow.'
        },
        {
          name: 'sydney',
          src: require('@/assets/images/sydney.png'),
          alt: 'Sydney Image',
          title: 'Explore Sydney: The Harbour City',
          description: 'Sydney, Australia’s iconic city, is renowned for its stunning harbour, architectural marvels like the Opera House, and vibrant beach culture. Stroll along Bondi Beach, explore the historic Rocks district, and enjoy world-class dining. From scenic coastal walks to cosmopolitan delights, Sydney offers a unique blend of natural beauty and urban sophistication.'
        }

    ],
      homeoutrotitle: 'Ready to Take off? We’ll Get You Flying',
      homeoutrodesc: 'Unlock amazing benefits when you book with us! At WanderFly, we offer exclusive discounts and limited-time offers available only to our users, helping you save more on your travel plans. With flexible options to choose from a wide range of airlines and flight times, you can easily find flights that suit your schedule, whether you’re traveling for business or leisure. Our user-friendly platform ensures a smooth booking process, allowing you to search for and compare flights effortlessly.',   
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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

body, html{
  overflow-x: hidden;
  width: 100%;
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

/* Home page section */
.homepagefirstpage {
  background-color: black;
}

/* Background Image cover */
.homesectionone {
  background-image: linear-gradient(rgba(0, 0, 0, 0.488)), url(../assets/images/home-hero.png);
  background-size: cover;
  background-position: center;
  max-width: 100%;
  max-height: 100vh;
  border: none;
  padding: 0 5%;
}

/* Container for the Slogan */
.introductionhomepage {
  padding: 0 0 0 50px;
  width: 63%;
  height: 100vh;
}

/* Find and book Header */
.homeheaderone {
  padding-top: 22%;
  color: #fff;
  font-size: 70px;
  font-weight: bold;
  width: 91%;
  margin-bottom: 3%;
}

/* Live the trips exploring Description */
.homedescone {
  color: #fff;
  font-size: 30px;
  padding-bottom: 3%;
  width: 90%;
}

/* Book Now Button */
.booknowbutton {
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
  position: absolute;
  left: 20%;
}

.booknowbutton:hover {
  background-color: #00000056;
  transition: 0.5s;
}

.homesecondpageabout {
  padding: 0;
  margin: 0;
}

/* Home Page: About Section */
.aboutpagecontainer {
  background-color: black;
  color: #fff;
  padding: 40px 0 0 0;
  height: 120vh;
}

/* Title of the about section */
.aboutpageintro {
  text-align: center;
  font-size: 56px;
}

/* Description of the about section */
.aboutpagedesc {
  text-align: center;
  font-size: 26px;
}

/* About Image Gallery  */
.gallerycontainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.aboutgallery {
  padding: 25px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 90%;
  margin: 0 20px;
}

.aboutgallery img {
  width: 100%;
  height: auto;
  display: block;
}

/* For the modal design */
.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8); /* Black background with opacity */
  justify-content: center; /* Center the modal content */
  align-items: center; /* Center the modal content */
}

/* Inside the Modal */
.modal-content {
  display: flex; /* Use flexbox to arrange image and text side by side */
  max-width: 95%; /* Limit the maximum width of the modal */
  background-color: rgba(0, 0, 0, 0); /* Optional: Add a background for better visibility */
  overflow: hidden; /* Prevent content overflow */
  color: white; /* Change text color to white for visibility */
}


.modal-image {
  max-width: 70%; /* Adjust the image size */
  height: 70vh; /* Maintain aspect ratio */
}

/* Modal Title and Description*/
.modal-text  {
  padding: 0 0 0 15px;/* top righht bottom left */
  max-width: 100%; /* Adjust the text container size */
}

.modal-text h2{
  padding: 0 0 20px 0;/* top righht bottom left */
  font-size: 45px;
  font-weight: bold;
}

.modal-text p {
  padding: 0 0 20px 0;
  font-size: 20px;
  width: 88%;
}

/* Modal book now buttom */
.booknowaboutbutton{
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
  position: absolute;
  left: 63%;
}

.booknowaboutbutton:hover{
  background-color: #00000056;
  transition: 0.5s;
}


/* Modal button */
.modal-button{
  padding: 30% 0 0 0;
}

/* Modal Close button */
.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}


/* Outro Section of the Home page */
/* Container for Home outo section */
.homeoutro {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 60vh;
  position: relative; /* Set relative positioning for absolute children */
}

/* background image container and this is where you also adjust the darkness of the background*/
.homeoutrosection {
  width: 100%;
  height: auto;
  position: relative; /* Set relative positioning for the image */
}

/* Home outro Image cover */
.homeoutrosection img {
  width: 100%;
  height: auto; /* Make the image fill the section */
  object-fit: cover; /* Ensure the image covers the section without distortion */
}

/* Home Outro Slogran (title, and Description) contianer*/
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

/* Home outro elemets*/
.homeoutrotitle h1{
  font-size: 40px;
  font-weight: bold;
  padding: 60px 50px 10px 0;/* top righht bottom left */
}

.homeoutrodesc {
  width: 76%;
  padding: 0 0 0 22%;
}

.homeoutrodesc p,.homeoutrobutton {
  font-size: 21px;
  padding: 20px 3% 10px 0;
}

/* Home Outro Button */
.booknowoutrobutton{
  position: absolute;
  right: 10%;
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

/* Home Outro Button hover effect */
.booknowoutrobutton:hover{
  background-color: #00000056;
  transition: 0.5s;
}

/* HAMBURGER */
/* Hamburger Menu Styles */
.hamburger {
  display: none; /* Hide by default */
  flex-direction: column;
  cursor: pointer;
}

.hamburger .bar {
  height: 3px;
  width: 25px;
  background-color: #333;
  margin: 4px 0;
}

/* Mobile Menu Styles */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 1000;
  padding: 20px;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
}

.mobile-menu li {
  margin: 20px 0;
}

.mobile-menu a {
  color: white;
  text-decoration: none;
  font-size: 24px;
}

/* Close Button for Mobile Menu */
.close-menu {
  background-color: transparent;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
}









/* MOBILE AND TABLET VIEW */
@media (max-width: 768px) {
  
  .introductionhomepage {
    padding: 20px; 
    width: 100%; 
  }

  .homeheaderone {
    font-size: 40px; 
    margin-bottom: 2%;
  }

  .homedescone {
    font-size: 20px; 
    width: 100%; 
  }

  .booknowbutton {
    padding: 10px 20px; 
    font-size: 16px; 
    position: relative; 
    left: auto; 
    margin: 20px auto; 
    display: block; 
  }

  .aboutpagecontainer {
    height: auto; 
    padding: 20px; 
  }

  .aboutpageintro {
    font-size: 36px; 
  }

  .aboutpagedesc {
    font-size: 20px; 
  }

  .aboutgallery {
    grid-template-columns: repeat(2, 1fr); 
  }

  .modal-image {
    max-width: 100%; 
    height: auto;
  }

  .modal-text h2 {
    font-size: 32px; 
  }

  .modal-text p {
    font-size: 18px; 
  }

  .booknowaboutbutton {
    padding: 8px 20px; 
    font-size: 16px; 
    left: 50%; 
    transform: translateX(-50%); 
  }

  .homeoutro {
    height: auto; 
    padding: 20px; 
  }

  .homeoutrotitle h1 {
    font-size: 30px; 
    padding: 30px 0 10px;
  }

  .homeoutrodesc {
    width: 100%; 
    padding: 0 20px; 
  }

  .booknowoutrobutton {
    padding: 10px 30px; 
    font-size: 16px; 
    right: 5%; 
  }

  
}

@media (max-width: 480px) {
  
  .homeheaderone h1 {
    font-size: 24px;
  }

  .homedescone h2 {
    font-size: 18px; 
  }

  .booknowbutton, .booknowaboutbutton, .booknowoutrobutton {
    width: 100%; 
    padding: 10px; 
    font-size: 16px; 
  }

}

</style>