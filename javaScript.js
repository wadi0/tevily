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

window.addEventListener('scroll', function () {
    var headerMenu = document.getElementById('headerMenu');
    var headerTop = document.querySelector('.header-top');
    if (window.innerWidth > 1024) {
        if (window.scrollY > headerTop.clientHeight) {
            headerMenu.classList.add('navbar-fixed');
        } else {
            headerMenu.classList.remove('navbar-fixed');
        }
    } else {
        headerMenu.classList.remove('navbar-fixed');
    }
});


function updateFlexDirection() {
    const flexContainer = document.getElementById('search-form-background');
    if (window.innerWidth <= 800) {
        flexContainer.classList.add('column');
    } else {
        flexContainer.classList.remove('column');
    }
}


function displayHideFilter() {
    const filterRemove = document.getElementById('filter-box');
    if (window.innerWidth <= 800) {
        filterRemove.classList.add('filter-hide');
    } else {
        filterRemove.classList.remove('filter-hide');
    }
}

updateFlexDirection();
displayHideFilter();

// Run on window resize
window.addEventListener('resize', function () {
    updateFlexDirection();
    displayHideFilter();
});


const swiperEvent = new Swiper('.swiper-event', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000, // milliseconds
        disableOnInteraction: false, // prevent auto-play from stopping on user interaction
    },

    slidesPerView: 5,
    spaceBetween: 30,

    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5,
        },
        // when window width is >= 1024px and < 1200px
        1024: {
            slidesPerView: 4,
        },
        // when window width is >= 560px and < 1024px
        724: {
            slidesPerView: 3,
        },
        560: {
            slidesPerView: 2,
        },
        // when window width is >= 300px and < 560px
        300: {
            slidesPerView: 1,
        },
        // when window width is < 300px
        0: {
            slidesPerView: 1,
        }
    },

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

window.addEventListener('resize', function () {
    swiperEvent.update();
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
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
        },
        // when window width is >= 1024px and < 1200px
        1024: {
            slidesPerView: 3,
        },
        // when window width is >= 560px and < 1024px
        800: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
        },
        // when window width is >= 300px and < 560px
        300: {
            slidesPerView: 1,
        },
        // when window width is < 300px
        0: {
            slidesPerView: 1,
        }
    },

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

window.addEventListener('resize', function () {
    swiperFeature.update();
});


const swiperArticle = new Swiper('.swiper-article', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000, // milliseconds
        disableOnInteraction: false, // prevent auto-play from stopping on user interaction
    },

    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
        },
        // when window width is >= 1024px and < 1200px
        1024: {
            slidesPerView: 3,
        },
        // when window width is >= 560px and < 1024px
        800: {
            slidesPerView: 2,
        },
        721: {
            slidesPerView: 2
        },
        720: {
            slidesPerView: 1,
        },
        // when window width is >= 300px and < 560px
        300: {
            slidesPerView: 1,
        },
        // when window width is < 300px
        0: {
            slidesPerView: 1,
        }
    },

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

window.addEventListener('resize', function () {
    swiperArticle.update();
});

// -----------destination----------
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the destination span element
    const destinationSpan = document.querySelector('.location-destination .destination');
    // Get the location list element
    const locationList = document.querySelector('.location-list');
    // Get the location destination box element
    const locationDestinationBox = document.querySelector('.location-destination-box');

    // Show the list when the destination box is clicked
    locationDestinationBox.addEventListener('click', () => {
        locationList.style.display = locationList.style.display === 'none' ? 'block' : 'none';
    });

    // Get all list items inside the location list
    const locationItems = document.querySelectorAll('.location-list li');

    // Loop through each list item and add a click event listener
    locationItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update the destination span's text content to the clicked item's value
            destinationSpan.textContent = item.getAttribute('value');
            // Hide the location list
            locationList.style.display = 'none';
        });
    });
});


//--------activity----------------

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the destination span element
    const activitySpan = document.querySelector('.location-destination .activity');
    // Get the location list element
    const activityList = document.querySelector('.activity-list');
    // Get the location destination box element
    const locationDestinationBox = document.querySelector('.activity-destination-box');

    // Show the list when the destination box is clicked
    locationDestinationBox.addEventListener('click', () => {
        activityList.style.display = activityList.style.display === 'none' ? 'block' : 'none';
    });

    // Get all list items inside the location list
    const activityItems = document.querySelectorAll('.activity-list li');

    // Loop through each list item and add a click event listener
    activityItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update the destination span's text content to the clicked item's value
            activitySpan.textContent = item.getAttribute('value');
            // Hide the location list
            activityList.style.display = 'none';
        });
    });
});


