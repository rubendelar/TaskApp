<template>
  <div>
    <br />
    <br />
    <!-- <h1 class="text-center">Keep organized ⌛</h1> -->
    <br />
    <br />
    <h2 class="text-center">Keep it Organized</h2>
  </div>
  <br />
  <div class="mx-4">
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

    
      <button
        type="button"
        class="btn btn-m btn-block bg-primary text-white w-100 "
        @click.prevent="newTask"
      >
        <img src="../images/check2-square.svg" alt="" />
        Create task
      </button>
    
  </div>
</template>

<script setup>
import { ref } from "vue";

// constant to save a variable that define the custom event that will be emitted to the homeView
const emit = defineEmits(["saveNewTask"]);
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
</script>

<style scoped></style>
