// JavaScript source code
//Lakshmi Vara Prasad Gatiganti
//ITMD 541-02 Graduate Student

// Requirement 1 - Change H1 heading to "Uplift Your Brand with Stellar Marketing"
(function () {
    let heroHeading = document.querySelector('#hero h1');
    if (heroHeading) heroHeading.textContent = "Uplift Your Brand with Stellar Marketing";
})();

// Requirement 2 - Change the hero subtext
(function () {
    let heroSubtext = document.querySelector('.text-xl.mb-6.text-white.relative.z-20');
    if (heroSubtext) {
        heroSubtext.innerHTML = 'Utilize cutting-edge strategies from Stellar Marketing to help your business ' +
            '<strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.';
    }
})();

// Requirement 3 - Change the hero background image
(function () {
    let heroSection = document.querySelector("#hero");
    if (heroSection) {
        heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
        heroSection.style.backgroundPosition = "center";
    }
})();

// Requirement 4 - Change navbar background color to match footer
(function () {
    let footer = document.querySelector('.bg-gray-800.text-white.p-4.mt-12');
    let navBar = document.querySelector('.bg-blue-600.text-white.p-4');
    if (footer && navBar) {
        navBar.style.backgroundColor = getComputedStyle(footer).backgroundColor;
    }
})();

// Requirement 5 - Remove "Get Started" button from the hero section
(function () {
    let getStartedButton = document.querySelector("#hero a");
    if (getStartedButton) {
        getStartedButton.remove(); // Removes the "Get Started" button
    }
})();

// Requirement 6 - Center align section headings
(function () {
    ["services", "solutions", "contact"].forEach(id => {
        let section = document.getElementById(id);
        if (section) {
            let heading = section.querySelector("h2");
            if (heading) heading.style.textAlign = "center";
        }
    });
})();

// Requirement 7 - Change icon colors for digital, branding, and social icons
document.addEventListener("DOMContentLoaded", function () {
    // Requirement 7.1 - Change color for Digital Marketing icon
    let digitalIcon = document.querySelector("[data-icon='digital']");
    if (digitalIcon) {
        digitalIcon.style.color = "#47C714"; // Green color for digital marketing icon
    }

    // Requirement 7.2 - Change color for Branding icon
    let brandingIcon = document.querySelector("[data-icon='brand']");
    if (brandingIcon) {
        brandingIcon.style.color = "#47C714"; // Green color for branding icon
    }

    // Requirement 7.3 - Change color for Social Media Management icon
    let socialIcon = document.querySelector("[data-icon='social']");
    if (socialIcon) {
        socialIcon.style.color = "#47C714"; // Green color for social media management icon
    }
});

// Requirement 8 - Change Digital Marketing Icon to "Ads Click"
(function () {
    let digitalIcon = document.querySelector("[data-icon='digital']");
    if (digitalIcon) {
        digitalIcon.textContent = "ads_click"; // Change digital marketing icon to 'Ads Click'
    }
})();

// Requirement 9 - Change layout to 4 columns at >=1024px
(function () {
    let productCardsSection = document.querySelector("[data-section='product_cards']");

    function updateGridLayout() {
        if (window.innerWidth >= 1024) {
            productCardsSection.classList.remove("md:grid-cols-2");
            productCardsSection.classList.add("lg:grid-cols-4");
        } else {
            productCardsSection.classList.remove("lg:grid-cols-4");
            productCardsSection.classList.add("md:grid-cols-2");
        }
    }

    window.addEventListener("resize", updateGridLayout);
    updateGridLayout(); // Run initially
})();

// Requirement 10 - Change the musicians image
(function () {
    let musiciansCard = document.querySelectorAll(".product_card");

    if (musiciansCard.length > 3) { // Ensuring it selects the 4th card (Musicians)
        let musiciansImage = musiciansCard[3].querySelector("img");
        if (musiciansImage) {
            musiciansImage.src = "https://fastly.picsum.photos/id/453/400/300.jpg?hmac=19cErdap35ZD3TFJZzBb6kEwO8dGJC90VTCHvuabLf0";
        }
    }
})();

// Requirement 11 - Form validation for graduate additional requirements
(function () {
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            let name = document.querySelector("#name")?.value.trim();
            let email = document.querySelector("#email")?.value.trim();

            if (name && email) {
                alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
            } else {
                alert("Please provide a name and email.");
            }
        });
    }
})();
