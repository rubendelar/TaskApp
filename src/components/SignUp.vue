<template>
  <div class="container bg-light bg-gradient">
    <div class="container-lg">
      <div class="login">
        <h2 class="title text-dark">
          Sign Up <br>
          <img class="mt-3" src="../images/logo.png" alt="" /> 
        </h2>
        <form @submit.prevent="signUp">
          <!-- <h2>Enter your Email:</h2> -->
          <input
            class="shadow"
            type="email"
            placeholder="Email"
            v-model="email"
            id="email"
          />

          <!-- <h2>Enter your Password:</h2> -->

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
            id="password"
            required="true"
            aria-label="confirmPassword"
          />

          <!-- <div class="input-group-append">
                <span class="input-group-text">
                  <a href="#" class="toggle_hide_password">
                    <i class="fas fa-eye-slash" aria-hidden="true"></i>
                  </a>
                </span>
              </div> -->

          <!-- <span class="">
            <EyeIcon
              :class="[passwordFieldIcon]"
              @click.prevent="hidePassword = !hidePassword"
            />
          </span> -->

          <!-- <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="dropdownCheck"
            />
            <label class="form-check-label" for="dropdownCheck">
              Remember me
            </label>
          </div> -->

          <button
            class="btn btn-m bg-primary text-white"
            @click.prevent="signUp"
          >
            Sign Up
          </button>
          <div class="registration text-center">
            <p>
              Have an account?
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

  <!-- <div>
    <div>Sign Up</div>
    <PersonalRouter :route="route" :buttonText="buttonText" />
    <p>Good Music, Patience and a lot effort</p>
    <p>Keep calm and code on!</p>

    <form @submit.prevent="signUp">
      <div class="">
        <label class="" for="">Email</label>
        <input
          class=""
          type="email"
          placeholder="dave@wuTangfinancial.com"
          v-model="email"
          id="email"
        />
      </div>
      <div class="">
        <label class="" for="">Password</label>
        <input
          class=""
          type="password"
          placeholder="************"
          v-model="password"
          id="password"
        />
      </div>
      <div class="">
        <label class="" for="">Confirm Password</label>
        <input
          class=""
          type="password"
          placeholder="************"
          v-model="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <button class="" type="submit">Sign Up</button>
      <p class="">
        <span class="">Have an account? </span>
      </p>
    </form>
  </div> -->
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
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
      // if (error) throw error;
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
  font-family: "Roboto", sans-serif;
  /* background-color: rgba(138, 138, 138, 0.472); */
}

h1 {
  text-align: center;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.container-lg {
  display: flex;
  width: 400px;
  height: auto;
  background-color: transparent;
}

.login {
  width: 350px;
  height: 500px;
  background-color: white;
  color: black;
  box-sizing: border-box;
  padding: 30px 40px;
  border: #d5d5d7 1px solid;

  /* border-radius: 10px; */
  animation-name: border;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
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
}

.login h2 {
  margin: 0;
  padding: 0;
  font-weight: normal;
  display: block;
}

.login input {
  width: 100%;
  height: 50px;
  margin: 10px 0px;
  border: grey 1px solid;
  border-radius: 10px;
  box-shadow: inset;
  font-size: 16px;
  padding-left: 10px;
}
.input {
  width: 100%;
  height: 50px;
  margin: 10px 0px;
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

@media screen and (max-width: 767px) {
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

  .login {
    min-width: 200px;
    width: 100%;
    height: 500px;
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
