let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let arr_imgs = [
  "image/im1.jpeg",
  "image/im2.jpeg",
  "image/im3.jpeg",
  "image/im4.jpg",
  "image/im5.jpg",
  "image/im6.jpg",
  "image/im7.jpg",
  "image/im8.jpg",
  "image/im9.jpg",
  "image/im10.jpeg"
];

let index = 0;

function autoSlide() {
  img1.src = arr_imgs[index % arr_imgs.length];
  img2.src = arr_imgs[(index + 1) % arr_imgs.length];
  img3.src = arr_imgs[(index + 2) % arr_imgs.length];

  index++; // move slider forward by 1
}
setInterval(autoSlide, 2000);
//display the menu on click of hamburger icon
let menumcon = document.getElementById("menuIcon");
let navmenu = document.getElementById("tab_menu");
 function menuicon() {
    if (navmenu.style.display === "block") {
        navmenu.style.display = "none"; 
    } else {
        navmenu.style.display = "block"; 
    }
    
}
// on scroll change the background color of the navbar
let navbar = document.getElementById("menu");
let tab_menu = document.querySelectorAll(".tabs");
let res_menu=document.getElementById("tab_menu");
window.addEventListener("scroll", function() {
    if(window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // change to desired color
        res_menu.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // change to desired color
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)"; // add shadow for better visibility
        navbar.style.color = "white"; // change text color for better contrast
        res_menu.style.color = "white"; // change text color for better contrast
        tab_menu.forEach(function(tab) {
            tab.style.color = "white"; // change text color of tabs
        });
    } else {
        navbar.style.backgroundColor = "transparent"; // reset to original color
        res_menu.style.backgroundColor = "transparent"; // reset to original color
        navbar.style.boxShadow = "none";
        navbar.style.color = "black"; 
        res_menu.style.color = "black"; 
       tab_menu.forEach(function(tab) {
            tab.style.color = "black"; 
        });
    }   
});
// drak mode and white mode;
let darkModeBtn = document.querySelector(".ri-sun-fill");
let darkmodeRes=document.getElementById("darkmode");
let darkMode=()=> {
    let cls=darkModeBtn.className;
    if(cls=="ri-sun-fill"){
        document.body.style.backgroundColor="black";
       tab_menu.forEach(function(tab) {
            tab.style.color = "white"; // change text color of tabs
        });
        document.body.style.color="white";
        darkModeBtn.className="ri-moon-fill";
        darkmodeRes.className="ri-moon-fill";
    }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        darkModeBtn.className="ri-sun-fill";
        darkmodeRes.className="ri-sun-fill";                
            tab_menu.forEach(function(tab) {
            tab.style.color = "black"; // change text color of tabs
        });
    }
};

darkModeBtn.addEventListener("click",darkMode)
darkmodeRes.addEventListener("click",darkMode)
//service info
let serviceInfo = document.getElementById("service-info");
let closeBtn = document.getElementById("close-btn");
let serviceBoxes = document.getElementById("service_proviode");
function showServiceInfo(imgSrc, title, description, providerName, providerPhone, providerEmail, providerAddress) {
    let img=document.getElementById("service-image");
    let serviceTitle=document.getElementById("service-name");
    let serviceDescription=document.getElementById("service-description");
    let provider_Name=document.getElementById("employee-name");
    let provider_Phone=document.getElementById("employee-contact");
    let provider_Email=document.getElementById("employee-email");
    let provider_Address=document.getElementById("employee-address");
    img.src = imgSrc;
    serviceTitle.innerText = title;
    serviceDescription.innerText = description;
    provider_Name.innerText = providerName;
    provider_Phone.innerText = providerPhone;
    provider_Email.innerText = providerEmail;
    provider_Address.innerText = providerAddress;
    serviceInfo.style.display = "block";
    serviceBoxes.style.position = "absolute";
}
closeBtn.addEventListener("click", function() {
    serviceInfo.style.display = "none";
    serviceBoxes.style.position = "static";
});
