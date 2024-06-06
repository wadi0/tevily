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

// -----------destination--activity----------

document.addEventListener('DOMContentLoaded', (event) => {
    // Location List Functionality
    const destinationSpan = document.querySelector('.location-destination .destination');
    const locationList = document.querySelector('.location-list');
    const locationDestinationBox = document.querySelector('.location-destination-box');
    const locationDownIcon = locationDestinationBox.querySelector('.fa-angle-down');
    const locationUpIcon = locationDestinationBox.querySelector('.fa-angle-up');

    // Set initial state
    locationList.style.display = 'none';
    locationDownIcon.style.display = 'inline';
    locationUpIcon.style.display = 'none';

    locationDestinationBox.addEventListener('click', (e) => {
        const isLocationListVisible = locationList.style.display === 'block';
        locationList.style.display = isLocationListVisible ? 'none' : 'block';
        locationDownIcon.style.display = isLocationListVisible ? 'inline' : 'none';
        locationUpIcon.style.display = isLocationListVisible ? 'none' : 'inline';
        activityList.style.display = 'none'; // Hide the activity list
        activityDownIcon.style.display = 'inline'; // Show the down icon for activity
        activityUpIcon.style.display = 'none'; // Hide the up icon for activity
        e.stopPropagation();
    });

    const locationItems = document.querySelectorAll('.location-list li');

    locationItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            destinationSpan.textContent = item.getAttribute('value');
            locationList.style.display = 'none';
            locationDownIcon.style.display = 'inline';
            locationUpIcon.style.display = 'none';
        });
    });

    // Activity List Functionality
    const activitySpan = document.querySelector('.location-destination .activity');
    const activityList = document.querySelector('.activity-list');
    const activityDestinationBox = document.querySelector('.activity-destination-box');
    const activityDownIcon = activityDestinationBox.querySelector('.fa-angle-down');
    const activityUpIcon = activityDestinationBox.querySelector('.fa-angle-up');

    // Set initial state
    activityList.style.display = 'none';
    activityDownIcon.style.display = 'inline';
    activityUpIcon.style.display = 'none';

    const toggleActivityList = () => {
        const isActivityListVisible = activityList.style.display === 'block';
        activityList.style.display = isActivityListVisible ? 'none' : 'block';
        activityDownIcon.style.display = isActivityListVisible ? 'inline' : 'none';
        activityUpIcon.style.display = isActivityListVisible ? 'none' : 'inline';
    };

    activityDestinationBox.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleActivityList();
        locationList.style.display = 'none'; // Hide the location list
        locationDownIcon.style.display = 'inline'; // Show the down icon for location
        locationUpIcon.style.display = 'none'; // Hide the up icon for location
    });

    const activityItems = document.querySelectorAll('.activity-list li');

    activityItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            activitySpan.textContent = item.getAttribute('value');
            activityList.style.display = 'none';
            activityDownIcon.style.display = 'inline';
            activityUpIcon.style.display = 'none';
        });
    });

    // Add event listener to document to hide both lists when clicking outside
    document.addEventListener('click', (e) => {
        if (!locationDestinationBox.contains(e.target) && !locationList.contains(e.target)) {
            locationList.style.display = 'none';
            locationDownIcon.style.display = 'inline';
            locationUpIcon.style.display = 'none';
        }
        if (!activityDestinationBox.contains(e.target) && !activityList.contains(e.target)) {
            activityList.style.display = 'none';
            activityDownIcon.style.display = 'inline';
            activityUpIcon.style.display = 'none';
        }
    });
});


//--------date form-------------------

$(document).ready(function () {
    setDatepicker("datepicker");
});

function setDatepicker(id) {
    $("#" + id).datepicker({
        format: "mm/dd/yyyy",
        orientation: "bottom auto",
        autoclose: true
    }).on('changeDate', function (e) {
        var selectedDate = e.format(0, "mm/dd/yyyy");
        $('#selected-date').text(selectedDate);
    });

    $(".input-group-text").click(function () {
        $("#" + id).datepicker('show');
    });
}

//-----------close side menu-----------

document.addEventListener('DOMContentLoaded', function () {
    // Show the header-mobile div when the three-line icon is clicked
    document.getElementById('show-icon').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the link
        document.getElementById('header-mobile').classList.add('active-sidebar');
    });

    // Hide the header-mobile div when the close icon is clicked
    document.getElementById('close-icon').addEventListener('click', function () {
        document.getElementById('header-mobile').classList.remove('active-sidebar');
    });
});