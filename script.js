const avator = document.getElementById("avator");
const name = document.getElementById("name");
const day = document.getElementById("Day");
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




//main page

function main_page(){
    name.textContent = localStorage.getItem("user_name");
    avator.classList = `w-[100px] h-[100px] rounded-[50px] border-2 border-green-400 `;
    avator.src = localStorage.getItem("avator"); 

    avator.src = localStorage.getItem("avator");

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

main_page();
calander_section();