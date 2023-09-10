function injectHeader() {
    return `
    <div class="logo-container">
        <img src="./assets/shared/logo.svg" alt="logo" />
    </div>
    <button id="mobile-menu-toggle" class="mobile-menu-toggle">
        <div class="burger-icon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        </button>

    <!-- Mobile menu -->
    <div class="mobile-menu">
        <ul class="mobile-navigation-menu">
            <li><a href="./index.html">HOME</a></li>
            <li><a href="./destination.html?planet=${encodeURIComponent("Moon")}">DESTINATION</a></li>
            <li><a href="./crew.html?role=${encodeURIComponent("Commander")}">CREW</a></li>
            <li><a href="./technology.html?tech=${encodeURIComponent("Launch vehicle")}">TECHNOLOGY</a></li>
        </ul>
    </div>
     <div class="line-header">
            <hr class="line" />
        </div>    
    <div class="group-line-nav">
       

        <nav class="navigation-bar nav-text">
            <ul class="navigation-menu">
            <a class="nav-menu-header" href="./index.html">
                <li >
                <strong class="page-number">00</strong> HOME
                </li>
            </a>
            <a class="nav-menu-header" <a href="./destination.html?planet=${encodeURIComponent("Moon")}">
                <li><strong class="page-number">01</strong> DESTINATION</li>
            </a>
            <a class="nav-menu-header" href="./crew-commander.html">
            <a class="nav-menu-header" <a href="./crew.html?role=${encodeURIComponent("Commander")}">
                <li><strong class="page-number">02</strong> CREW</li>
            </a>
            
            <a class="nav-menu-header" href="./technology.html?tech=${encodeURIComponent("Launch vehicle")}">
                <li><strong class="page-number">03</strong> TECHNOLOGY</li>
            </a>
            </ul>
        </nav>
    </div>

   `;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByTagName("header")[0].innerHTML = injectHeader();
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    let currentPageURL = window.location.href;

    // Get all menu items
    let menuItems = document.querySelectorAll(".nav-menu-header");

    // Loop through menu items and check if their link matches the current page URL
    for (let i = 0; i < menuItems.length; i++) {
        let menuItemLink = menuItems[i].href;
        if (currentPageURL === menuItemLink) {
            menuItems[i].classList.add("navigation-menu-active");
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the navigation menu, toggle button, and mobile menu elements
    const navigationBar = document.querySelector(".navigation-bar");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Function to toggle the navigation menu and mobile menu
    function toggleMenu() {
        if (navigationBar.style.display === "block") {
            navigationBar.style.display = "none";
            mobileMenuToggle.classList.remove("active");
            mobileMenu.style.display = "none";
        } else {
            navigationBar.style.display = "block";
            mobileMenuToggle.classList.add("active");
            mobileMenu.style.display = "block";
        }
    }

    // Add a click event listener to the mobile menu toggle button
    mobileMenuToggle.addEventListener("click", toggleMenu);

    // Get the current page URL
    const currentPageURL = window.location.href;

    // Get all menu items
    const menuItems = document.querySelectorAll(".nav-menu-header");

    // Loop through menu items and check if their link matches the current page URL
    for (let i = 0; i < menuItems.length; i++) {
        const menuItemLink = menuItems[i].href;
        if (currentPageURL === menuItemLink) {
            menuItems[i].classList.add("navigation-menu-active");
        }
    }
});

