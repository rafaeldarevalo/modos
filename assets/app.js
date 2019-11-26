
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
var revealElementsHorizontal = document.getElementsByClassName("animaHorizontal");
for (var i = 0; i < revealElements.length; i++) { 
    new ScrollMagic.Scene({
        triggerElement: revealElements[i], 
        triggerElementHorizontal: revealElementsHorizontal[i], 
        offset: -300,												
    })

    
        .setClassToggle(revealElements[i], "visible")
        .setClassToggle(revealElementsHorizontal[i], "visible")
        .addIndicators({ name: "anima " + (i + 1) })
        .addTo(controller);
}

/* -------------------------------------------------------------------------- */
/*                                  PARALLAX                                  */
/* -------------------------------------------------------------------------- */

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: 0.6,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'down'
    
});