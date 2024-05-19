// Function to show the video iframe and hide the image after 10 seconds
// function showVideo() {
//     document.getElementById("background-img").style.display = "none";
//     document.getElementById("background-video").style.display = "block";
// }
//
// // Function to hide the video iframe and show the image
// function showImage() {
//     document.getElementById("background-img").style.display = "block";
//     document.getElementById("background-video").style.display = "none";
// }
//
// // Show video after 10 seconds
// setTimeout(showVideo, 5000);

function showVideo() {
    document.getElementById("background-img").style.display = "none";
    document.getElementById("background-video").style.display = "block";
}

function showImage() {
    document.getElementById("background-img").style.display = "block";
    document.getElementById("background-video").style.display = "none";
}

function adjustDisplay() {
    var width = window.innerWidth;
    // console.log(width)
    if (width >= 300 && width <= 768) {
        // If the width is between 300 and 768, show only the image and turn off the timer
        showImage();
    } else {
        // For other widths, show the video after 5 seconds
        setTimeout(showVideo, 3000);
    }
}

// Call adjustDisplay initially and add event listener for resizing
adjustDisplay();
window.addEventListener('resize', adjustDisplay);


// ------------sroll then navbar fixed------------

// window.addEventListener('scroll', function () {
//     var headerMenu = document.getElementById('headerMenu');
//     if (window.scrollY > 0) {
//         headerMenu.classList.add('navbar-fixed');
//     } else {
//         headerMenu.classList.remove('navbar-fixed');
//     }
// });

window.addEventListener('scroll', function () {
    var headerMenu = document.getElementById('headerMenu');
    if (window.innerWidth >= 300 && window.innerWidth <= 1024) {
        headerMenu.classList.remove('navbar-fixed');
    } else {
        if (window.scrollY > 0) {
            headerMenu.classList.add('navbar-fixed');
        } else {
            headerMenu.classList.remove('navbar-fixed');
        }
    }
});

// window.addEventListener('resize', function () {
//     var headerMenu = document.getElementById('headerMenu');
//     if (window.innerWidth < 300 || window.innerWidth > 1024) {
//         if (window.scrollY > 0) {
//             headerMenu.classList.add('navbar-fixed');
//         } else {
//             headerMenu.classList.remove('navbar-fixed');
//         }
//     } else {
//         headerMenu.classList.add('navbar-fixed');
//     }
// });


const swiperEvent = new Swiper('.swiper-event', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

      autoplay: {
    delay: 5000, // milliseconds
    disableOnInteraction: false, // prevent auto-play from stopping on user interaction
  },

    slidesPerView: 5,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperFeature = new Swiper('.swiper-feature', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

      autoplay: {
    delay: 5000, // milliseconds
    disableOnInteraction: false, // prevent auto-play from stopping on user interaction
  },

    slidesPerView: 4,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



const swiperArticle = new Swiper('.swiper-article', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  //     autoplay: {
  //   delay: 5000, // milliseconds
  //   disableOnInteraction: false, // prevent auto-play from stopping on user interaction
  // },

    slidesPerView: 3,
    spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});