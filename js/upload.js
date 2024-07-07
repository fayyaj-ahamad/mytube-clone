let uBtn = document.getElementById("uploadBtn");
let userOpenForm = document.getElementById("userOpenform");
let uForm = document.querySelector(".submitBtn");
let closedBtn = document.getElementById("closeBtn");
let simg = document.querySelector("#simg");
let profile = document.querySelector(".userprofile");
let openProfilebtn = document.querySelector("#openProfile");
let videoList = document.querySelector(".video-list");

let userInfoData = () =>{
    if (localStorage.getItem("author") != null) {
        let sImg = JSON.parse(localStorage.getItem("author"));
        if(sImg){
        simg.src = sImg.siImg;
        }else{
        simg.src = `<i class="ri-account-circle-fill"></i>`;
        }
        var allUploadData = [];
        if(localStorage.getItem("allUploadData") != null){
            allUploadData = JSON.parse(localStorage.getItem("allUploadData"))
        }
        let userInfo = JSON.parse(localStorage.getItem("author"));
        let allInput = uForm.querySelectorAll("input");
        let fReader = new FileReader(); 
        let imgUrl = "";
        let ViedoUrl = ""

        // read img data
        allInput[0].onchange = () =>{
            fReader.readAsDataURL(allInput[0].files[0]);
            fReader.onload = (e) =>{
                imgUrl = e.target.result;  
            }
        }
        // read video data
        allInput[1].onchange = () =>{
            fReader.readAsDataURL(allInput[1].files[0]);
            fReader.onload = (e) =>{
                ViedoUrl = e.target.result;
            }
        }

        uForm.onsubmit = (e) =>{
            e.preventDefault();
            allUploadData.push({
                img : imgUrl,
                video : ViedoUrl,
                title : allInput[2].value,
                desc : allInput[3].value
            })
            localStorage.setItem("allUploadData",JSON.stringify(allUploadData));
            swal("Good Job","Data Uploaded","success");
            readVideoData();
            userOpenForm.classList.remove("active")
            allInput[0].value = "";
            allInput[2].value = "";
            allInput[3].value = "";

        }

        let readVideoData = () =>{
            videoList.innerHTML = "";
            allUploadData.forEach((data,index)=>{
                videoList.innerHTML += `
                <td>${index+1}</td>
                <td>
                <img src="${data.img}" alt="" width="60" height="40">
                </td>
                <td>
                    <p class="par">${data.title}</p>
                </td>
                <td>
                    <p class="par">${data.desc}</p>
                </td>
                <td>
                    <button class="del" index = "${index}">Delete</button>
                </td>
                `
            })

        // delete video data

             let deleteVideo = () =>{
            let alldelBtn = document.querySelectorAll(".del");
            for(let btn of alldelBtn){
                btn.onclick = () =>{
                    let index = btn.getAttribute("index");
                    allUploadData.splice(index,1);
                    localStorage.setItem("allUploadData",JSON.stringify(allUploadData));
                    swal("Video Deleted!","video delete successfully","success");
                    readVideoData();
                }
            }
        }
           deleteVideo()

           // delete video end

        }

        readVideoData();
    }
    else{
        window.location = "signup.html";
    }


        openProfilebtn.onclick = () => {
            profile.innerHTML = `
                                <a href="index.html">MayTube</a>
                                <button onclick="logOut()">Logout</button>
                                `
            profile.classList.toggle("active");
        };

     
}

function logOut() {
    localStorage.removeItem("author");
    window.location = "index.html";

  }

const openUploadForm = () =>{
    uBtn.onclick = () => {
        userOpenForm.classList.toggle("active");
    };
}

openUploadForm();

let closedForm = () =>{
    closedBtn.addEventListener("click",function(){
       userOpenForm.classList.toggle("active")
    })
}
closedForm();

userInfoData();
      
