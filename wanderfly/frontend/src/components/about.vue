<template>
  <div class="about">
      <!-- About Page: Section one containing the Slogan and background image of the About page -->
      <section class="about_page_section">
          <div class="about_section_one">
              <div class="introduction_about_page">
                  <div class="about_header_one">
                      <h1>{{ about_head }}</h1>
                  </div>
                  <div class="about_desc_one">
                      <h1>{{ about_desc }}</h1>
                  </div>
                  <button class="read_more_button">Read More</button>
              </div>
          </div>
      </section>

      <!-- About us container for the title and description -->
      <section class="about_us_section">
        <div class="about_us_title_container">
          <div class="about_us_header">
            <div class="about_us_title">
              <h1>{{ about_us_title }}</h1>
            </div>
            <div class="about_us_desc">
              <p>{{ about_us_desc }}</p>
            </div>
        </div>

          <!-- About us how container that holds the image and the right description -->
          <!-- This holds the image on the right -->
          <div class="about_us_how_container">
            <div class="image_container">
              <img :src="images[0].src">
            </div>

            <!-- While this holds the right container-->
            <div class="how_right_container">
              <!-- This holds the title for the right container-->
              <div class="title_how">
                <h2>{{ images[0].title }}</h2>
              </div>
              <!-- This holds the description for the right container-->
              <div class="how_desc">
                <p>{{ images[0].description }}</p>
              </div>
              <router-link to="/booking"><button class="book_now_about">Book Now</button></router-link>
            </div>
          </div>
        </div>
      </section>

      <section class="travel-with-us">
        <div class="travel-with-us-header">
          <div class="travel_title">
            <h1>{{ why_title }}</h1>
          </div>
          <div class="travel_desc">
            <p>{{ why_desc }}</p>
          </div>
        </div>

        <div class="about-us-grid">
          <div class="grid-1">
            <div class="grid-img">
              <img :src="images[1].src" alt="">
            </div>

            <div class="blank-space">
              <img :src="images[4].src" alt="">
              <div class="blank-space-desc">
                <h2>{{ images[4].title }}</h2>
                    <p>{{ images[4].description }}</p>
              </div>
            </div>

            <div class="grid-img">
              <img :src="images[2].src" alt="">
            </div>
        </div>

        <div class="grid-2">
          <div class="blank-space">
            <img :src="images[5].src" alt="">
            <div class="blank-space-desc">
              <h2>{{ images[5].title }}</h2>
                  <p>{{ images[5].description }}</p>
            </div>
          </div>

          <div class="grid-img">
            <img :src="images[3].src" alt="">
          </div>

          <div class="blank-space">
            <img :src="images[6].src" alt="">
            <div class="blank-space-desc">
              <h2>{{ images[6].title }}</h2>
                  <p>{{ images[6].description }}</p>
            </div>
          </div>
        </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
        about_head: 'Connecting You to the World, One Ticket at a Time.',
        about_desc: 'At WanderFly, we believe that every journey begins with a single step—or, in our case, a simple click! Our passion for travel drives us to create a platform that makes flight booking effortless and enjoyable.',
        about_us_title: 'About Us',
        about_us_desc: 'Travel with us and we’ll get you flying.',
        images: [
            { name: 'how cover', src: require('@/assets/images/about-us-img1.png'), alt: 'Cover Image', title: 'How WanderFly Works', description: 'At WanderFly, we believe that every journey begins with a single step—or, in our case, a simple click! Our passion for travel drives us to create a platform that makes flight booking effortless and enjoyable.' },

            { name: 'travel-img1', src: require('@/assets/images/about-travel-img1.png'), alt: 'Travel1 Image'},

            { name: 'travel-img2', src: require('@/assets/images/about-travel-img3.png'), alt: 'Travel3 Image'},

            { name: 'travel-img3', src: require('@/assets/images/about-travel-img2.png'), alt: 'Travel2 Image'},

            { name: 'blank-space1', src: require('@/assets/images/AirplaneTilt.png'), alt: 'Airplane Image', title:'Inspiring Wanderlust', description:'We aim to inspire you to step out of your comfort zone and experience the beauty of the world.'},

            { name: 'blank-space2', src: require('@/assets/images/MapPinLine.png'), alt: 'Map Image', title: 'Customer-Centric', description: 'Your satisfaction is our priority.'},

            { name: 'blank-space3', src: require('@/assets/images/user-icon.png'), alt: 'Person Image', title: 'Beautiful Places', description: 'A touchdown to some of the wonderful places in the world.'}

        ],
        why_title: 'Travel With Us',
        why_desc: "We’ll get you flying.",
    }
  }
}
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

/* About page section */
.about_section_one{
    background-image: linear-gradient(rgba(0, 0, 0, 0.350)), url(../assets/images/about-hero.png);
    background-size: cover;
    background-position: center;
    max-width: 100%;
    max-height: 100vh;
    border: none;
}

