<template>
    <v-app>
        <body>
  <div class="container">

    <!-- Recent Activity -->
    <div class="card">
      <h2>Recent Activity</h2>
      <div class="activity-item">
        <span class="icon">👤</span>
        <span>Asma Aouiti joined the Lions club</span>
      </div>
      <div class="activity-item">
        <span class="icon">📅</span>
        <span>Meetup was created</span>
      </div>
      <div class="activity-item">
        <span class="icon">👤</span>
        <span>Zainab joined IAS club</span>
      </div>
      <div class="activity-item">
        <span class="icon">📅</span>
        <span>Hackathon 13 September</span>
      </div>
      <a href="#" class="link">View all activity</a>
    </div>

    <!-- Upcoming Events -->
    <div class="card">
      <h2>Upcoming Events</h2>
      <div class="event-item">
        <span class="icon">👤</span>
        <span>Club fair - Tomorrow, 10:00 am</span>
      </div>
      <div class="event-item">
        <span class="icon">📅</span>
        <span>Hackathon - 15 May, 14:20 pm</span>
      </div>
      <div class="event-item">
        <span class="icon">👤</span>
        <span>TEDX - 18 May, 12:00 pm</span>
      </div>
      <div class="event-item">
        <span class="icon">📅</span>
        <span>Compile Compact - 5 September, 6:00 pm</span>
      </div>
      <a href="#" class="link">View all activity</a>
    </div>

  </div>
</body>
      <v-container>
        <v-card v-for="club in clubs" :key="club.id">
          <v-card-title>{{ club.name }}</v-card-title>
        </v-card>
      </v-container>
    </v-app>
  </template>
  
  <script>
  
  </script>