const taskForm = document.getElementById("task-form");  /// Form1
const openTaskFormBtn = document.getElementById("open-task-form-btn");     /// ADD NEW TASK BTN
const closeTaskFormBtn = document.getElementById("close-task-form-btn");   /// CLOSE FORM BTN
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn")   /// ADD FORM  BTN 
const titleInput = document.getElementById("title-input")   /// INPUT TASK 

const confirmCloseDialog = document.getElementById("confirm-close-dialog");  // dialog
const cancelBtn = document.getElementById("cancel-btn")   /// cancel (dialog)
const discardBtn = document.getElementById("discard-btn");  /// discard (dialog)


const tasksContainer = document.getElementById("tasks-container");    // output