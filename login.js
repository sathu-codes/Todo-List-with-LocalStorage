const user_name = document.getElementById("user-name");
const user_display_name = document.getElementById("user-display-name");
const avator_login = document.getElementById("avatar-login");
const avator_selection = document.getElementById("avator-selection");
const Login = document.getElementById("login");
const back = document.getElementById("back");
const avatar_page = document.getElementById("avatar-page");
const login_page = document.getElementById("login-page");


//login page fuciton 
function assign_username(){

    function page_shiffting(){
        login_page.classList.toggle("hidden");
        avatar_page.classList.toggle("hidden");
    };

    next.addEventListener("click",()=>{
        user_display_name.textContent = user_name.value;
        localStorage.setItem("user_name",user_display_name.textContent);
        page_shiffting();        
    });

    back.addEventListener("click",()=>{
        page_shiffting();
    });

    //avator selection

    for(let i=1 ; i<=8 ; i++){
        const avatar_img = document.createElement("img");
        avatar_img.src = `avtor/avator${i}.png`;
        avatar_img.classList = `w-[100px] h-[100px] rounded-[50px]`
        avator_selection.append(avatar_img);
        
        avatar_img.addEventListener("click",()=>{
            avator_login.src = `avtor/avator${i}.png`;
            localStorage.setItem("avator",avator_login.src);
        });

        Login.addEventListener("click",()=>{
            window.location.href = "todo.html";
        });

    }
}

assign_username();