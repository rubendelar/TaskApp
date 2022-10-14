<template>
  
  <br> 
  <br>
  <br>
  <div class="sticky2">
  <div class="mt-5 pt-3">
    <h2 class="text-center font-monospace text-secondary">Stay Organized</h2>
    <br>
  </div>
  <div class="text-center">
    <button @click.prevent="toggleText" class="btn btn-m btn-block border-primary border border-2 text-primary fw-bold w-50 ">
      Create Task
    </button>
  </div>
  
  <div  class=" w-100 pt-3 pb-4 d-inline-flex justify-content-center border-bottom  border-2 ">
    <button @click.prevent="filterTask('complete')" class=" btn  btn-sm mx-2">✔️</button> <button @click.prevent="filterTask('all')" class="btn btn-sm   mx-2">📖</button>  <button @click.prevent="filterTask('inProcess')" class="  btn-sm btn mx-2">🧭</button>
  </div> 
</div>

   <div id="show" class="sticky">
  
  <div class="mx-5 mt-5">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <img src="../images/card-heading.svg" alt="task-title" />
        </div>
      </div>
      <input
        v-model="title"
        placeholder="Task's title"
        type="text"
        class="form-control shadow"
        aria-label="Text input with checkbox"
      />
      <button type="button" class="btn btn-primary btn-lg btn-floating">
        <i class="fas fa-gem"></i>
      </button>
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text input-description">
          <img src="../images/card-text.svg" alt="task-description" />
        </div>
      </div>
      <input
        v-model="description"
        placeholder="Task's description"
        type="text"
        class="form-control shadow"
        aria-label="Text input with radio button"
      />
      <button type="button" class="btn btn-primary btn-lg btn-floating">
        <i class="fas fa-gem"></i>
      </button>
    </div>
    <br />
    <div class="text-center">
      <button
        type="button"
        class="btn btn-m btn-block bg-primary text-white mx-2  "
        @click.prevent="newTask"
      >
        <img src="../images/check2-square.svg" alt="" />
        Create task
      </button>

      <button @click.prevent="toggleText" class="btn btn-m btn-block border-primary border border-2 text-primary mx-2 ">
      Hide Creator
    </button>
    </div>
    
  </div>
   
</div>

</template>

<script setup>
import { ref } from "vue";


// constant to save a variable that define the custom event that will be emitted to the homeView
const emit = defineEmits(["saveNewTask", "filterTask"]);
// constant to save a variable that holds the value of the title input field of the new task
let title = ref("");

// constant to save a variable that holds the value of the description input field of the new task
let description = ref("");

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const errorValue = ref(false);

// const constant to save a variable that holds the value of the error message
const errorMessage = ref("");

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
const newTask = () => {
  if (title.value === "") {
    errorValue.value = true;
    errorMessage.value = "Task title is required.";
    setTimeout(() => {
      errorValue.value = false;
    }, 3000);
    return errorMessage;
  } else {
    const newTask = {
      title: title.value,
      description: description.value,
    };
    emit("saveNewTask", newTask);
    title.value = "";
    description.value = "";
  }
};

const filterTask = (string) => {
  emit(
  "filterTask", 
  string);
};

const toggleText = () => {
  var x = document.getElementById("show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

</script>

<style scoped>
.sticky {
position: sticky;
top:240px;
z-index: 1;
background-color: white;
}

.sticky2 {
position: sticky;
top:60px;
z-index: 1;
background-color: white;
}




</style>
