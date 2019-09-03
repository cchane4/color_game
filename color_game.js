
let num_squares = 6; 
let colors = []; 
let picked_color; 
let squares = document.querySelectorAll(".square");
let color_display = document.getElementById("color_display");
let message_display = document.querySelector("#message"); 
let h1 = document.querySelector("h1"); 
let reset_button = document.querySelector("#reset"); 
let mode_buttons = document.querySelectorAll(".mode"); 

init(); 

function init() { 
  set_up_mode_buttons(); 
  set_up_squares(); 
  reset(); 
}



function set_up_mode_buttons () { 
  for(let i = 0; i < mode_buttons.length; i++){ 
    mode_buttons[i].addEventListener("click", function (){ 
    mode_buttons[0].classList.remove("selected"); 
    mode_buttons[1].classList.remove("selected"); 
    this.classList.add("selected");
    this.textContent === "Easy" ? num_squares = 3 :num_squares = 6;
    reset();  
    }); 
  }

}


function set_up_squares (){ 
  // this code sets up the square event listeners 
  for (let i = 0; i < squares.length; i++){  
    squares[i].addEventListener("click", function(){ 
    // grab color of clicked square 
    let clicked_color = this.style.backgroundColor; 
    if (clicked_color === picked_color){ 
      message_display.textContent = "Correct!"; 
      reset_button.textContent = "Play Again?"; 
      change_colors(clicked_color);  
      h1.style.backgroundColor = clicked_color; 
    } else { 
      this.style.backgroundColor =  "#232323"; 
      message_display.textContent = "Try Again"; 
      }
    }); 
  }
}

 function reset () {
  colors = generate_random_colors(num_squares); 
  //pick a new random color from array 
   picked_color = pick_color() ; 
  // change color display to match picked color 
  color_display.textContent = picked_color;
  reset_button.textContent = "New Colors" 
    message_display.textContent = ""; 
  //change colors of squares on the page 
  for (let i = 0; i < squares.length; i++){
    if (colors[i]){
    squares[i].style.display = "block";   
    squares[i].style.backgroundColor = colors[i];
     } else { 
      squares[i].style.display = "none";  
     }
  }
    h1.style.backgroundColor = "steelblue"; 
 } 



reset_button.addEventListener("click", () => {
reset (); 
}); 

//loop through all squares 
//change color to match given color
let change_colors = (color) =>  { 
  for( let i = 0; i < squares.length; i++ ){ 
  squares[i].style.backgroundColor = color; 
  }  
} 

 //pick a random number 
  // use the number to access the color out of the array and return the color 
  /* we are trying to randomly pick a color and attach it to one index 
  of the arrary. even though the length of the array is 1 more than the highest index
  so the length is 6 but highest number we want is 5, but math.floor * math.random 
  assures we only choose indexes between 0 and 5 so we are good */
function pick_color() {
  let random = Math.floor(Math.random() * colors.length); 
  return colors[random]; 
}

function generate_random_colors (num) { 
let arr = []; 
  for (let i = 0; i < num; i++){ 
    arr.push(random_color()); 
  }
  return arr; 
}

function random_color() { 
let r = Math.floor(Math.random() * 256);  
let g = Math.floor(Math.random() * 256);  
let b  = Math.floor(Math.random() * 256); 
return "rgb(" + r + ", " + g + ", " + b + ")";
 } 