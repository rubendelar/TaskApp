<template>
 
  

  <div class="container1 bg-light bg-gradient">
    <div class="container-lg">
      <div class="description">
        <div class="title d-inline-flex justify-content-around align-items-center">
        <h1 class="text-primary">TaskApp  </h1> <img class="mt-3" src="../images/logo.png" alt="" /> </div>
       <br> <h2 class="text-secondary ">TaskApp helps you organize your life.</h2> <br>
       
      </div>
      <div class="login shadow-lg">
        <h2 class="title text-primary">
          TaskApp <br><img class="mt-3" src="../images/logo.png" alt="" />
        </h2>
        <form @submit.prevent="signIn">
         
          <input
            class="shadow"
            type="email"
            placeholder="Email"
            v-model="email"
            id="email"
          />
          
          <input
            class="shadow"
            type="password"
            placeholder="Password"
            v-model="password"
            id="password"
            required="true"
            aria-label="password"
            aria-describedby="basic-addon1"
          />
          <p v-if="errorMsg" class="text-danger text-center">
    {{ errorMsg }}
  </p>
          <button
            class="btn btn-m bg-primary text-white"
            @click.prevent="signIn"
          >
            Sign In
          </button>
          <div class="registration text-center">
            <p>
              Don't you have an account? <br>
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
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useLink, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import Footer2 from "./Footer2.vue";

//close eye password

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Sign up";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
// const passwordFieldType = computed(() =>
//   hidePassword.value ? "password" : "text"
// );
// const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value =  error.message;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
  errorMsg.value = "Invalid Login Credentials";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  /* background-color: rgba(138, 138, 138, 0.472); */
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
  width: 400px;
  height: 350px;
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
    display: none;
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
  display: block;
}

  .login {
    min-width: 200px;
    width: 100%;
    height: 450px;
    background-color: white;
    color: black;
    box-sizing: border-box;
    padding: 10px 15px;
    border: #d5d5d7 1px solid;
    animation-name: border;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

 
}
</style>
