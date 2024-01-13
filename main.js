window.addEventListener('load',function(){
    var tl = gsap.timeline();
    tl.to("#loader",{opacity:0,duration:1})
    tl.to("#preloader",{opacity:0,duration:1})    
    tl.to("#preloader",{display:'none'})   
    tl.fromTo("#title",{opacity:0,y:-20},{opacity:1,duration:1,y:0},"-=0.9")    
    tl.fromTo("#description",{opacity:0,y:-20},{opacity:1,duration:0.6,y:0},"-=0.4")    
    tl.fromTo("#btn",{opacity:0,y:-20},{opacity:1,duration:0.6,y:0},"-=0.3")    

})

//dakhla ta lelements ml ajneb
gsap.fromTo("#cont2_title",{opacity:0,y:-30}, {
    scrollTrigger: {
    trigger: "#cont2",
    start: "30% 90%", 
    },
    opacity:1,y:0,duration:0.8
});

gsap.fromTo("#cont3_p2",{opacity:0,x:20}, {
    scrollTrigger: {
    trigger: "#cont3",
    start: "56% 90%", 

    },
    opacity:1,duration:0.6,x:0 
});

gsap.fromTo("#cont4_p1",{opacity:0,x:-20}, {
    scrollTrigger: {
    trigger: "#cont4",
    start: "76% 90%", 

    },
    opacity:1,duration:0.6,x:0 
});
gsap.fromTo("#cont4_p2",{opacity:0,x:20}, {
    scrollTrigger: {
    trigger: "#cont4",
    start: "76% 90%", 

    },
    opacity:1,duration:0.6,x:0 
});


// bouton get started 1
document.getElementById('dashboard').addEventListener('click',function(){
      document.getElementById('login_cont').style.opacity=0
      document.getElementById('login_page').style.opacity=0
      document.getElementById('login_page').style.display="flex"
      gsap.fromTo('#login_page',{opacity:0},{opacity:1,duration:0.3})
      gsap.fromTo('#login_cont',{opacity:0,y:20},{opacity:1,y:0,duration:0.3},"=-0.2")
      document.documentElement.style.overflow="hidden";
    })
//get started 2    
document.getElementById('btn').addEventListener('click',function(){
      window.scrollTo(0, 0);
      document.getElementById('login_cont').style.opacity=0
      document.getElementById('login_page').style.opacity=0
      document.getElementById('login_page').style.display="flex"
      gsap.fromTo('#login_page',{opacity:0},{opacity:1,duration:0.3})
      gsap.fromTo('#login_cont',{opacity:0,y:20},{opacity:1,y:0,duration:0.3},"=-0.2")
      document.documentElement.style.overflow="hidden";
    })
// get started 3    
document.getElementById('cont4_btn').addEventListener('click',function(){
      window.scrollTo(0, 0);
      document.getElementById('login_cont').style.opacity=0
      document.getElementById('login_page').style.opacity=0
      document.getElementById('login_page').style.display="flex"
      gsap.fromTo('#login_page',{opacity:0},{opacity:1,duration:0.3})
      gsap.fromTo('#login_cont',{opacity:0,y:20},{opacity:1,y:0,duration:0.3},"=-0.2")
      document.documentElement.style.overflow="hidden";
    })

// CLOSE the login window on x click
document.getElementById('close').addEventListener('click',function(){
    gsap.fromTo('#login_cont',{opacity:1,y:0},{opacity:0,y:20})
      document.getElementById('login_page').style.display="none"
      document.documentElement.style.overflow="scroll";
    })


// login toggle 

toggle = document.getElementById('signin_btn')
toggle.addEventListener('click',function(){
    if (toggle.innerText =="Log in") {
        signup_form.style.display="none"
        signin_form.style.display="block"
        toggle.innerText='Register'
    }
  
})

//alert

var validAge = false;

while (!validAge) {
    var ageInput = prompt("Quel est votre âge?");

    if (!isNaN(ageInput)) {
        var age = parseInt(ageInput);

        if (age >= 18) {
            validAge = true;
            alert("Bienvenue! Vous êtes autorisé à continuer la navigation.");

             
            document.getElementById('cont4_btn').addEventListener('click', function () {
              
            });

        } else {
            alert("Désolé, vous n'êtes pas autorisé. Vous devez avoir plus de 18 ans pour accéder.");
            window.close();

            
            validAge = true; 
        }
    } else {
        alert("Veuillez entrer un nombre valide.");
    }
}



// utilisation de la programmation evenementiel js

document.addEventListener("DOMContentLoaded", function() {
    
    var getStartedBtn = document.getElementById("dashboard");
    getStartedBtn.addEventListener("click", function() {
        
        alert("Get started button clicked!");
    });

 });


 function selectPurpose(purpose) {
    alert('Pleasure working with you! You selected: ' + purpose);

 }




