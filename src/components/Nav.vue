<template>
  <div>
    <nav class="navbar navbar-expand-md bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TaskApp</a>
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
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Your Account🔑
              </a>
              <ul class="dropdown-menu">
                <li><p class="dropdown-item" href="#">Welcome (user)</p></li>
                <!-- <li>
                  <img
                    class="dropdown-item"
                    src="../images/user_profile.png"
                    alt="User_profile_photo"
                  />
                </li> -->
                <li>
                  <a class="dropdown-item" href="#"
                    ><a href="/auth/login">Log out</a></a
                  >
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
//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>
