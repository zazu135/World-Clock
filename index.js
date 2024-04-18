function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
      let losAngelesDateElement = losAngelesElement.querySelector(".date");
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");

      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
      let torontoDateElement = torontoElement.querySelector(".date");
      let torontoTimeElement = torontoElement.querySelector(".time");
      let torontoTime = moment().tz("Canada/Eastern");

      torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
      torontoTimeElement.innerHTML = torontoTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let palestineElement = document.querySelector("#palestine");
  if (palestineElement) {
      let palestineDateElement = palestineElement.querySelector(".date");
      let palestineTimeElement = palestineElement.querySelector(".time");
      let palestineTime = moment().tz("Asia/Gaza");

      palestineDateElement.innerHTML = palestineTime.format("MMMM Do YYYY");
      palestineTimeElement.innerHTML = palestineTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let ethiopiaElement = document.querySelector("#ethiopia");
  if (ethiopiaElement) {
      let ethiopiaDateElement = ethiopiaElement.querySelector(".date");
      let ethiopiaTimeElement = ethiopiaElement.querySelector(".time");
      let ethiopiaTime = moment().tz("Africa/Addis_Ababa");

      ethiopiaDateElement.innerHTML = ethiopiaTime.format("MMMM Do YYYY");
      ethiopiaTimeElement.innerHTML = ethiopiaTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");


  const flagMap = {
      "Algeria": "🇩🇿",
      "Barbados": "🇧🇧",
      "London": "🏴",
      "New York": "🇺🇸",
      "Auckland": "🇳🇿",
      "Palestine": "🇵🇸",
      "Ethiopia": "🇪🇹",
      "Los Angeles": "🇺🇸",
      "Dubai":"🇦🇪",
      "Amman":"🇯🇴",
      "Ciaro":"🇪🇬",
      
  };

  let flag = flagMap[cityName] ? flagMap[cityName] : "";
  citiesElement.innerHTML = `
  <div class="city">
      <div>
          <h2>${cityName} ${flag}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  <a href="index.html" style="color: black; font-size: 17px; text-decoration: underline;">All cities</a>
  `;
}




updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
