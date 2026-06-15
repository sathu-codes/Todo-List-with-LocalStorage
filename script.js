const avator = document.getElementById("avator");
const name = document.getElementById("name");
const day = document.getElementById("Day");
const tasks = document.getElementById("tasks");
const date = document.getElementById("date");
const month = document.getElementById("month");
const calender = document.getElementById("calender");
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
const next_page = document.getElementById("next-page");
const month_shift_1 = document.getElementById("month-shift-1");
const month_shift_2 = document.getElementById("month-shift-2");

//global variables

let mode = null;

//main page

function main_page(){
    name.textContent = localStorage.getItem("user_name");
    avator.classList = `w-[100px] h-[100px] rounded-[50px] border-2 border-green-400 `;
    avator.src = localStorage.getItem("avator"); 
    avator.src = localStorage.getItem("avator");

    const i = localStorage.getItem("i");
    try {
        for(let a=1 ; a<i ;a++){
            const previous_task=JSON.parse(localStorage.getItem(`task_count${a}`));
            console.log(previous_task);
            task_holder(previous_task);
        }
    }
    catch{
        console.log("no previous task");
    }
    
    task_pending.textContent = Number(localStorage.getItem("task_pending"));
    /*let task_pending_status = 0;
    let task_competed_status = 0;

    localStorage.setItem("task_pending",task_pending_status);
    localStorage.setItem("task_completed",task_competed_status);*/
}

function calander_section(){
    const new_date = new Date();
    //console.log(new_date.toLocaleDateString('en-US',{weekday : "long" }));
    day.textContent =new_date.toLocaleDateString('en-US',{weekday : "long" });
    date.textContent=new_date.toLocaleDateString('en-UK',{day:"numeric", month :"long", year:"numeric"});
    
    let x = 0;
    function calander_build(){

        calender.innerHTML = "";

        
        const target_date = new Date(new_date.getFullYear(),new_date.getMonth()+x,1);

        const Year = target_date.getFullYear();
        const Month = target_date.getMonth();

        console.log(Month);
        
        
        //console.log(Month);
        //month.textContent=new_date.toLocaleString('en-US',{month:'long'});

        const month_arr = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December","out"];

        month.textContent=month_arr[Month];


        const week_days = ['sun','mon','tue','wed','thur','fri','sat'];

        for(let i=0 ; i<week_days.length ; i++){
            const week_name = document.createElement("p");
            if(i===0 || i==6){
                week_name.classList = `p-2 text-center m-1 text-red-500 font-['inter'] text-[18px]`;
                week_name.innerText = week_days[i];
                calender.append(week_name);
            }
            else{
                week_name.classList = `p-2 text-center m-1 text-[#000000] font-['inter'] text-[18px]`;
                week_name.innerText = week_days[i];
                calender.append(week_name);
            }
        }

        const week_skip_value = new Date(Year,Month,1).getDay();
        const total_days = new Date(Year,Month+1,0).getDate();


        for(let s=0 ; s<week_skip_value;s++){
            /*if(new_date.getMonth()===0){
                const empty_sell_date_set = new Date(new_date.getFullYear(),0,0).getDate();
                console.log(empty_sell_date_set);
                const previes_dates = empty_sell_date_set-(week_skip_value-1);
                const week_date_holder = document.createElement("p");
                week_date_holder.textContent = previes_dates+s;
                week_date_holder.classList =`p-2 text-center m-1 text-red-500 font-['inter'] text-[18px]`;
                calender.append(week_date_holder);
            }*/
                const empty_sell_date_set = new Date(Year,Month,0).getDate();
                const previes_dates = empty_sell_date_set-(week_skip_value-1);
                const week_date_holder = document.createElement("p");
                week_date_holder.textContent = previes_dates+s;
                week_date_holder.classList =`p-2 text-center m-1 text-[#5C9967] font-['inter'] text-[18px]`;
                calender.append(week_date_holder);
        }

        for(let d =1 ; d<=total_days ; d++){
            const week_date_holder = document.createElement("p");
            if(new_date.getDate()===d && Month===new_date.getMonth()){
                week_date_holder.textContent= d;
                week_date_holder.classList =`p-2 text-center m-1 text-white bg-blue-500 rounded-md font-['inter'] text-[18px]`;
                calender.append(week_date_holder);
            }
            else{
                week_date_holder.textContent= d;
                const sunday_check = new Date(Year,Month,d).getDay();
                if(sunday_check===0){
                    week_date_holder.classList =`p-2 text-center m-1 bg-black text-white rounded-md font-['inter'] text-[18px]`;
                }
                else{
                    week_date_holder.classList =`p-2 text-center m-1 text-black font-['inter'] text-[18px]`;
                }
                calender.append(week_date_holder);
            }

        }

        let empty_sell_date_set_new =0;
        if(week_skip_value<=4){
            empty_sell_date_set_new= 35-(week_skip_value-1+total_days);
        }
        else{
            empty_sell_date_set_new= 42-(week_skip_value-1+total_days);
        }
        
        for(let m=1 ;m<empty_sell_date_set_new;m++){
            const week_date_holder = document.createElement("p");
            week_date_holder.textContent= m;
            week_date_holder.classList =`p-2 text-center m-1 text-[#5C9967] font-['inter'] text-[18px]`;
            calender.append(week_date_holder);
        }
    }
    month_shift_1.addEventListener("click",()=>{
        x--;
        calander_build();
    });
    month_shift_2.addEventListener("click",()=>{
        x++;
        calander_build();
    });
    calander_build();
}

