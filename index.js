const ramens = [
  { id: 1, 
    name: "Shoyu Ramen", 
    restaurant: "Ichiran", 
    image: "shoyu.jpg", 
    rating: 5, 
    comment: "Delicious!" },

  { id: 2, 
    name: "Miso Ramen",
    restaurant: "menya", 
    image: "miso.jpg", 
    rating: 4, 
    comment: "Very flavorful!" },

  { id: 3, 
    name: "Tonkotsu Ramen", 
    restaurant: "ramen-ya", 
    image: "tonkotsu.jpg", 
    rating: 4.5, 
    comment: "Rich and creamy!" }
];

// Display ramen images
function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramens.forEach(ramen => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.alt = ramen.name;
      img.dataset.id = ramen.id;
      img.addEventListener("click", handleClick);
      ramenMenu.appendChild(img);
  });
}

// Handle click on ramen image
function handleClick(event) {
  const ramenId = event.target.dataset.id;
  const ramen = ramens.find(r => r.id == ramenId);
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
  document.getElementById("ramen-rating").textContent =  `Rating: ${ramen.rating}`;
  document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}

// Handle new ramen form submission
function addSubmitListener() {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", event => {
      event.preventDefault();
      const newRamen = {
          id: ramens.length + 1,
          name: document.getElementById("new-name").value,
          restaurant: document.getElementById("new-restaurant").value,
          image: document.getElementById("new-image").value,
          rating: parseFloat(document.getElementById("new-rating").value),
          comment: document.getElementById("new-comment").value
      };
      ramens.push(newRamen);
      const img = document.createElement("img");
      img.src = newRamen.image;
      img.alt = newRamen.name;
      img.dataset.id = newRamen.id;
      img.addEventListener("click", handleClick);
      document.getElementById("ramen-menu").appendChild(img);
      form.reset();
  });
}

// Initialize the app
function main() {
  displayRamens();
  addSubmitListener();
  // Display the first ramen's details on page load
  if (ramens.length > 0) {
      const firstRamen = ramens[0];
      document.getElementById("ramen-name").textContent = firstRamen.name;
      document.getElementById("ramen-restaurant").textContent = firstRamen.restaurant;
      document.getElementById("ramen-rating").textContent = `Rating: ${firstRamen.rating}`;
      document.getElementById("ramen-comment").textContent = `Comment: ${firstRamen.comment}`;
  }
}

// Run the app after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", main);