<template>
    <v-app>
      <!-- App Bar (Navbar) -->
      <v-app-bar app color="primary" dark>
        <v-avatar class="mr-3" color="white">
          <v-icon color="primary">mdi-account-group</v-icon>
        </v-avatar>
        <v-toolbar-title>Campus Club Management</v-toolbar-title>
      </v-app-bar>
  
      <!-- Main Content -->
      <v-main>
        <v-container>
          <!-- Welcome Section -->
          <v-row class="mb-6">
            <v-col cols="12">
              <h2 class="text-h4 font-weight-bold">{{ welcomeMessage }}</h2>
              <p class="text-subtitle-1 text--secondary">Here's what's happening with your club today</p>
            </v-col>
          </v-row>
  
          <!-- Stats Cards -->
          <v-row>
            <v-col v-for="stat in stats" :key="stat.title" cols="12" md="4">
              <v-card>
                <v-card-text class="d-flex align-center">
                  <v-avatar :color="stat.color + ' lighten-5'" size="56" class="mr-4">
                    <v-icon :color="stat.color">{{ stat.icon }}</v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-1 text--secondary">{{ stat.title }}</div>
                    <div class="text-h4 font-weight-bold">{{ stat.value }}</div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
  
          <!-- Activity and Events Section -->
          <v-row class="mt-6">
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title>Recent Activity</v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item v-for="(activity, i) in activities" :key="i">
                      <v-list-item-icon>
                        <v-icon>{{ activity.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{ activity.text }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <v-btn text color="primary" block>View all activity</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title>Upcoming Events</v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item v-for="(event, i) in events" :key="i">
                      <v-list-item-icon>
                        <v-icon>{{ event.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{ event.text }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <v-btn text color="primary" block>View all events</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
    data() {
      return {
        username: 'Admin',
        stats: [
          { title: 'Total Members', value: '124', icon: 'mdi-account-group', color: 'orange' },
          { title: 'Upcoming Events', value: '8', icon: 'mdi-calendar', color: 'blue' },
          { title: 'Active Competitions', value: '3', icon: 'mdi-trophy', color: 'yellow darken-2' }
        ],
        activities: [
          { icon: 'mdi-account', text: 'Asma Aouiti joined the Lions club' },
          { icon: 'mdi-calendar-plus', text: 'Meetup was created' },
          { icon: 'mdi-account', text: 'Zainab joined IAS club' },
          { icon: 'mdi-calendar', text: 'Hackathon 13 September' }
        ],
        events: [
          { icon: 'mdi-account-group', text: 'Club fair - Tomorrow, 10:00 am' },
          { icon: 'mdi-calendar', text: 'Hackathon - 15 May, 14:20 pm' },
          { icon: 'mdi-account-group', text: 'TEDX - 18 May, 12:00 pm' },
          { icon: 'mdi-calendar', text: 'Compile Compact - 5 September, 6:00 pm' }
        ]
      }
    },
    computed: {
      welcomeMessage() {
        return `Welcome back, ${this.username}`
      }
    },
    mounted() {
    
      const params = new URLSearchParams(window.location.search)
      const urlUsername = params.get('username')
      const storedUsername = localStorage.getItem('username')
      
      if (urlUsername) {
        this.username = urlUsername
        localStorage.setItem('username', urlUsername)
      } else if (storedUsername) {
        this.username = storedUsername
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>