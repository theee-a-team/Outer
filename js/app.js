
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("eyes1").classList.add("eyes")
    document.getElementById("eyes2").classList.add("eyes")
    setTimeout(overlayFadeOut, 2000)
    setInterval(backgroundChanger, 7500);
});

function overlayFadeOut() {
    $("#overlay").fadeOut(600);
}

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

let randomImageIndex = 0;

function randomImageNo() {
    let newRandomIndex = Math.floor(Math.random() * 10)
    if (newRandomIndex === randomImageIndex) {
        newRandomIndex++;
        randomImageIndex = newRandomIndex;
        return newRandomIndex
        
    } else {
        return newRandomIndex
    }
}
    
function backgroundChanger() {
        $("#test").fadeOut(750, () => {document.getElementById('test').style.backgroundImage = images[randomImageNo()]});
        $("#test").fadeIn(750);
    } 
        



