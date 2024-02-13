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



openTaskFormBtn.addEventListener("click", ()=>{


    taskForm.classList.toggle("hidden");



})


closeTaskFormBtn.addEventListener("click", ()=> {

    confirmCloseDialog.showModal();
    
    cancelBtn.addEventListener("click", ()=> {
        
        confirmCloseDialog.close();

    });

    discardBtn.addEventListener("click", ()=> {


        confirmCloseDialog.close();
        taskForm.classList.toggle("hidden");

    })




})


taskForm.addEventListener("submit" , (e)=> {

    e.preventDefault()

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

    }


   //console.log(taskData);


   taskData.forEach(({id , title, date , description}) => {

    tasksContainer.innerHTML += `
        <div class="task" id="${id}"> 
            <p><strong>Title: </strong>${title}</p>
            <p><strong>Date: </strong>${date}</p>
            <p><strong>Description: </strong>${description}</p>
            <button type="button" class="btn">Edit</button> 
            <button type="button" class="btn">Delete</button>

        </div>`;

   } );


   taskForm.classList.toggle("hidden");

})
