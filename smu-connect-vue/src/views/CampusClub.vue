<template>
    <div>
      <header>
        <div class="logo-container">
          <img src="" alt="Hero Image" />
          <div class="logo-text"></div>
        </div>
        <nav>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Clubs</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Memberships</a></li>
            <li class="dropdown">
              <a href="#" class="dropbtn">Login</a>
              <div class="dropdown-content">
                <router-link to="/member-login">Member</router-link>
                <router-link to="/admin/login">Admin</router-link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
  
      <section class="hero">
        <img src="" alt="Hero Image" />
        <div class="hero-content">
          <h1>Campus Club Management</h1>
          <button class="join-btn">Join a Club</button>
        </div>
      </section>
  
      <section class="about-section">
        <div class="about-image">
          <img src="" alt="People Image" />
        </div>
        <div class="about-content">
          <h2>Get Involved, Grow, and Connect!</h2>
          <p>
            Activities and knowledge acquisition outside the class are very much essential in students' development...
            <!-- Keep the rest of the paragraph as-is -->
          </p>
        </div>
      </section>
  
      <section class="clubs-section">
        <h2>OUR CLUBS</h2>
        <div class="clubs-container">
          <div class="club-card" v-for="club in clubs" :key="club.name">
            <div class="club-logo">
              <img :src="club.image" :alt="club.name + ' logo'" />
            </div>
            <div class="club-info">
              <h3>{{ club.name }}</h3>
              <p>{{ club.description }}</p>
              <router-link to="#" class="read-more">Read More</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CampusClub',
    data() {
      return {
        clubs: [
          {
            name: 'IEEE',
            image: require('C:/Users/hyper/OneDrive/Desktop/ISS296/smu-connect-(html)/smu-connect/smu-connect-vue/src/assets/ieeelogo.png'),
            description:
              'The Institute of Electrical and Electronics Engineers (IEEE)...',
          },
          {
            name: 'Enactus',
            image: require('C:/Users/hyper/OneDrive/Desktop/ISS296/smu-connect-(html)/smu-connect/smu-connect-vue/src/assets/thumb__700_400_0_0_auto.png'),
            description:
              'Enactus is an entrepreneurship society founded to create...',
          },
          {
            name: 'Lions Club SMU',
            image: require('C:/Users/hyper/OneDrive/Desktop/ISS296/smu-connect-(html)/smu-connect/smu-connect-vue/src/assets/Lions_Clubs_International_logo.svg.png'),
            description:
              'Founded in 1917, Lions Club is a place where individuals join...',
          },
        ],
      };
    },
  };
  </script>
  
  
  