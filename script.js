let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let arr_imgs = [
  "image/img1.jpg",
  "image/img2.jpg",
  "image/img3.jpg",
  "image/img4.jpeg",
  "image/img5.jpg",
  "image/img6.jpg",
  "image/img7.jpeg"
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
menumcon.addEventListener("click", function() {
    if (navmenu.style.display === "block") {
        navmenu.style.display = "none"; 
    } else {
        navmenu.style.display = "block"; 
    }
    
});


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
