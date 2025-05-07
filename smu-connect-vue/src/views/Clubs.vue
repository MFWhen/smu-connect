<template>
    <v-app>
      <!-- Navigation Drawer (Sidebar) -->
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense nav>
          <v-list-item
            v-for="item in sidebarItems"
            :key="item.title"
            link
            :class="{ 'active-sidebar-item': item.active }"
            @click="setActiveItem(item)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <!-- App Bar -->
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>SMU Club Management</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-text-field
          solo-inverted
          flat
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="search-bar"
          dark
        ></v-text-field>
        
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>{{ username }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
  
      <!-- Main Content -->
      <v-main>
        <v-container fluid>
          <!-- Welcome Section -->
          <v-row>
            <v-col cols="12">
              <h1 class="text-h4 font-weight-bold">Welcome back, {{ username }}!</h1>
              <p class="text-subtitle-1 text--secondary">Stay connected with your clubs and upcoming events</p>
            </v-col>
          </v-row>
  
          <!-- My Clubs Section -->
          <v-row>
            <v-col cols="12">
              <div class="d-flex justify-space-between align-center mb-4">
                <h2 class="text-h5 font-weight-bold">My Clubs</h2>
                <v-btn text color="primary" to="/explore-clubs">Explore More Clubs</v-btn>
              </div>
              
              <v-row>
                <v-col
                  v-for="club in clubs"
                  :key="club.name"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card class="club-card">
                    <v-card-text class="text-center">
                      <v-avatar size="80" class="mb-4">
                        <v-img :src="club.logo" :alt="club.name + ' Logo'"></v-img>
                      </v-avatar>
                      <h3 class="text-h6 mb-4">{{ club.name }}</h3>
                      <v-btn
                        :color="club.applicationsClosed ? 'grey lighten-1' : 'primary'"
                        :disabled="club.applicationsClosed"
                        @click="joinClub(club)"
                        block
                      >
                        {{ club.applicationsClosed ? 'Applications Closed' : 'Join Club' }}
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
  
          <!-- Upcoming Events Section -->
          <v-row class="mt-8">
            <v-col cols="12">
              <div class="d-flex justify-space-between align-center mb-4">
                <h2 class="text-h5 font-weight-bold">Upcoming Events</h2>
                <v-btn text color="primary" to="/explore-events">Explore More Events</v-btn>
              </div>
              
              <v-row>
                <v-col
                  v-for="event in events"
                  :key="event.title"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-card class="event-card">
                    <v-card-title class="event-header">
                      <div>
                        <h3 class="text-subtitle-1 font-weight-bold">{{ event.title }}</h3>
                        <div class="text-caption">{{ event.organizer }}</div>
                      </div>
                    </v-card-title>
                    <v-card-text class="event-details">
                      <div class="d-flex align-center mb-2">
                        <v-icon small class="mr-2">mdi-calendar</v-icon>
                        <span>{{ event.date }}</span>
                      </div>
                      <div class="d-flex align-center">
                        <v-icon small class="mr-2">mdi-map-marker</v-icon>
                        <span>{{ event.location }}</span>
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" block @click="rsvpToEvent(event)">RSVP</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'ClubsPage',
    data() {
      return {
        drawer: null,
        username: 'John.Doe',
        sidebarItems: [
          { title: 'Dashboard', icon: 'mdi-home', active: false },
          { title: 'Explore Clubs', icon: 'mdi-magnify', active: true },
          { title: 'My Profile', icon: 'mdi-account', active: false }
        ],
        clubs: [
          {
            name: 'IEEE Robotics and Automation Society',
            logo: 'https://via.placeholder.com/80?text=IEEE+RAS',
            applicationsClosed: false
          },
          {
            name: 'Google Developer Club',
            logo: 'https://via.placeholder.com/80?text=GDG',
            applicationsClosed: false
          },
          {
            name: 'IEEE Computer Society',
            logo: 'https://via.placeholder.com/80?text=IEEE+CS',
            applicationsClosed: false
          },
          {
            name: 'Lions Club',
            logo: 'https://via.placeholder.com/80?text=Lions',
            applicationsClosed: true
          }
        ],
        events: [
          {
            title: 'IEEE Workshop: Intro to 3D printing',
            organizer: 'IEEE Student Branch',
            date: 'Tomorrow, 4:00 PM',
            location: 'Block B, Room E-100'
          },
          {
            title: 'GDG Workshop: Flutter Basics',
            organizer: 'Google Developer Club',
            date: 'May 15, 2:00 PM',
            location: 'Block A, Room C-205'
          },
          {
            title: 'Lions Club Charity Event',
            organizer: 'Lions Club',
            date: 'May 18, 12:00 PM',
            location: 'Main Auditorium'
          }
        ]
      }
    },
    methods: {
      setActiveItem(item) {
        this.sidebarItems.forEach(i => (i.active = false))
        item.active = true
     
      },
      joinClub(club) {
        console.log(`Joining club: ${club.name}`)
       
      },
      rsvpToEvent(event) {
        console.log(`RSVP to event: ${event.title}`)
        
      }
    }
  }
  </script>
  
  <style scoped>
  
  .active-sidebar-item {
    background-color: #e6f2ff;
    font-weight: 500;
  }
  

  .club-card {
    transition: transform 0.3s;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .club-card:hover {
    transform: translateY(-5px);
  }
  

  .event-card {
    transition: transform 0.3s;
    height: 100%;
  }
  
  .event-card:hover {
    transform: translateY(-5px);
  }
  
  .event-header {
    background-color: #f5f5f5;
    border-bottom: 1px solid #eee;
  }
  
  .search-bar {
    max-width: 300px;
    margin-right: 16px;
  }
  

  @media (max-width: 960px) {
    .search-bar {
      max-width: 200px;
    }
  }
  
  @media (max-width: 600px) {
    .search-bar {
      display: none;
    }
  }
  </style>