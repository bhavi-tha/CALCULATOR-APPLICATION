function myFunction(event) {
  if (
    event.key == "0" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/" ||
    event.key == "%" ||
    event.key == "."
  ) {
    document.querySelector("input").value += event.key;
  } else if (event.key == "Backspace" || event.key == "Delete") {
    back();
  } else if (event.key == "Enter") {
   solve();
  }else if (event.key == "c") {
    clr();
   }
   else if (event.key == "d") {
    dark();
   }

}

function solve() {
  let x = document.querySelector("input").value;
  
  let y = eval(x);
  
  // document.querySelector("input").value = y;
  if (y === undefined) {
    y = "Invalid Expression";
  }
  document.querySelector("input").value = y;
}


function clr() {
  document.querySelector("input").value = "";

}

function back() {
  let x = document.querySelector("input").value;
  let y = x.slice(0, -1);
  document.querySelector("input").value = y;
}

function dis(val) {
  document.querySelector("input").value += val;
}
function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementById("dark").classList.toggle("dark_icon");
 ementById("dark").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}

function darkicon() {
  document.getElementById("dark").classList.remove("light_icon");
  document.getElementById("dark").classList.add("dark_icon");

}

function color_change(){
  let x = document.getElementById("color").value
  document.getElementsByClassName("container").style.background = x

}
