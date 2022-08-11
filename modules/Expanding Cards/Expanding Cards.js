
const ExpandingCards ={

  getid: function(group) {
    let i = 0;
    group.forEach((el) => {
      el.id = i++;
    });
  },

  removeClassForGroup: function(group, removeClass) {
    group.forEach((el) => {
      el.classList.remove(removeClass);
    });
  }

}

export const getid = ExpandingCards.getid;
export const removeClassForGroup = ExpandingCards.removeClassForGroup;