.title_how {
  margin-left: 250px;
}
.how_desc {
  margin-left: 250px;
}


.image_container img {
  max-width: 200%;
  height: auto; 
  }


/* Container for the Slogan */
.introduction_about_page {
  text-align: center;
  width: 100%;
  height: 100vh;
}

/* About Page Header */
.about_header_one {
  margin: auto auto 3%;
  padding: 10% 0 0 0;
  color: #fff;
  font-size: 70px;
  font-weight: bold;
  width: 82%;
}

.about_desc_one {
  color: #fff;
  font-size: 30px;
  padding: 0 0 2% 0;
  width: 75%;
  margin: auto;
}

/* Read More Button */
.read_more_button {
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

.read_more_button:hover {
  background-color: #00000056;
  transition: 0.5s;
}

/* About Page: About Us Section  */
.about_us_title_container{
  width: 100%;
  height: 82vh;
  background-color: #000000;
  color: #fff;
}

/* About us Section */
/* Header for the About us This holds the About header for the Second section */
.about_us_header{
  text-align: center;
  padding: 28px 0 40px 0;
}

/* About Us title */
.about_us_title{
  font-size: 70px;
}

/* About us Description */
.about_us_desc {
  font-size: 25px;
  padding: 0;
}

/* About us how container that holds the image and the right side that contains the title and description */
.about_us_how_container{
  display: flex;
  width: 86%;
  margin: auto;
}

/* Holds the tile and description with the button on the right side of th e about us*/
.how_right_container{
  padding: 0 20px 0 40px;
}

.title_how{
  font-size: 74px;
  padding: 0 0 20px 0;
}

.how_desc{
  font-size: 30px;
  padding: 0 0 20px 0;
}

/* Book Now Button */
.book_now_about {
  padding: 10px 40px;
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
  float: right;
}

.book_now_about:hover {
  background-color: #00000056;
  transition: 0.5s;
}

.about-us-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-1, .grid-2 {
  display: contents; /* Allows direct placement of children in the grid */
}

.grid-img img {
  width: 324px;
  height: 270px;
  object-fit: cover;
}

.travel-with-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: none;
  background-color: #000;

}

.travel-with-us-header {
  color: #fff;
  background-color: #000;
  padding: 3%;
  text-align: center;
  padding: 0 0 40px 0;
}
.travel_title h1 {
    font-size: 56px;
    font-weight: bold;
  }

.travel_desc p {
    font-size: 24px; 
  }

.blank-space {
  background-color: #000;
  width: 324px;
  height: 270px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.blank-space img {
  width: 50px; 
  padding: 40px 0 0 0;
}

.blank-space-desc h2 {
  font-size: 26px;
  padding: 5px 0 10px 0;
}

.blank-space-desc p {
  font-size: 18px;
  margin: auto;
  padding: 5px 0 10px 0;
  width: 80%;
}



/* MOBILE AND TABLET VIEW */
/* Tablet view adjustments*/
@media screen and (max-width: 768px) {
  /* Section One: Slogan */
  .about_section_one {
    padding-top: 10%;
    height: 60vh; 
  }

  .about_header_one h1 {
    font-size: 48px; 
  }

  .about_desc_one h1 {
    font-size: 20px; 
    width: 90%; 
  }

  .read_more_button {
    padding: 10px 30px; 
    font-size: 16px; 
  }

  /* About Us Section */
  .about_us_title h1 {
    font-size: 36px;
  }

  .about_us_desc p {
    font-size: 10px; 
  }

  .about_us_how_container {
    flex-direction: column; 
    align-items: center; 
  }

  .image_container img {
    width: 200px;
    height: 200px; 
  }

  .how_right_container {
    max-width: 90%; 
  }

  .title_how h2 {
    font-size: 28px; 
  }

  .how_desc p {
    font-size: 16px;
  }

  .book_now_about {
    padding: 10px 30px; 
    font-size: 16px; 
  }

  
}

/* Mobile view adjustments */
@media screen and (max-width: 480px) {
  /* Section One: Slogan */
  .about_section_one {
    height: 50vh;
  }

  .about_header_one h1 {
    font-size: 36px;
  }

  .about_desc_one h1 {
    font-size: 16px; 
  }

  .read_more_button {
    padding: 8px 24px;
    font-size: 14px;
  }

  /* About Us Section */
  .about_us_title h1 {
    font-size: 28px;
  }

  .about_us_desc p {
    font-size: 16px;
  }

  .about_us_how_container {
    flex-direction: column;
    align-items: center;
  }

  .image_container img {
    width: 100%; 
  }

  .how_right_container {
    max-width: 100%;
  }

  .title_how h2 {
    font-size: 24px;
  }

  .how_desc p {
    font-size: 14px;
  }

  .book_now_about {
    padding: 8px 24px;
    font-size: 14px;
  }

}

</style>