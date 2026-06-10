const avator = document.getElementById("avator");
const name = document.getElementById("name");
const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const task_name = document.getElementById("task-name");
const task_detail = document.getElementById("task-details");
const submit = document.getElementById("submit");
const catogory_selector =  document.getElementById("catogory-selector");
const dificulty_selector = document.getElementById("dificulty-selector");
const preview = document.getElementById("preview");
const next = document.getElementById("next");
const catagory_filter = document.getElementById("catagory-filter");
const task_search = document.getElementById("task-search");
const filter_options = document.getElementById("filter-options");
const load_more = document.getElementById("Load-more");
const task_competed = document.getElementById("task-completed");
const task_pending = document.getElementById("task-pending");
const total_task = document.getElementById("total-task");
const user_name = document.getElementById("user-name");
const user_display_name = document.getElementById("user-display-name");
const avator_login = document.getElementById("avatar-login");
const avator_selection = document.getElementById("avator-selection");
const Login = document.getElementById("login");
const back = document.getElementById("back");



function assign_username(){
    user_display_name.value  = user_name.value;

    next.addEventListener("click",()=>{
        console.log(user_display_name.value);
    });
    
}
