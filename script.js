const taskForm = document.getElementById("task-form");  /// Form1
const openTaskFormBtn = document.getElementById("open-task-form-btn");     /// ADD NEW TASK BTN
const closeTaskFormBtn = document.getElementById("close-task-form-btn");   /// CLOSE FORM BTN
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");   /// ADD FORM  BTN 

const titleInput = document.getElementById("title-input");   /// INPUT TASK 
const dateInput = document.getElementById("date-input");    /// INPUT DATE
const descriptionInput = document.getElementById("description-input");

const confirmCloseDialog = document.getElementById("confirm-close-dialog");  // dialog
const cancelBtn = document.getElementById("cancel-btn") ;  /// cancel (dialog)
const discardBtn = document.getElementById("discard-btn");  /// discard (dialog)


const tasksContainer = document.getElementById("tasks-container");    // output


const taskData  = [];
let currentTask = {};



const addOrUpdateTask = () => {
    
        addOrUpdateTaskBtn.innerText = "Add Task";

    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);  // if element exist it will return his index 
    // returns -1 if results in not found
    
    const taskObj = {

        id: `${titleInput.value.toLowerCase().split(' ').join('-')}-${Date.now()}`,  // Foramting id 
        title : titleInput.value,
        date : dateInput.value,
        description : descriptionInput.value
    
    };

    if (dataArrIndex === -1)
    {
        taskData.unshift(taskObj);
        /// creating the new one
    }
    else 
    {
        taskData[dataArrIndex] = taskObj;
        //// replacing that object with the new one!! 
    }

    updateTaskContainer();
    reset();

}

const updateTaskContainer = () => {

    
    tasksContainer.innerHTML = "";


    taskData.forEach(({id , title, date , description}) => {

    tasksContainer.innerHTML += `
        <div class="task" id="${id}"> 
            <p><strong>Title: </strong>${title}</p>
            <p><strong>Date: </strong>${date}</p>
            <p><strong>Description: </strong>${description}</p>
            <button type="button" class="btn" onclick="editTask(this)" >Edit</button> 
            <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>

        </div>`;

   } );

}



const deleteTask = (buttonEl) => {

    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    /// checking parent ID and LIST element ID

    buttonEl.parentElement.remove(); 
    taskData.splice(dataArrIndex, 1); // removing element from array!!! 
      

}




const editTask = (buttonEl) => {


    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id );


    currentTask = taskData[dataArrIndex];

    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;



    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");





}




const reset = () => {

    titleInput.value  = "";
    dateInput.value = "";
    descriptionInput.value = "";

    taskForm.classList.toggle("hidden");
    currentTask = {};
    /// clearing task after clicking 

}


openTaskFormBtn.addEventListener("click", ()=>{


    reset();



})


closeTaskFormBtn.addEventListener("click", ()=> {

    


    const formInputsContainValues  = titleInput.value || descriptionInput.value || dateInput.value;
    /// check if users entered some value 
    
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

    




    if (formInputsContainValues && formInputValuesUpdated)
    {
        confirmCloseDialog.showModal();
    }
    else
    {
        reset();

    }


    
    cancelBtn.addEventListener("click", ()=> {
        
        confirmCloseDialog.close();

    });

    discardBtn.addEventListener("click", ()=> {


        confirmCloseDialog.close();
        reset()

    })




})


taskForm.addEventListener("submit" , (e)=> {

    e.preventDefault();

    addOrUpdateTask();



})