//task container  

function task_holder(user_input){

    //task create
    function container_create(){
        const task_container = document.createElement("div");
        task_container.classList = `grid grid-cols-[auto_40px] w-full h-[140px] bg-[#F0D1A8] rounded-[10px] px-6 py-1 my-4`;
        tasks.append(task_container);
        return task_container;
    }

    function sub_container(container){
        const data_container_1 = document.createElement("div"); 
        const data_container_2 = document.createElement("div");
        
        data_container_1.classList = `flex flex-col`;
        data_container_2.classList = `flex flex-col items-center gap-3 py-2`;

        container.append(data_container_1);
        container.append(data_container_2);

        return [data_container_1,data_container_2];
    }

    function data(container_1,container_2){
        const data_1 = document.createElement("p");
        const data_2 = document.createElement("p");
        const data_3 = document.createElement("p");
        const date_container = document.createElement("div");

        const simbol_1 = document.createElement("img");
        const simbol_2 = document.createElement("img");
        const simbol_3 = document.createElement("img");

        simbol_2.src = `icons/check-mark.png`;
        simbol_1.src = `icons/edit.png`;
        simbol_3.src = `icons/trash.png`;
        
        simbol_1.className = "icons";
        simbol_2.className = "icons";
        simbol_3.className = "icons";

        date_container.classList = `flex flex-row w-full items-center flex-center h-full mt-4`;

        data_1.classList = `text-2xl font-['arial'] text-[#3A3A36] font-bold`;
        data_1.textContent = user_input.name;

        data_2.textContent =  user_input.details;
        data_2.classList = `text-md font-['arial'] text-[#5C5C57] mt-1`;

        simbol_1.addEventListener("click",()=>{
            mode = user_input.value;
            task_name.placeholder = "Enter The New Task Name";
            task_detail.placeholder="Upadate Your Task Details";

            task_name.value = user_input.name;
            task_detail.value = user_input.details;
        })

        simbol_2.addEventListener("click",()=>{
            user_input.completed = true;
            const upadated_user_input_2 = JSON.stringify(user_input);
            localStorage.setItem(`task_count${user_input.value}`,upadated_user_input_2);

            let task_completed_status = Number(localStorage.getItem("task_completed"));
            let task_pending_status = Number(localStorage.getItem("task_pending"));

            task_completed_status = Number(localStorage.getItem("task_completed"))+1;
            task_pending_status = Number(localStorage.getItem("task_pending"))-1;

            localStorage.setItem("task_pending",task_pending_status);
            localStorage.setItem("task_completed",task_completed_status);

            task_pending.textContent = task_pending_status;
            task_competed.textContent = task_completed_status;
        })

        container_1.append(data_1);
        container_1.append(data_2);
        container_1.append(data_3);
        container_1.append(date_container);
        
        container_2.append(simbol_2);
        container_2.append(simbol_1);
        container_2.append(simbol_3);


        
        return date_container;
    }

    function date_adding(container_3){
        const text_1 = document.createElement("p");
        const text_2 = document.createElement("p");

        text_1.textContent = "Starting Time";
        text_2.textContent = user_input.time;

        text_1.classList = `text-left w-full font-['arial'] text-xl font-bold`;
        text_2.classList = `text-center w-full font-['arial'] text-xl font-bold`;

        container_3.append(text_1);
        container_3.append(text_2)
    }

    const chain_1 = container_create();
    const chain_2 = sub_container(chain_1);
    const date_time = data(chain_2[0],chain_2[1]);
    date_adding(date_time);

}

function task_creator(){

    submit.addEventListener("click",()=>{
        if(mode!==null){
            
            const time = new Date().toLocaleTimeString()
            const task_information = {
                value : mode,
                task_ID : `task_ID${mode}`,
                name : task_name.value,
                details : task_detail.value,
                time : time,
                completed : false
            };

            const upadated_user_input = JSON.stringify(task_information);

            localStorage.setItem(`task_count${mode}`,upadated_user_input);
            alert('Task updated!');
            location.reload();
        }
        else{
            let i = localStorage.getItem("i");

            i = i ? parseInt(i) : 1;

            const time = new Date().toLocaleTimeString()
            const task_information = {
                value : i,
                task_ID : `task_ID${i}`,
                name : task_name.value,
                details : task_detail.value,
                time : time,
                completed : false
            };
            const str_convert = JSON.stringify(task_information);
            localStorage.setItem(`task_count${i}`, str_convert );
            localStorage.setItem("i",i+1);
            let task_pending_status = Number(localStorage.getItem("task_pending"));

            
            task_pending_status = Number(localStorage.getItem("task_pending"))+1;

            localStorage.setItem("task_pending",task_pending_status);

            task_pending.textContent = task_pending_status;

            task_holder(task_information);
        }
    })

}

main_page();
calander_section();
task_creator();