<template>
  <h1>Organize Everything</h1>
  <p v-if="errorMsg" class="">
    {{ errorMsg }}
  </p>

  <div class="container">
    <div class="container-lg">
      <div class="login">
        <h2 class="title">Task App</h2>
        <form @submit.prevent="signIn">
          <!-- <h2>Enter your Email:</h2> -->
          <input type="email" placeholder="Email" v-model="email" id="email" />

          <!-- <h2>Enter your Password:</h2> -->
          <input
            type="passwordFieldType"
            placeholder="Password"
            v-model="password"
            id="password"
          />
          <!-- <span class="">
            <EyeIcon
              :class="[passwordFieldIcon]"
              @click.prevent="hidePassword = !hidePassword"
            />
          </span> -->

          <button class="acces"><a href="#">Sign in</a></button>
          <div class="registration">
            <p>
              Don't you have an account?
              <PersonalRouter
                :route="route"
                :buttonText="buttonText"
                class="text-decoration-none fw-bold text-center"
              />
            </p>
          </div>
        </form>
      </div>

      <div class="login-nt">
        <h4 class="title">
          or
          <hr />
        </h4>
        <div class="icons d-grid gap-3">
          <a
            class="btn btn-primary"
            style="background-color: #55acee"
            href="#!"
            role="button"
            ><i class="fab fa-twitter me-2 bi bi-twitter"></i>Continue with
            Twitter
          </a>

          <a
            class="btn btn-primary"
            style="background-color: #dd4b39"
            href="#!"
            role="button"
            ><i class="fab fa-google me-2 bi bi-google"></i>Continue with
            Google</a
          >

          <a
            class="btn btn-primary"
            style="background-color: #3b5998"
            href="#!"
            role="button"
            ><i class="fab fa-facebook me-2 bi bi-facebook"></i>Continue with
            Facebook
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <form @submit.prevent="signIn">
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
    <div class="mb-4">
      <label class="" for="">Password</label>

      <div class="">
        <input
          class=""
          :type="passwordFieldType"
          onpaste="return false"
          placeholder="************"
          v-model="password"
          id="password"
        />
        <span class="">
          <EyeIcon
            :class="[passwordFieldIcon]"
            @click.prevent="hidePassword = !hidePassword"
          />
        </span>
      </div>
    </div>

    <button class="" type="submit">Sign In</button>
    <p class="">
      <span class="">Don’t have an account? </span>

      <PersonalRouter :route="route" :buttonText="buttonText" />
    </p>
  </form> -->

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useLink, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Sign up";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

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
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style scoped>
@import url("https://css.gg/instagram.css");

* {
  padding: 0;
  margin: 0;
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
  margin: 20px auto;
}

.container-lg {
  display: flex;
  width: 700px;
  height: auto;
  background-color: transparent;
}

.login {
  width: 500px;
  height: 500px;
  background-color: white;
  color: black;
  box-sizing: border-box;
  padding: 30px 40px;
  border: #d5d5d7 1px solid;
  border-right: none;
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
    border-bottom-left-radius: 20%;
  }
}

.login .title {
  margin-top: 15px;
  padding: 0 0 30px 0;
  text-align: center;
  font-style: oblique;
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

.login button {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: none;
  outline: none;
  color: black;
  background-color: rgb(93, 147, 160);
  font-size: 16px;
  border-radius: 25px;
}

.login button a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.login .acces:hover {
  background-color: rgb(33, 182, 219, 0.5);
  text-decoration: none;
  cursor: pointer;
}

.login a {
  display: block;
  text-decoration: none;
  font-size: 16px;
  margin: 10px 0 0 0;
}

.login a:hover {
  color: black;
}

.registration {
  display: flex;
  justify-content: center;
  width: 100%;
}

hr {
  display: none;
}

.login-nt {
  width: 500px;
  height: 500px;
  background-color: white;
  color: black;
  box-sizing: border-box;
  padding: 50px 40px;
  border: #d5d5d7 1px solid;
  border-left: none;
  /* border-radius: 10px; */
  animation-name: border2;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes border2 {
  0% {
    border-radius: 0%;
  }
  100% {
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
  }
}

.login-nt .title {
  margin-top: 15px;
  padding: 0 0 30px 0;
  text-align: center;
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
    height: 270px;
    background-color: white;
    color: black;
    box-sizing: border-box;
    padding: 10px 15px;
    border: #d5d5d7 1px solid;
    border-bottom: none;
    border-radius: 0px;
    animation-name: border;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  hr {
    display: block;
  }

  .login-nt {
    min-width: 200px;
    width: 100%;
    height: 300px;
    background-color: white;
    color: black;
    box-sizing: border-box;
    padding: 60px 10px;
    border: #d5d5d7 1px solid;
    border-top: none;
    border-radius: 0px;
    animation-name: border2;
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
    }
  }

  @keyframes border2 {
    0% {
      border-radius: 0%;
    }
    100% {
      border-top-right-radius: 0%;
      border-bottom-right-radius: 20%;
      border-bottom-left-radius: 20%;
    }
  }
}
</style>
