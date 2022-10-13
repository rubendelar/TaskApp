  <template>
    <nav class="navbar navbar-light bg-light fixed-top">
    <div class="container-fluid mx-4">
        <a class="navbar-brand fw-bold" href="#"
          ><img src="../images/logo.png" alt="" /> TaskApp
        </a>
    <span class="text-dark text-bold">
      Welcome <span class="fw-bold text-end">{{name}}</span> 
    </span>

    <a @click="logOut" href="/auth/login" class="btn btn-sm bg-primary text-white">
           Log out 🔑
        </a>

    </div>
    </nav>
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