function injectHeader() {
    return `
    <div class="logo-container">
        <img src="./assets/shared/logo.svg" alt="logo" />
    </div>
    <div class="group-line-nav">
        <div class="line-header">
            <hr class="line" />
        </div>

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
                <li><strong class="page-number">02</strong> CREW</li>
            </a>
            
            <a class="nav-menu-header" href="./technology-vehicle.html">
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
