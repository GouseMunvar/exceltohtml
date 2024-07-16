let AddB = document.getElementById("addb");
let DelB = document.getElementById("delb");
let Book = document.querySelector(".bookmarks"); // Corrected selector with dot for class
let list = [];
let One=document.getElementById("one")

AddB.addEventListener("click", () => {
    let url = document.getElementById("input").value; // Get input value
    list.push(url); // Add url to list

    // Update the display of bookmarks
    Book.innerHTML = list.join('<br>');
});

DelB.addEventListener("click", () => {
    list=[]; 
    Book.innerHTML = list.join('<br>');
});
One.addEventListener("click", () => {
    list.pop()
    Book.innerHTML =  list.join('<br>');
});