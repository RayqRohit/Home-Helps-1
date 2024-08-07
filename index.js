function preload(){
    document.addEventListener("DOMContentLoaded", function() {
        // Add an event listener for when the entire page finishes loading
        window.addEventListener('load', function() {
          const preloader = document.getElementById('preloader');
          const content = document.getElementById('content');

          // Hide the preloader and show the content after the animation ends
          const loadingLine = document.querySelector('.loading-line');
          loadingLine.addEventListener('animationend', function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
          });
        });
      });

}

preload()

document.addEventListener('DOMContentLoaded', function() {
    
});


document.addEventListener('DOMContentLoaded', function () {
    const locationInputGroup = document.getElementById('location-input-group');
    const modal = document.getElementById('location-modal');
    const closeButton = document.querySelector('.modal .close');

    locationInputGroup.addEventListener('click', function () {
        modal.classList.add('show');
    });

    closeButton.addEventListener('click', function () {
        modal.classList.remove('show');
    });

    // Optional: Close modal when clicking outside the content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});



// modal-2
document.addEventListener('DOMContentLoaded', function () {
   

    // Modal for service details
    const serviceModal = document.getElementById('service-modal');
    const serviceImages = document.querySelectorAll('.h-img');
    const closeServiceModal = serviceModal.querySelector('.close');

    serviceImages.forEach(img => {
        img.addEventListener('click', () => {
            serviceModal.classList.add('show');
        });
    });

    closeServiceModal.addEventListener('click', () => {
        serviceModal.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === serviceModal) {
            serviceModal.classList.remove('show');
        }
    });

});


// modal-3








function searchWorks() {
    const inputElement = document.getElementById('search-input');
    const words = ["Kitchen Cleaning", "AC Services", "Facial"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Timing values
    const typingSpeed = 50; // Speed at which characters are typed
    const deletingSpeed = 50; // Speed at which characters are deleted
    const pauseDuration = 1500; // Pause before starting to delete
    const pauseBetweenWords = 200; // Pause before typing the next word

    function type() {
        const fixedText = 'Search for "';
        const currentWord = words[wordIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        // Update placeholder text
        inputElement.placeholder = fixedText + currentWord.substring(0, charIndex) + '"';

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, pauseDuration);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, pauseBetweenWords);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(type, 200);
    });
}

searchWorks();



function sliderS() {
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.carousel-track');
        const prevButton = document.querySelector('.carousel-prev');
        const nextButton = document.querySelector('.carousel-next');

        let index = 0;
        const itemsToShow = 4;
        const totalItems = carousel.children.length;

        function updateCarousel() {
            const offset = -index * (100 / itemsToShow);
            carousel.style.transform = `translateX(${offset}%)`;
            checkButtons();
        }

        function checkButtons() {
            prevButton.disabled = index === 0;
            nextButton.disabled = index >= totalItems - itemsToShow;
        }

        prevButton.addEventListener('click', function () {
            if (index > 0) {
                index -= 1;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function () {
            if (index < totalItems - itemsToShow) {
                index += 1;
                updateCarousel();
            }
        });

        updateCarousel(); // Initial check
    });

}

sliderS()


function sliderS2() {
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.carousel-track-2');
        const prevButton = document.querySelector('.carousel-prev-2');
        const nextButton = document.querySelector('.carousel-next-2');

        let index = 0;
        const itemsToShow = 3;
        const totalItems = carousel.children.length;

        function updateCarousel() {
            const offset = -index * (100 / itemsToShow);
            carousel.style.transform = `translateX(${offset}%)`;
            checkButtons();
        }

        function checkButtons() {
            prevButton.disabled = index === 0;
            nextButton.disabled = index >= totalItems - itemsToShow;
        }

        prevButton.addEventListener('click', function () {
            if (index > 0) {
                index -= itemsToShow;
                if (index < 0) {
                    index = 0;
                }
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function () {
            if (index < totalItems - itemsToShow) {
                index += itemsToShow;
                if (index > totalItems - itemsToShow) {
                    index = totalItems - itemsToShow;
                }
                updateCarousel();
            }
        });

        updateCarousel(); // Initial check
    });
}

sliderS2();



function sliderS3() {
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.carousel-track-3');
        const prevButton = document.querySelector('.carousel-prev-3');
        const nextButton = document.querySelector('.carousel-next-3');

        let index = 0;
        const itemsToShow = 5;
        const totalItems = carousel.children.length;

        function updateCarousel() {
            const offset = -index * (100 / itemsToShow);
            carousel.style.transform = `translateX(${offset}%)`;
            checkButtons();
        }

        function checkButtons() {
            prevButton.disabled = index === 0;
            nextButton.disabled = index >= totalItems - itemsToShow;
        }

        prevButton.addEventListener('click', function () {
            if (index > 0) {
                index -= 1;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function () {
            if (index < totalItems - itemsToShow) {
                index += 1;
                updateCarousel();
            }
        });

        updateCarousel(); // Initial check
    });
}

sliderS3();

function sliderS4() {
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.carousel-track-4');
        const prevButton = document.querySelector('.carousel-prev-4');
        const nextButton = document.querySelector('.carousel-next-4');

        let index = 0;
        const itemsToShow = 5;
        const totalItems = carousel.children.length;

        function updateCarousel() {
            const offset = -index * (100 / itemsToShow);
            carousel.style.transform = `translateX(${offset}%)`;
            checkButtons();
        }

        function checkButtons() {
            prevButton.disabled = index === 0;
            nextButton.disabled = index >= totalItems - itemsToShow;
        }

        prevButton.addEventListener('click', function () {
            if (index > 0) {
                index -= 1;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function () {
            if (index < totalItems - itemsToShow) {
                index += 1;
                updateCarousel();
            }
        });

        updateCarousel(); // Initial check
    });
}

sliderS4();


function sliderS5() {
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.carousel-track-5');
        const prevButton = document.querySelector('.carousel-prev-5');
        const nextButton = document.querySelector('.carousel-next-5');

        let index = 0;
        const itemsToShow = 5;
        const totalItems = carousel.children.length;

        function updateCarousel() {
            const offset = -index * (100 / itemsToShow);
            carousel.style.transform = `translateX(${offset}%)`;
            checkButtons();
        }

        function checkButtons() {
            prevButton.disabled = index === 0;
            nextButton.disabled = index >= totalItems - itemsToShow;
        }

        prevButton.addEventListener('click', function () {
            if (index > 0) {
                index -= 1;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function () {
            if (index < totalItems - itemsToShow) {
                index += 1;
                updateCarousel();
            }
        });

        updateCarousel(); // Initial check
    });
}

sliderS5();


function sliderS6() {
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.carousel-track-6');
        const prevButton = document.querySelector('.carousel-prev-6');
        const nextButton = document.querySelector('.carousel-next-6');

        let index = 0;
        const itemsToShow = 5;
        const totalItems = carousel.children.length;

        function updateCarousel() {
            const offset = -index * (100 / itemsToShow);
            carousel.style.transform = `translateX(${offset}%)`;
            checkButtons();
        }

        function checkButtons() {
            prevButton.disabled = index === 0;
            nextButton.disabled = index >= totalItems - itemsToShow;
        }

        prevButton.addEventListener('click', function () {
            if (index > 0) {
                index -= 1;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function () {
            if (index < totalItems - itemsToShow) {
                index += 1;
                updateCarousel();
            }
        });

        updateCarousel(); // Initial check
    });
}

sliderS6();


