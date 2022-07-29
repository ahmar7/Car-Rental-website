// economy page toggling the description of images
let toggleDesc = () => {
  let first = document.getElementById("first");
  let second = document.getElementById("second");

  first.classList.add("hidden");
  second.classList.remove("hidden");
};
// economy page toggling the description of images

// Sporta page code
function searchFilter() {
  var search = document.getElementById("search").value.toUpperCase();
  console.log(search);
  var desc = document.getElementById("desc");
  var desc1 = document.getElementById("desc1");
  var desc2 = document.getElementById("desc2");
  var desc3 = document.getElementById("desc3");

  //filter the cars based on the search
  if (search == "") {
    //if the search is empty, show all the cars
    var cars = document.getElementsByClassName("car");

    desc.classList.add("hide_desc");
    desc1.classList.add("hide_desc");
    desc2.classList.add("hide_desc");
    desc3.classList.add("hide_desc");
    for (var i = 0; i < cars.length; i++) {
      cars[i].style.display = "block";
    }
  } else {
    //get the cars
    var cars = document.getElementsByClassName("car");

    //loop through the cars
    for (var i = 0; i < cars.length; i++) {
      //get the car
      var car = cars[i];
      //get the car's text
      var text = car.innerText.toUpperCase();
      console.log(text);
      //check if the search is in the text
      if (text.indexOf(search) == -1) {
        //if not, hide the car
        car.style.display = "none";
      } else {
        //if yes, show the car
        car.style.display = "block";
        desc.classList.remove("hide_desc");
        desc1.classList.remove("hide_desc");
        desc2.classList.remove("hide_desc");
        desc3.classList.remove("hide_desc");
      }
    }
  }
}
//    Sports page code
// Checkout page
let alertsub = () => {
  let pro = document.getElementById("pro");
  if (pro.value == "") {
  } else {
    alert("Thankyou for purchasing");
  }
};
