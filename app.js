'use strict';

const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn span");
const slideInner = container.querySelector(".slide-inner");
const arrowLeft = document.querySelector(".arrowleft .fa-solid");
const arrowRight = document.querySelector(".arrowright .fa-solid");

const CLICKED = "clicked";
const btnArray = Array.from(btns);
let count = 0;

function SetBackground(index){
  btnArray.forEach(input => 
  input.classList.remove(CLICKED));
  btnArray[index].classList.add(CLICKED);
}

function moveSlide(width){
  const num = width*(-100);
  slideInner.style.transform = `translateX(${num}vw)`;
}

function arrowLeftDisplay(string){
  arrowLeft.style.display = `${string}`;
}

function arrowRightDisplay(string){
  arrowRight.style.display = `${string}`;
}

btnArray.forEach(element => element.addEventListener("click", (event)=>{
  const clicked = event.target;
  const getId = parseInt(clicked.id);
  SetBackground(getId);
  moveSlide(getId);
  count = getId;
  if(getId === 0){
    arrowLeftDisplay("none");
    arrowRightDisplay("inline-block");
  }
  else if(getId === 3){
    arrowLeftDisplay("inline-block");
    arrowRightDisplay("none");
  }
  else{
    arrowLeftDisplay("inline-block");
    arrowRightDisplay("inline-block");
  }
}))

arrowRight.addEventListener("click", event =>{
  count += 1;
  arrowLeftDisplay("inline-block");
  SetBackground(count);
  moveSlide(count);
  if(count === 3)
  {
    arrowRightDisplay("none");
  }
  });

arrowLeft.addEventListener("click", event =>{
  count -= 1;
  arrowRightDisplay("inline-block");
  SetBackground(count);
  moveSlide(count);
  if(count ===0)
  {
    arrowLeftDisplay("none");
  }
})

