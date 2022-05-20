/*UNFINISHED*/

/*

poisonous = document.getElementById("poisonous");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 2770 || document.documentElement.scrollTop > 2770) {
        document.body.style.backgroundColor = "#9d61ab";
        document.body.style.transition = "0.5s";
    } else {
        document.body.style.backgroundColor = "rgb(97, 146, 105)";
    }
  }

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }
  
  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector('#listItem');
observer.observe(target);

// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)

let callback = (entries, observer) => {
    entries.forEach(entry => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };



IntersectionObserver

/*
function scrollFunction2() {
    if (document.body.scrollTop > 2770 || document.documentElement.scrollTop > 2770) {
        document.body.style.backgroundColor = "#9d61ab";
        document.body.style.transition = "0.5s";
    } else {
        document.body.style.backgroundColor = "rgb(97, 146, 105)";
    }
}
*/