// business logic
function sortList(arrayToSort) {
  arrayToSort.sort();
}

// ui logic
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const userInputs = document.querySelectorAll("input[name=groceries]:checked");
    const userList = Array.from(userInputs);

    const listHeading = document.createElement("h1"); 
    listHeading.append("Your list:");
    document.body.append(listHeading);

    let newList = [];
    userList.forEach(function(element) {
      newList.push(element.value.toUpperCase());
    });

    sortList(newList);

    const ul = document.createElement("ul");
    document.body.append(ul);

    newList.forEach(function(element) {
      const li = document.createElement("li");
      li.append(element);
      ul.append(li);
    });
  });
});