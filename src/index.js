function getDog() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       showImage(this.responseText);
//       document.getElementById("dogPlaceHolder").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    xhttp.send();
}

function showImage(json) {
    var arrItems = [];
    arrItems = JSON.parse(json); 	// Populate array with JSON data.
    document.getElementById("dogPlaceHolder").src = arrItems.message;
}


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });