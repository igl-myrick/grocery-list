window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const userInputs = document.querySelectorAll("input[name=groceries]:checked");
    const userList = Array.from(userInputs);

    const listHeading = document.createElement("h1"); 
    listHeading.append("Your list:");
    document.body.append(listHeading);

    userList.forEach(function(element) {
      const listParagraph = document.createElement("p");
      listParagraph.append(element.value);
      document.body.append(listParagraph);
    });
  });
});