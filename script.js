var currentImageIndex = -1,
maxImageIndex = 0,
images = [],
changeInterval = 2000;

var setUp = function() {
images = document.images;
maxImageIndex = images.length;
currentImageIndex = 0;
};

var changeBanner = function() {
var i;

currentImageIndex = (currentImageIndex >= maxImageIndex - 1) ? 0 : currentImageIndex += 1;

for (i = 0; i < maxImageIndex; i += 1) {
    images[i].hidden = (i !== currentImageIndex);
}
};

window.onload = function() {
setUp();
images[currentImageIndex].hidden = false; 
setInterval(changeBanner, changeInterval); 
};