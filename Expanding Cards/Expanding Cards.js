const images = document.querySelectorAll(".container > div");
const navigation = document.querySelectorAll(".navigation > div");

getid(images);
getid(navigation);

images.forEach((image) => {
  image.addEventListener("click", () => {
    removeClassForGroup(images, "active-image");
    removeClassForGroup(navigation, "active-line");

    navigation.forEach((el) => {
      if (image.id == el.id) {
        el.classList.add("active-line");
      }
    });

    image.classList.add("active-image");
  });
});

function getid(groupelem) {
  let i = 0;
  groupelem.forEach((el) => {
    el.id = i++;
  });
}

function removeClassForGroup(group, removeClass) {
  group.forEach((el) => {
    el.classList.remove(removeClass);
  });
}

//add ivent slider with swipe