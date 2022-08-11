import {getid, removeClassForGroup} from "/modules/Expanding Cards/Expanding Cards.js"


/////////////////////////////////////EXPANDING CARDS///////////////////////////////////////////////////////////////

const images = document.querySelectorAll(".container > div");
const navigation = document.querySelectorAll(".navigation > div");

getid(images);
getid(navigation);

images.forEach((image) => {
  image.addEventListener("click", () => {
    removeClassForGroup(images, "active-image");
    removeClassForGroup(navigation, "active-dots");

    navigation.forEach((el) => {
      if (image.id == el.id) {
        el.classList.add("active-dots");
      }
    });

    image.classList.add("active-image");
  });
});
//add ivent slider with swipe

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////Progress Steps////////////////////////////////////////////////////////////////
const prev = document.getElementById("prev");
const next =document.getElementById("next");
const steps = document.querySelectorAll(".steps > div");
const line = document.getElementById("line");

let i = 0;


next.addEventListener("click", (e)=>{
  prev.classList.remove("deactivate");
  next.classList.remove("deactivate");
    e.preventDefault();

    i++;
    line.style.width = `${10*i}vw`;

    steps.forEach(el=>{
      el.id == i ? el.classList.add("active-step") : "";
    })

    if (i > 2){
      i = 3;
      next.classList.add("deactivate");
      next.removeEventListener("click");
    }
})

prev.addEventListener("click", (e)=>{
  prev.classList.remove("deactivate");
  next.classList.remove("deactivate");
  e.preventDefault();

  i--;
  line.style.width = `${10*i}vw`;
  steps.forEach(el=>{
    i>=0 && (+el.id - 1) == i ?  el.classList.remove("active-step") : "";
  })

  if (i < 1){
    i = 0;
    prev.classList.add("deactivate");
    prev.removeEventListener();
  }
})

// add localStorage///////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
