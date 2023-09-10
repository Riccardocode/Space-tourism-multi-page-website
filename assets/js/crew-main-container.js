import { crew } from "../../data.js";

function injectCrewMembers(role) {
  // Find the crew member object that matches the given role
  const crewMember = crew.find((member) => member.role === role);

  if (crewMember) {
    return `
        <div class="crew-left-col">
            <div class="crew-left-col-text">
                <div class="heading4 text-color1">${crewMember.role}</div>
                <div class="heading3 text-color-white">${crewMember.name}</div>
                <div class="subheading1 text-color1">
                    ${crewMember.bio}
                </div>
            </div>
            <div class="crew-inner-menu">
                ${crew
                  .map(
                    (member) => `
                    <a href="./crew.html?role=${encodeURIComponent(member.role)}">
                        <span class="crew-inner-dot-menu ${
                          member.role === role
                            ? "crew-inner-dot-menu-active"
                            : ""
                        }"></span>
                    </a>
                `
                  )
                  .join("")}
            </div>
        </div>
        <hr class="separator-line-mobile">
        <div class="crew-right-col">
            <img
                class="crew-member-image"
                src="${crewMember.images.png}"
                alt="${crewMember.name}"
            />
        </div>
    `;
  } else {
    // Handle the case where no matching crew member was found
    return "<p>Crew member not found</p>";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the value of the "role" parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const role = urlParams.get("role");

  // Decode the URL-encoded parameter if needed
  const decodedRole = decodeURIComponent(role);

  console.log(decodedRole); // This will log the role to the console

  document.getElementsByClassName("crew-main-container")[0].innerHTML =
  injectCrewMembers(role);
});
