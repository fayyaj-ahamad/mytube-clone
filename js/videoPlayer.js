let profile = document.querySelector(".userprofile");
let openProfilebtn = document.querySelector("#openProfile");
let id = window.location.href.split("=")[1];
let allUploadData = JSON.parse(localStorage.getItem("allUploadData"));
let currentVideo = allUploadData[id];
let videoTag = document.querySelector(".video-tag");
let videoList = document.querySelector(".video-list");
videoTag.src = currentVideo.video;
let sImg = JSON.parse(localStorage.getItem("author"));
    if(sImg){
    simg.src = sImg.siImg;
    }else{
      simg.src = "/image/a.png";
    }
allUploadData.forEach((data,index)=>{
    videoList.innerHTML += `
    <a href="videoPlayer.html?index=${index}">
    <div class="allVideoImg">
      <div class="videoImg">
          <img src="${data.img}" alt="img">
      </div>
        <p>${data.desc}</p>
    </div>    
    </a>
    
    `
})

openProfilebtn.onclick = () => {
    profile.innerHTML = `
    <a href="index.html">MayTube</a>
    <button onclick="logOut()">Logout</button>
    `
    profile.classList.toggle("active");
  };

  function logOut() {
    localStorage.removeItem("author");
    window.location = "index.html";
  }