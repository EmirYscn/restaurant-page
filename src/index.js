function initialPageLoad() {
  const contentDiv = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Beary's Breakfast Bar";
  contentDiv.appendChild(title);

  const headlineDiv = document.createElement("div");
  headlineDiv.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like abear! This is exactly the kind of place that i like to return to again and again";
  headlineDiv.classList.add("headline");
  contentDiv.appendChild(headlineDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("hours");
  contentDiv.appendChild(hoursDiv);
  const hoursTitle = document.createElement("h3");
  hoursTitle.textContent = "Hours";
  hoursDiv.appendChild(hoursTitle);

  const pSunday = document.createElement("p");
  pSunday.textContent = "Sunday: 8am - 8pm";

  const pMonday = document.createElement("p");
  pMonday.textContent = "Monday: 8am - 8pm";

  const pTuesday = document.createElement("p");
  pTuesday.textContent = "Tuesday: 8am - 8pm";

  const pWednesday = document.createElement("p");
  pWednesday.textContent = "Wednesday: 8am - 8pm";

  const pThursday = document.createElement("p");
  pThursday.textContent = "Thursday: 8am - 8pm";

  const pFriday = document.createElement("p");
  pFriday.textContent = "Friday: 8am - 8pm";

  const pSaturday = document.createElement("p");
  pSaturday.textContent = "Saturday: 8am - 8pm";

  hoursDiv.appendChild(pSunday);
  hoursDiv.appendChild(pMonday);
  hoursDiv.appendChild(pTuesday);
  hoursDiv.appendChild(pWednesday);
  hoursDiv.appendChild(pThursday);
  hoursDiv.appendChild(pFriday);
  hoursDiv.appendChild(pSaturday);

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("location");
  contentDiv.appendChild(locationDiv);

  const locationTitle = document.createElement("h3");
  locationTitle.textContent = "Location";
  locationDiv.appendChild(locationTitle);

  const pLocation = document.createElement("p");
  pLocation.textContent = "123 Forest Drive. Forestville, Maine";
  locationDiv.appendChild(pLocation);
}

initialPageLoad();
