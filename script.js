// const jsonData = {
//   logoUrl: "https://battingblasters.com/media/1xbet.svg",
//   title: "100% SPORTS BETTING BONUS",
//   price: "₹20,000",
//   description: "BIGGEST BETTING PLATFORM",
//   rating: "https://battingblasters.com/media/4.5stars-2.svg",
//   score: "10",
//   upiAccepted: "UPI & Netbanking Accepted",
//   bonusLink:
//     "https://trimbkeswarmahadev10055412.o18.link/c?o=20437968&m=15045&a=426124",
//   visitLink:
//     "https://trimbkeswarmahadev10055412.o18.link/c?o=20437968&m=15045&a=426124",
//   visitName: "Visit 1XBET",
// };

import { jsonData } from "./data.js";

// Function to generate HTML dynamically
function generateHTML(data) {
  return `
  <div class="table-vsk">
  <div class="cel-xoo logo-vdr" style="background-color: #000000">
    <a
      href=""
    >
      <img id="myImg" src="${data.logoUrl}" />
    </a>
    <div class="box-s7n"></div>
    <div class="ctmsl style-ykS8V" id="style-ykS8V"></div>
    <div class="pxymo style-oQAss" id="style-oQAss"></div>
    <div class="iaaks style-PQXJ5" id="style-PQXJ5"></div>
  </div>
  <div class="cel-xoo bon-awo">
    <p class="style-hMAjw" id="style-hMAjw title-offer">
      ${data.title} <br />
      <b  id="price">${data.price} <br /> </b> <span id="desc">${data.description}</span>
    </p>
    <div class="leg-csx">
      <p class="tri-fw9" id="upiLink">${data.upiAccepted}</p>
    </div>
  </div>
  <div class="cel-xoo rat-4cv">
    <div>
      <img src="${data.rating}" />
    </div>
  </div>
  <div class="cel-xoo sco-gno d-md-pgj d-lg-fyg">${data.score}</div>
  <div class="cel-xoo get-55d">
    <a
      class="button-pgw text-i5o"
      href="${data.bonusLink}"
    >
      <span>Get Bonus </span>
    </a>
    <a
      class="visit-c4b"
      href="${data.visitLink}"
    >
      ${data.visitName}
    </a>
  </div>
  </div>
    `;
}

function generateMobileCard(data) {
  return `
  <div class="row-j9x cas-wr8">
  <div class="left-laz">
      <a href="">
          <img src="${data.logoUrl}" >
      </a>
      <div class="rat-l2w">
          <div class="score-hyp">
              <div class="row-zbe cas-wr8">Rating</div>
              <img src="https://battingblasters.com/media/4.5stars-2.svg" >
          </div>
          <div class="sco-8ly cas-wr8">${data.score}</div>
      </div>
  </div>
  <div class="right-os3">
      <div class="tri-bb4"></div>
      <a class="wrapper-bb3 cas-wr8" href="">
          <p id="style-YIK6y" class="style-YIK6y">${data.title} <br>
              <b class="big-cl8">${data.price}<br>
              </b>${data.description}
          </p>
      </a>
      <div class="legal-xs7 gra-ffs">${data.description}</div>
      <a class="button-o8j mob-kkq rou-s2f text-hjn" href="${data.bonusLink}">
          <span>Get Bonus </span>
      </a>
  </div>
</div>
    `;
}

// Fetch JSON data and generate HTML
document.addEventListener("DOMContentLoaded", function () {
  const tableContainer = document.querySelector(".list-att");
  const mobContainer = document.querySelector(".list-ytm");
  //   if (tableContainer) {
  jsonData.forEach((data) => {
    // Generate HTML for the current data object
    const html = generateHTML(data);

    const mobileCard = generateMobileCard(data);
    mobContainer.innerHTML += mobileCard;
    // Append the generated HTML to the existing HTML content of tableContainer
    tableContainer.innerHTML += html;
  });
  //   }
});

// ------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>

// script.js
