import {technology} from "../../data.js";

function injectTechnology(techName) {
    // Find the technology object that matches the given name
    const tech = technology.find((tech) => tech.name === techName);

    if (tech) {
        return `
            <div class="technology-inner-container-left-col">
                <div class="technology-vertical-menu">
                ${technology.map((item, index) => `
                <a href="./technology.html?tech=${encodeURIComponent(item.name)}">
                            <span class="technology-vertical-menu-number ${item.name === techName ? 'technology-vertical-menu-number-active' : ''}">${index + 1}</span>
                        </a>
                    `).join('')}
                </div>
                <div class="technology-text-left-col">
                    <div class="heading4 text-color1">The terminology...</div>
                    <div class="heading3 text-color-white">${tech.name.toUpperCase()}</div>
                    <div class="subheading1 text-color1">
                        ${tech.description}
                    </div>
                </div>
            </div>
            <div class="technology-inner-container-right-col">
                <img class="portrait-img"
                    src="${tech.images.portrait}"
                    alt="${tech.name}"
                />
                <img class="landscape-img" src="${tech.images.landscape}" alt="${tech.name}">
            </div>
        `;
    } else {
        // Handle the case where no matching technology was found
        return '<p>Technology not found</p>';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Get the value of the "technology" parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const techName = urlParams.get("tech");

    // Decode the URL-encoded parameter if needed
    const decodedTechName = decodeURIComponent(techName);

    console.log(decodedTechName); // This will log the technology name to the console

    document.getElementsByClassName("technology-inner-container")[0].innerHTML =
    injectTechnology(decodedTechName);
});
  