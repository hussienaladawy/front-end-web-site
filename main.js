// const accordion = document.getElementsByClassName('container');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// // }
// $(document).ready(function(){
// $('#icon').click(function(){
// $('ul').toggleclass('show');
// });
// });
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();







const you = document.getElementsByClassName('container');
for (i=0; i<you.length; i++) {
you[i].addEventListener('click',good)

}
function good(){
  this.classList.toggle('active')
}
/******scroll btn dawn footer */
let icon = document.querySelector(".up")
window.onscroll = function(){
 if (this.scrollY>=1000){
icon.classList.add("show")
 }else{
  icon.classList.remove("show")
 }
};
icon.onclick = function () {

  window.scrollTo({
     top:0,
     behavior:"smooth",
  });
    
};
/*end footer scroll code */
// /**test js */
// document.querySelector('.btn-1').addEventListener('click',open)


// function open(){
//   const you = document.getElementsByClassName('container');
// }


//faq

let icon1 = document.querySelector(".i1");
let icon2 = document.querySelector(".i2");
let icon3 = document.querySelector(".i3");
let icon4 = document.querySelector(".i4");
let myP1 = document.querySelector(".p1");
let myP2 = document.querySelector(".p2");
let myP3 = document.querySelector(".p3");
let myP4 = document.querySelector(".p4");
let txt1 = document.querySelector(".txt1");
let txt2 = document.querySelector(".txt2");
let txt3 = document.querySelector(".txt3");
let txt4 = document.querySelector(".txt4");

icon1.onclick = function () {
  myP1.classList.toggle("active-2");
  txt1.classList.toggle("change-color");
  icon1.classList.toggle("fa-plus");
  icon1.classList.toggle("fa-minus");
};
icon2.onclick = function () {
  myP2.classList.toggle("active-2");
  txt2.classList.toggle("change-color");
  icon2.classList.toggle("fa-plus");
  icon2.classList.toggle("fa-minus");
};
icon3.onclick = function () {
  myP3.classList.toggle("active-2");
  txt3.classList.toggle("change-color");
  icon3.classList.toggle("fa-plus");
  icon3.classList.toggle("fa-minus");
};
icon4.onclick = function () {
  myP4.classList.toggle("active-2");
  txt4.classList.toggle("change-color");
  icon4.classList.toggle("fa-plus");
  icon4.classList.toggle("fa-minus");
};

//
//
//
//
//

let li1 = document.querySelector(".li1");
let li2 = document.querySelector(".li2");
let li3 = document.querySelector(".li3");
let li4 = document.querySelector(".li4");
let li5 = document.querySelector(".li5");
let li6 = document.querySelector(".li6");

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
  

li1.onclick = function () {
  box1.classList.add("block");
  box2.classList.remove("block");
  box3.classList.remove("block");
  box4.classList.remove("block");
  box5.classList.remove("block");
  box6.classList.remove("block");
};
li2.onclick = function () {
  box2.classList.add("block");
  box1.classList.remove("block");
  box3.classList.remove("block");
  box4.classList.remove("block");
  box5.classList.remove("block");
  box6.classList.remove("block");
};
li3.onclick = function () {
  box3.classList.add("block");
  box1.classList.remove("block");
  box2.classList.remove("block");
  box4.classList.remove("block");
  box5.classList.remove("block");
  box6.classList.remove("block");
};
li4.onclick = function () {
  box4.classList.add("block");
  box1.classList.remove("block");
  box2.classList.remove("block");
  box3.classList.remove("block");
  box5.classList.remove("block");
  box6.classList.remove("block");
};
li5.onclick = function () {
  box5.classList.add("block");
  box1.classList.remove("block");
  box2.classList.remove("block");
  box3.classList.remove("block");
  box4.classList.remove("block");
  box6.classList.remove("block");
};
li6.onclick = function () {
  box6.classList.add("block");
  box1.classList.remove("block");
  box2.classList.remove("block");
  box3.classList.remove("block");
  box4.classList.remove("block");
  box5.classList.remove("block");
};

//end faq
