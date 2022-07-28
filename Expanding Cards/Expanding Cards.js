const imagesList = document.querySelector(".container");
const navigationList = document.querySelector(".container");

const images = document.querySelectorAll(".container > div");
const navigation = document.querySelectorAll(".navigation > div");

imagesList.addEventListener('click', (e)=>{


  if (e.target.className == "image"){

    images.forEach(el=> {

      if (el.classList.contains("active-image")){

        el.classList.add("image");
        el.classList.remove("active-image")
        
      }
  
    })

    e.target.classList.add("active-image")
    e.target.classList.remove("image")
    
  
  }
    

})//удосконалити код. додати навігацион

// images.forEach(image => {
//   image.addEventListener('click', () => {
//       removeActiveClasses()
//       image.classList.add('image-active')
//   })
// })

// function removeActiveClasses() {
//   images.forEach(image => {
//       image.classList.remove('image-active')
//   })
// }


