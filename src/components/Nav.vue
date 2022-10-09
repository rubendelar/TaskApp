<template>
  <div>
    <nav class="navbar navbar-expand-md bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#"
          ><img src="../images/logo.png" alt="" /> TaskApp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-row-reverse"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li> -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Your Account 🔑
              </a>
              <ul class="dropdown-menu">
                <li>
                  <p class="dropdown-item" href="#">
                    {{ name }}
                    <img src="../images/person-workspace.svg" alt="user-logo" />
                  </p>
                </li>

                <li>
                  <a class="dropdown-item" href="#"
                    ><a @click="logOut" href="/auth/login"
                      >Log out
                      <img src="../images/box-arrow-left.svg" alt="" /></a
                  ></a>
                </li>
                <!-- <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li> -->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { ref } from "vue";
//constant to save a variable that will hold the use router method
const userStore = useUserStore();
// constant to save a variable that will get the user from store with a computed function imported from vue
const user = userStore.user;
// constant that calls user email from the useUSerStore
const userEmail = user.email;
// constant that saves the user email and cleans out the @client from the user
const name = userEmail.replace(/@.*$/, "");
// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const logOut = async () => {
  try {
    await userStore.signOut();
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style></style>
