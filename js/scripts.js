// business logic
function sortList(arrayToSort) {
  arrayToSort.sort();
}

// ui logic
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  const mainPage = document.getElementById("mainPage")
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    mainPage.setAttribute("class", "hidden")

    const userInputs = document.querySelectorAll("input[name=groceries]:checked");
    const userList = Array.from(userInputs);
    const listHeading = document.createElement("h1"); 
    listHeading.append("Your list:");
    document.body.append(listHeading);
    const ul = document.createElement("ul");
    document.body.append(ul);
    
    let resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "button");
    resetBtn.append("Reset!");
    document.body.append(resetBtn);

    resetBtn.addEventListener("click", function() {
      location.reload();
    });

    let newList = [];
    userList.forEach(function(element) {
      newList.push(element.value.toUpperCase());
    });

    sortList(newList);

    newList.forEach(function(element) {
      const li = document.createElement("li");
      li.append(element);
      ul.append(li);
    });
  });
});