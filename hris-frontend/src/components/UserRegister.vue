<template>
  <div class="register-container">
    <div class="form-container">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="username" placeholder="Username" class="input-field" />
        <input type="password" v-model="password" placeholder="Password" clsass="input-field" />
        <button type="submit" class="submit-button">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        const data = await response.json();
        if (data.success) {
          alert('Registration successful!');
        } else {
          alert(data.message || 'Registration failed!');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  color: #000;
}

.form-container {
  background: #42b983;
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

h2 {
  color: #fff;
}

.input-field {
  width: 69%;
  padding: 1em;
  margin: 0.5em 0;
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
}

.submit-button {
  width: 50%;
  padding: 1em;
  margin-top: 1em;
  background-color: #fff;
  color: #42b983;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #e0e0e0;
}
</style>
