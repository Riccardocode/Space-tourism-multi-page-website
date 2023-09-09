import {destinations} from "../../data.js";

function injectDestinationPlanet(planet) {
    const destination = destinations.find((destination) => destination.name === planet);
    if (destination) {
        return `
            <div class="destination-left-col">
                <img
                  class="planet-image"
                  src="${destination.images.png}"
                  alt="${destination.name}"
                />
            </div>
            <div class="destination-right-col">
                <div class="destination-inner-menu">
                    <ul class="navigation-menu destination-menu">
                        ${destinations.map(dest => `
                            <a href="./destination.html?planet=${encodeURIComponent(dest.name)}">
                                <li class="subheading1 ${dest.name === planet ? 'navigation-menu-active' : ''}">${dest.name.toUpperCase()}</li>
                            </a>
                        `).join('')}
                    </ul>
                </div>
                <div class="heading1">${destination.name.toUpperCase()}</div>
                <div class="home-paragraph destination-paragraph">
                    ${destination.description}
                </div>
                <hr class="destination-break-line" />
                <div class="travel-info">
                    <div class="distance">
                        <div class="subheading2 text-color1">AVG. DISTANCE</div>
                        <div class="heading3">${destination.distance}</div>
                    </div>
                    <div class="travel-time">
                        <div class="subheading2 text-color1">EST. TRAVEL TIME</div>
                        <div class="heading3">${destination.travel}</div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Handle the case where no matching destination was found
        return '<p>Destination not found</p>';
    }

}

document.addEventListener("DOMContentLoaded", function () {
    // Get the value of the "planet" parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const planet = urlParams.get("planet");

    // Decode the URL-encoded parameter if needed
    const decodedPlanet = decodeURIComponent(planet);

    console.log(decodedPlanet); // This will log "Moon" to the console

    document.getElementsByClassName("destination-planet-and-text")[0].innerHTML = injectDestinationPlanet(planet);
  });