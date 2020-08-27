// Selector
const groInput = document.querySelector(".gro-input");
const groBtn = document.querySelector(".gro-btn");
const groList = document.querySelector(".gro-list");
const filterOpt = document.querySelector('.filter-gro');

// Event Listeners
groBtn.addEventListener("click", addGroceries);
groList.addEventListener("click", deleteCheck);
filterOpt.addEventListener("click", filterGroceries);
document.addEventListener('DOMContentLoaded', getGroceriesList);

// Functions
function addGroceries(event) {
  // console.log("hello");
  // Prevent form from submitting
  event.preventDefault();
  if (groInput.value !== "") {
    // Groceries Item div
    const groDiv = document.createElement("div");
    groDiv.classList.add("gro-items");

    // Create LI
    const newItem = document.createElement("li");
    newItem.innerText = groInput.value;
    newItem.classList.add("item");

    groDiv.appendChild(newItem);

    // Add item to local storage
    saveLocalItems(groInput.value);

    // Check mark button
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    groDiv.appendChild(completedBtn);

    // Check delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("trash-btn");
    deleteBtn.value = groInput.value;
    groDiv.appendChild(deleteBtn);

    // Append to List
    groList.appendChild(groDiv);

    // Clear groceries Input value
    groInput.value = "";
  }
}

function deleteCheck(e) {
  // console.log(event.target);
  const item = e.target;
  // console.log(item.classList[0]);

  // DELETE item
  if (item.classList[0] === "trash-btn") {

    const elem = item.parentElement;
    elem.classList.add('fall');
    
    // console.log(elem.childNodes[0].innerText);
    removeLocalItems(elem.childNodes[0].innerText);

    elem.addEventListener('transitionend', function() {
      // console.log(item.value);
      elem.remove();
    });
    // elem.remove();
  }

  // CHECK mark
  if (item.classList[0] === "complete-btn") {
    const elem = item.parentElement;
    elem.classList.toggle("completed");
  }
}

function filterGroceries(e) {
  const elements = groList.childNodes;
  console.log(elements);
  
  elements.forEach((elem) => {
    console.log(e.target.value, elem);

    switch(e.target.value) {
      case 'all':
        elem.style.display = "flex";
        break;
      case 'completed':
        if (elem.classList.contains("completed")){
          elem.style.display = "flex";
        } else {
          elem.style.display = "none";
        }
        break;
      case 'uncompleted':
        if (!elem.classList.contains("completed")) {
          elem.style.display = "flex";
        } else {
          elem.style.display = "none";
        }
        break;
    };
  });
}

function saveLocalItems(item) {
  // CHECK if have items in storage
  let items = [];
  if (localStorage.getItem('groceries') === null) {
    groceries = []
  } else {
    items = JSON.parse(localStorage.getItem('groceries'));
  }

  // Add item to storage
  items.push(item);
  localStorage.setItem('groceries', JSON.stringify(items));
}

function getGroceriesList(){
  let items ;
  if (localStorage.getItem('groceries') === null) {
    items = []
  } else {
    items = JSON.parse(localStorage.getItem('groceries'));
  }

  items.forEach(item => {
    // Groceries Item div
    const groDiv = document.createElement("div");
    groDiv.classList.add("gro-items");

    // Create LI
    const newItem = document.createElement("li");
    newItem.innerText = item;
    newItem.classList.add("item");

    groDiv.appendChild(newItem);


    // Check mark button
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    groDiv.appendChild(completedBtn);

    // Check delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("trash-btn");
    deleteBtn.value = item;
    groDiv.appendChild(deleteBtn);

    // Append to List
    groList.appendChild(groDiv);
  })
}

function removeLocalItems(itemVal){

  let items ;
  if (localStorage.getItem('groceries') === null) {
    items = []
  } else {
    items = JSON.parse(localStorage.getItem('groceries'));
  }

  items.splice(items.indexOf(itemVal), 1);

  localStorage.setItem("groceries", JSON.stringify(items));
}