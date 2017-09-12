const defaults = {
  item: 'li', // qualified within container
  dragger: 'button', // qualified within `item`
  activeClass: 'dragon-active', // added to item being dragged
  inactiveClass: 'dragon-inactive', // added to other items when item is being dragged
  announcement: {
    grabbed: el => `${el.innerText} grabbed`,
    dropped: el => `${el.innerText} dropped`,
    reorder: (el, items) => {
      const pos = items.indexOf(el) + 1;
      const text = el.innerText;
      return `The list has been reordered, ${text} is now item ${pos} of ${items.length}`;
    }
  }
};

export default defaults;