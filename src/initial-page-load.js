function homePageLoad() {
  // Content Div
  const contentDiv = document.querySelector("#content");
  // clear previous page
  contentDiv.innerHTML = "";
  // Main title

  const headDiv = document.createElement("div");
  contentDiv.appendChild(headDiv);
  const title = document.createElement("h1");
  title.textContent = "Beary's Breakfast Bar";
  headDiv.appendChild(title);
  headDiv.classList.add("head");

  // Headline Div
  const headlineDiv = document.createElement("div");
  const headlinePara = document.createElement("p");
  headlinePara.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like abear! This is exactly the kind of place that i like to return to again and again";
  headlineDiv.classList.add("headline");
  contentDiv.appendChild(headlineDiv);
  headlineDiv.appendChild(headlinePara);

  // Hours Div
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

function menuPageLoad() {
  // Content Div
  const contentDiv = document.querySelector("#content");
  // clear previous page
  contentDiv.innerHTML = "";

  //Head div
  const headDiv = document.createElement("div");
  headDiv.classList.add("head");
  const title = document.createElement("h1");
  title.textContent = "Menu";
  contentDiv.appendChild(headDiv);
  headDiv.appendChild(title);

  // Menu content

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-container");
  contentDiv.appendChild(menuContent);

  //Beverages Div
  const beveragesDiv = document.createElement("div");
  beveragesDiv.classList.add("beverages-container");
  menuContent.appendChild(beveragesDiv);

  const beveragesHeadDiv = document.createElement("div");
  beveragesHeadDiv.classList.add("beverages-head");
  beveragesDiv.appendChild(beveragesHeadDiv);

  const beveragesHeadDivTitle = document.createElement("h2");
  beveragesHeadDivTitle.textContent = "Beverages";
  beveragesHeadDiv.appendChild(beveragesHeadDivTitle);

  const beveragesContent = document.createElement("div");
  beveragesContent.classList.add("beverages-content");
  beveragesDiv.appendChild(beveragesContent);

  generateMenuContent(
    beveragesContent,
    "beverage",
    "Honey Tea",
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
    2
  );
  // generateMenuContent(
  //   beveragesContent,
  //   "beverage",
  //   "Beary Tea",
  //   "A comforting, almost filling, tea that is infused with the flowers of several kinds of berries. Best served cold, but can be served hot on request",
  //   3
  // );

  // Sides Div
  const sidesDiv = document.createElement("div");
  sidesDiv.classList.add("sides-container");
  menuContent.appendChild(sidesDiv);

  const sidesHeadDiv = document.createElement("div");
  sidesHeadDiv.classList.add("sides-head");
  sidesDiv.appendChild(sidesHeadDiv);

  const sidesHeadDivTitle = document.createElement("h2");
  sidesHeadDivTitle.textContent = "Sides";
  sidesHeadDiv.appendChild(sidesHeadDivTitle);

  const sidesContent = document.createElement("div");
  sidesContent.classList.add("sides-content");
  sidesDiv.appendChild(sidesContent);

  generateMenuContent(
    sidesContent,
    "side",
    "Toast and Jam",
    "A slice of toast, your choice of bread, and our homemade blackberry jam",
    1
  );
  // generateMenuContent(
  //   sidesContent,
  //   "side",
  //   "Fresh Fruit",
  //   "A small bowl of fresh fruit, whatever we find at the market for the day",
  //   3
  // );

  // Main Dishes div
  const mainDishesDiv = document.createElement("div");
  mainDishesDiv.classList.add("main-dishes-container");
  menuContent.appendChild(mainDishesDiv);

  const mainDishesHeadDiv = document.createElement("div");
  mainDishesHeadDiv.classList.add("main-dishes-head");
  const mainDishesHeadDivTitle = document.createElement("h2");
  mainDishesHeadDivTitle.textContent = "Main Dishes";
  mainDishesDiv.appendChild(mainDishesHeadDiv);
  mainDishesHeadDiv.appendChild(mainDishesHeadDivTitle);

  const mainDishesContent = document.createElement("div");
  mainDishesContent.classList.add("main-dishes-content");
  mainDishesDiv.appendChild(mainDishesContent);
  generateMenuContent(
    mainDishesContent,
    "main-dish",
    "Pancakes",
    "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup",
    "5"
  );
  // generateMenuContent(
  //   mainDishesContent,
  //   "main-dish",
  //   "French Toast",
  //   "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup",
  //   5
  // );
}

function contactPageLoad() {
  // Content Div
  const contentDiv = document.querySelector("#content");
  // clear previous page
  contentDiv.innerHTML = "";

  // Head div
  const headDiv = document.createElement("div");
  headDiv.classList.add("head");
  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  contentDiv.appendChild(headDiv);
  headDiv.appendChild(title);

  // Content div
  const contactContent = document.createElement("div");
  contactContent.classList.add("contact-content");
  contentDiv.appendChild(contactContent);

  generateContactContent(
    contactContent,
    "Mama Bear",
    "Chef",
    "555-555-555",
    "totallyRealEmail@notFake.com"
  );
  generateContactContent(
    contactContent,
    "Papa Bear",
    "Manager",
    "555-555-555",
    "totallyRealEmail@notFake.com"
  );
  generateContactContent(
    contactContent,
    "Baby Bear",
    "Waiter",
    "555-555-555",
    "totallyRealEmail@notFake.com"
  );
}
function generateContactContent(contentDiv, title, role, phone, mail) {
  const div = document.createElement("div");
  div.classList.add("contact");
  contentDiv.appendChild(div);

  const contactTitle = document.createElement("h3");
  contactTitle.textContent = title;
  const contactParaRole = document.createElement("p");
  contactParaRole.textContent = role;
  const contactParaPhone = document.createElement("p");
  contactParaPhone.textContent = phone;
  const contactParaMail = document.createElement("p");
  contactParaMail.textContent = mail;

  div.appendChild(contactTitle);
  div.appendChild(contactParaRole);
  div.appendChild(contactParaPhone);
  div.appendChild(contactParaMail);
}

function generateMenuContent(contentDiv, type, title, para, cost) {
  const div = document.createElement("div");
  div.classList.add(`${type}`);

  const contentTitle = document.createElement("h3");
  contentTitle.textContent = title;

  const contentPara = document.createElement("p");
  contentPara.textContent = para;

  const contentCostPara = document.createElement("p");
  contentCostPara.textContent = `$${cost}`;

  div.appendChild(contentTitle);
  div.appendChild(contentPara);
  div.appendChild(contentCostPara);
  contentDiv.appendChild(div);
}

export { homePageLoad, menuPageLoad, contactPageLoad };
