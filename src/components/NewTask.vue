<template>
  <div>
    <br />
    <br />
    <h1 class="text-center">Keep organized ⌛</h1>
    <br />
    <br />
    <h2 class="text-center">Add a new Task</h2>
  </div>
  <br />

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input type="checkbox" aria-label="Checkbox for following text input" />
      </div>
    </div>
    <input
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
      <div class="input-group-text">
        <input
          type="radio"
          aria-label="Radio button for following text input"
        />
      </div>
    </div>
    <input
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
    <button type="button" class="btn btn-lg btn-outline-success">
      ✏️ Create task
    </button>
  </div>
</template>

<script setup>
// constant to save a variable that define the custom event that will be emitted to the homeView

// constant to save a variable that holds the value of the title input field of the new task

// constant to save a variable that holds the value of the description input field of the new task

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty

// const constant to save a variable that holds the value of the error message

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
</script>

<style></style>
