
// login btn and signup btn click form open functanlity variable
let loginBtn = document.querySelector(".login");
let signupBtn = document.querySelector(".signup");
let changeImg = document.querySelector("#changeImg");



// login form and signup form variable
let signupForm = document.querySelector("#signup");
let loginForm = document.querySelector("#login");

// get signup form variable from submit btn
let userSignupForm = document.querySelector("#userSignupForm");
let sAllInput = userSignupForm.querySelectorAll("input");
let allRegistration = [];
if(localStorage.getItem("allRegistration") != null){
    allRegistration = JSON.parse(localStorage.getItem("allRegistration"));
}

// coding start signup form from user
let allRegistrationData = () =>{
    let fReader = new FileReader();
    let siImg = "";
    sAllInput[0].onchange = () =>{
        fReader.readAsDataURL(sAllInput[0].files[0]);
    fReader.onload = (e) =>{
        siImg = e.target.result;
    }
}
    userSignupForm.addEventListener("submit",function(e){
        e.preventDefault();
        let checkemail = allRegistration.find((data)=>{
            return data.email == sAllInput[2].value;    
        })
      
            
        if(checkemail === undefined){
            allRegistration.push({
                siImg : siImg,
                fName : sAllInput[1].value,
                email  :sAllInput[2].value,
               password : sAllInput[3].value,
               mobileNu : sAllInput[4].value
             })  

             console.log(allRegistration)
             swal("Good Job","Registration","success");
                sAllInput[0].value = "";
                sAllInput[1].value = "";
                sAllInput[2].value = "";
                sAllInput[3].value = "";
                sAllInput[4].value = "";

        }else{
            swal("Oops!", "Email allready Exist!", "warning");
        }
        localStorage.setItem("allRegistration",JSON.stringify(allRegistration));
    })
}


let LoginBtn = () =>{
    loginBtn.addEventListener("click",function(){
        loginForm.style.display = "block";
        signupForm.style.display = "none"; 
        changeImg.src = "/image/login.png";
        
    })  
}

let SignupBtn = () =>{
    signupBtn.addEventListener("click",function(){
        loginForm.style.display = "none";
        changeImg.src = "/image/signup.png";
        signupForm.style.display = "block"; 
    })  
}



// coding start login form from user succsessfully

let userLoginform = document.querySelector("#Lform");
let loginAllInput = userLoginform.querySelectorAll("input");


userLoginform.addEventListener("submit",function(e){
    e.preventDefault();
    let email = allRegistration.find((data)=>{
        return data.email == loginAllInput[0].value;
    })

    if(email != undefined){
        if(email.password == loginAllInput[1].value){
            localStorage.setItem("author",JSON.stringify(email));
            swal("Good job!", "Loogged In SuccsessFully!", "success");
            setTimeout(()=>{
            window.location = "index.html";
            },1000)
            
        }
        else{
            swal("Oops!", "Password Not Macth!", "warning");

        }
        loginAllInput[0].value = "";
        loginAllInput[1].value = "";
    }
    else{
        swal("Oops!", "Email not Found !", "warning");
    }
})

   

SignupBtn();
LoginBtn();
allRegistrationData();