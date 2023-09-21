// document.getElementById("start").addEventListener("click", function() {
//     document.getElementById("eyes1").classList.add("eyes")
//     document.getElementById("eyes2").classList.add("eyes")
//     setTimeout(overlayFadeOut, 2000)
//     
// });

// function overlayFadeOut() {
//     $("#overlay").fadeOut(600);
// }

setInterval(backgroundChanger, 7500);

var images = [
    'url("img/1.jpg")',
    'url("img/2.jpg")',
    'url("img/3.jpg")',
    'url("img/4.jpg")',
    'url("img/5.jpg")',
    'url("img/6.jpg")',
    'url("img/7.jpg")',
    'url("img/8.jpg")',
    'url("img/9.jpg")',
]

let ImageIndex = 0;

function ImageNo() {
        if(ImageIndex<images.length-1) {
            ImageIndex++
        } else {
            ImageIndex = 0;
        }
    console.log(ImageIndex);
    return ImageIndex;
}

function backgroundChanger() {
        $("#test").fadeOut(750, () => {document.getElementById('test').style.backgroundImage = images[ImageNo()]});
        $("#test").fadeIn(750);
    } 
        



