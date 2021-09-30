document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector("#login").style.display = "block";
    document.querySelector(".black-background").style.display = "block";
  });

document.querySelector(".close-btn-login").addEventListener("click", function(){
    document.querySelector("#login").style.display = "none";
    document.querySelector(".black-background").style.display = "none";
  });

document.querySelector("#show-register").addEventListener("click", function(){
    document.querySelector("#register").style.display = "block";
    document.querySelector(".black-background").style.display = "block";
  });

document.querySelector(".close-btn-register").addEventListener("click", function(){
    document.querySelector("#register").style.display = "none";
    document.querySelector(".black-background").style.display = "none";
  });