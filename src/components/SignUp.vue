<template>
  <div class="container1 bg-light bg-gradient">
    <div class="container-lg">
      <div class="description">
        
        <div class="title d-inline-flex justify-content-around align-items-center">
        <h1> <span class="text-primary"> TaskApp</span>  </h1> <img class=" mt-3" src="../images/logo.png" alt="" /> </div>
       <br> <h2 class="text-secondary">Register on TaskApp and start organizing.</h2>
      </div>
      <div class="login shadow-lg">
        <h2 class="title text-primary">
          Sign Up <br>
          <img class="mt-3" src="../images/logo.png" alt="" /> 
        </h2>
        <form @submit.prevent="signUp">
          <input
            class="shadow"
            type="email"
            placeholder="Email"
            v-model="email"
            id="email"
          />
          <input
            class="shadow input"
            type="password"
            placeholder="Password"
            v-model="password"
            id="password"
            required="true"
            aria-label="password"
          />
          <input
            class="shadow input"
            type="password"
            placeholder="Confirm Password"
            v-model="confirmPassword"
            id="confirmPassword"
            required="true"
            aria-label="confirmPassword"
          /> <p v-if="errorMsg" class="text-danger">
    {{ errorMsg }}
  </p>
          <button
            class="btn btn-m bg-primary text-white"
            @click.prevent="signUp"
          >
            Sign Up
          </button>
          <div class="registration text-center">
            <p>
              Have an account? <br>
              <PersonalRouter
                :route="route"
                :buttonText="buttonText"
                class="text-decoration-none fw-bold"
              />
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer2 />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import Footer2 from "./Footer2.vue";
// Route Variables
const route = "/auth/login";
const buttonText = "Sign In";
// Input Fields
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);
// Error Message
// Show hide password variable
// Show hide confrimPassword variable
// Router to push user once SignedUp to Log In
const redirect = useRouter();
// function to SignUp user to supaBase with a timeOut() method for showing the error
async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Passwords do not match";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

h1 {
  text-align: center;
}

.container1 {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-lg {
  display: flex;
  width: 100%;
  background-color: transparent;
}

.login {
  width: 500px;
  height: 400px;
  background-color: white;
  color: black;
  box-sizing: border-box;
  padding: 30px 40px;
  border: #d5d5d7 1px solid;
  animation-name: border;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  box-shadow: inset;
}

@keyframes border {
  0% {
    border-radius: 0%;
  }
  100% {
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
  }
}

.login .title {
  margin-top: 15px;
  padding: 0 0 30px 0;
  text-align: center;
  font-weight: bold;
  display: none;
}

.login input {
  width: 100%;
  height: 50px;
  margin: 15px 0px;
  border: grey 1px solid;
  border-radius: 10px;
  box-shadow: inset;
  font-size: 16px;
  padding-left: 10px;
}


.login button {
  width: 100%;
  margin: 10px 0;
  border-radius: 25px;
}

.registration {
  display: flex;
  justify-content: center;
  width: 100%;
}

.description{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px 60px;
}

@media screen and (max-width: 767px) {
  .description {
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  align-items:center;
  margin-bottom: 50px;
  }
  .container {
    min-width: 200px;
  }
  .container-lg {
    display: flex;
    width: 320px;
    height: auto;
    background-color: transparent;
    display: table-column;
  }

  .login .title {
  margin-top: 15px;
  padding: 0 0 30px 0;
  text-align: center;
  font-weight: bold;
  display: none;
}

  .login {
    min-width: 200px;
    width: 100%;
    height: 400px;
    background-color: white;
    color: black;
    box-sizing: border-box;
    padding: 30px 40px;
    border: #d5d5d7 1px solid;
    animation-name: border;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
}
</style>
