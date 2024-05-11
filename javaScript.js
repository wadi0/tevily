// Function to show the video iframe and hide the image after 10 seconds
function showVideo() {
    document.getElementById("background-img").style.display = "none";
    document.getElementById("background-video").style.display = "block";
}

// Function to hide the video iframe and show the image
function showImage() {
    document.getElementById("background-img").style.display = "block";
    document.getElementById("background-video").style.display = "none";
}

// Show video after 10 seconds
setTimeout(showVideo, 5000);


// ------------sroll then navbar fixed------------
window.addEventListener('scroll', function() {
    var headerMenu = document.getElementById('headerMenu');
    if (window.scrollY > 0) {
        headerMenu.classList.add('navbar-fixed');
    } else {
        headerMenu.classList.remove('navbar-fixed');
    }
});
