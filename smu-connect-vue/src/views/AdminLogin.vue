<template>
    <div class="login-container">
      <div class="login-left">
        <div class="logo-container">
          <img src="@/assets/images/image6.png" alt="SMU MedTech Logo" />
        </div>
  
        <h1 class="login-title">ADMIN LOGIN</h1>
        <p class="login-subtitle">Manage your club with ease</p>
  
        <form class="login-form" @submit.prevent="handleLogin">
          <div class="form-group">
            <input type="text" v-model.trim="username" placeholder="Username" />
          </div>
  
          <div class="form-group">
            <input type="password" v-model="password" placeholder="Password" />
          </div>
  
          <button type="submit" class="login-btn">Sign in as Administrator</button>
        </form>
      </div>
  
      <div class="login-right">
        <img class="full-image" src="@/assets/images/image-10.jpg" alt="SMU Club Management" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminLogin',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        if (this.username === 'Admin@medtech.tn' && this.password === '123') {
          window.location.href = 'Admin-dashboard.html';
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>

  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
  
  body,
  html {
    height: 100%;
    overflow: hidden;
  }
  
  .login-container {
    display: flex;
    width: 100%;
    height: 100vh;
  }
  
  .login-left {
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .login-right {
    flex: 1;
    overflow: hidden;
  }
  
  .full-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .logo-container {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .logo-container img {
    width: 120px;
    height: auto;
  }
  
  .login-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .login-subtitle {
    color: #666;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .login-form {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    width: 100%;
    position: relative;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 2.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #f0f5ff;
    color: #333;
    font-size: 0.9rem;
  }
  
  .form-group svg {
    position: absolute;
    left: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }
  
  .login-btn {
    width: 100%;
    padding: 0.8rem;
    background-color: #0080a0;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    margin-bottom: 1.5rem;
    box-shadow: 0 6px 0 #00617a, 0 8px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    transition: all 0.1s;
  }
  
  .login-btn:hover {
    background-color: #00617a;
  }
  
  .login-btn:active {
    top: 4px;
    box-shadow: 0 2px 0 #00617a, 0 3px 6px rgba(0, 0, 0, 0.2);
  }
  </style>
  