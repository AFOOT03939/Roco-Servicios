let button = document.getElementById('search');
input = document.getElementById('myInput');
div = document.querySelectorAll(".card.border-0.col-lg-2.col-md-4.align-items-center");

function searchBar() {
  // Declare variables
  let input, filter, p, a, i, div, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  p = document.getElementsByClassName('product-Name');
  div = document.querySelectorAll(".card.border-0.col-lg-2.col-md-4.align-items-center");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < p.length-1; i++) {
    div[i].style.display = "";
    a = p[i+1];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      p[i+1].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}

button.addEventListener("click", function(){
    searchBar();
});

input.addEventListener("input", function() {
  if (input.value == "") {
    for (let i = 0; i < div.length; i++) {
      div[i].style.display = "";
    }
  }
});
