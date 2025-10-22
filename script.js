
const recipes = [
  "Spaghetti with creamy tomato sauce 🍝",
  "Veggie stir-fry with noodles 🍜",
  "Pancakes with honey and fruit 🥞",
];

const foodImages = [
  "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg",
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
];

const recipeText = document.getElementById("recipeText");
const recipeImage = document.getElementById("recipeImage");
const newRecipeBtn = document.getElementById("newRecipe");

newRecipeBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  recipeText.textContent = recipes[randomIndex];
  recipeImage.src = foodImages[randomIndex];
});
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItem");
const itemList = document.getElementById("itemList");
addItemBtn.addEventListener("click", () => {
const itemText = itemInput.value.trim();
if (itemText === "") {
alert("Please enter an item!");
 return;
  }
  const li = document.createElement("li");
  li.textContent = itemText;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "10px";
  removeBtn.addEventListener("click", () => {
  itemList.removeChild(li);
  });

  li.appendChild(removeBtn);
  itemList.appendChild(li);

  itemInput.value = ""; 
});