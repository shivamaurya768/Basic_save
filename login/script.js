const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");
const container = document.getElementById("container");

signUp.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signIn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

console.log("JS file connected");

//reposive design for login/signup page
let signin=document.getElementById("singin");
let signup=document.getElementById("singup");
btn=document.querySelector(".create-account");
let check=btn.textContent;
console.log(check);
btn.addEventListener("click",function(){
      if(check==="Create Account"){
        signin.style.display="none";
        signup.style.display="block";
        btn.textContent="Already have an account?";
        check=btn.textContent;
      }
      else{
        signup.style.display="none";
        signin.style.display="block";
        btn.textContent="Create Account";
        check=btn.textContent;
      }    
});