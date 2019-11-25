
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
    let lazyImages = [].slice.call(document.querySelectorAll("img.js-lazy"));
    let active = false;
  
    const lazyLoad = function() {
      if (active === false) {
        active = true;
  
        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
  
              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });
  
              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });
  
          active = false;
        }, 200);
      }
    };
  
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  });