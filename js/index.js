let profile = document.querySelector(".userprofile");
let openProfilebtn = document.querySelector("#openProfile");
let simg = document.querySelector("#simg");


let loggedIn = () => {
  if (localStorage.getItem("author") != null){
    let fname = JSON.parse(localStorage.getItem("author"));
    let sImg = JSON.parse(localStorage.getItem("author"));
    if(sImg){
    simg.src = sImg.siImg;
    }else{
      simg.src = "/image/a.png";
    }
    profile.innerHTML = `
                        <h4>${fname.fName}</h4>
                        <a href="upload.html">Your Viedos</a>
                        <button onclick="logOut()">Logout</button>
                        `;

    localStorage.setItem("author", JSON.stringify(fname));
  } else {

    profile.innerHTML = `
                    <h4>Hello Mr...</h4>
                    <button onclick = "signup()">Signup</button>
                    `;
  }
};

loggedIn();


  function logOut() {
    localStorage.removeItem("author");
    location.reload();
  }


function signup() {
  window.location = "signup.html";
}


openProfilebtn.onclick = () => {
  profile.classList.toggle("active");
};

// show all video

const showAllVideo = () =>{
  let video_item = document.querySelector(".video-item");
  
  if((localStorage.getItem("allUploadData") !== null && localStorage.getItem("author") != null)){
    const allUploadData = JSON.parse(localStorage.getItem("allUploadData"));
    const regData = JSON.parse(localStorage.getItem("author"));

    allUploadData.forEach((data, index)=>{
       let userImg = regData.siImg;
      video_item.innerHTML += `
      <a href="videoPlayer.html?index=${index}">
      <div class="video-card">
        <div class="video">
            <img src="${data.img}" alt="img">
        </div>
        <div class="video-title">
          <div class="user-img">
              <img src="${userImg}" alt="">
          </div>
          <p>${data.desc}</p>
      </div>
  </div>
  </a>
      
      `
    })
  }
}

showAllVideo();