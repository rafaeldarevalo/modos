
// var myObj, i, j, x = "";
// myObj = {
//   "car1": [
//     {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
//   ]
// };
// for (i in myObj.car1) {
//   x += "<h2>" + myObj.car1[i].name + "</h2>";
//   for (j in myObj.car1[i].models) {
//     x += myObj.car1[i].models[j] + "<br>";
//   }
// }


// let signum = document.querySelectorAll('.signum93');
// signum.innerHTML= x;
// var i;
// for (i = 0; i < signum.length; i++) {
//     signum[i].innerHTML = x;
// }
// console.log(signum);
var revealElements = document.getElementsByClassName("anima");
for (var i = 0; i < revealElements.length; i++) { 
    new ScrollMagic.Scene({
        triggerElement: revealElements[i], 
        offset: 20,												
    })
        .setClassToggle(revealElements[i], "visible")
        .addIndicators({ name: "anima " + (i + 1) })
        .addTo(controller);
}

//CARGA DE IMÁGENES

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.js-lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to a more compatible method here
    }
  });
  