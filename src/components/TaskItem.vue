<template>
  <br /><br />
  <div class="card">
    <div class="card-header">Created:  {{ task.time.slice(0,10) }}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p> <b></b> {{ task.title }}</p>
        <footer class="blockquote-footer">
          {{ task.description }}
        </footer>
      </blockquote>
      <a href="#" @click.prevent="checkTask" class="btn"> {{check ? "✔️" : "🧭"}} </a>
      <a href="#" @click.prevent="showform" class="btn">✏️</a>
      <a href="#" @click.prevent="removeTask" class="btn">❌</a>
    </div>
  </div>

  <div v-if="edition"  class="">
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
      <button type="button" class="btn btn-warning btn-lg btn-floating">
        <i class="fas fa-gem"></i>
      </button>
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
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
      <button type="button" class="btn btn-warning btn-lg btn-floating">
        <i class="fas fa-gem"></i>
      </button>
    </div>
    <br />

    <div class="text-center">
      <button
        type="button"
        class="btn btn-m bg-warning text-black"
        @click.prevent="editTask"
      >
      ✏️<!-- <img src="../images/check2-square.svg" alt="" /> -->
        Edit task
      </button>
    </div>
  </div>


</template>

<script setup>

import { ref } from "vue";



const props = defineProps(["task"]);
const emit = defineEmits(["emitRemove", "emitCheck", "emitEdit"]);


//const for the Edit task
const edition = ref(false);
const showform =() => {
  edition.value = !edition.value;
}


const title = ref(props.task.title);
const description = ref(props.task.description);

const editTask = () => {
  emit(
    "emitEdit",
    props.task.id,
    title.value,
    description.value,
  );
};

//const for the Check task
const check = ref(props.task.is_complete);

const checkTask = () => {
  emit(
  "emitCheck", 
  props.task.id,
  check.value);
};

//const for the Delete task

const removeTask = () => {
      emit(
      "emitRemove", 
      props.task.id);
    };




  

// const title = ref("");
// const description = ref("");

// const emit = defineEmits([
//   ENTER-EMITS-HERE
// ])

// const props = defineProps(["ENTER-PROP-HERE"]);
</script>

<style></style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
