

let colors = generate_random_colors (6); 

let squares = document.querySelectorAll(".square");
let picked_color = pick_color() ; 
let color_display = document.getElementById("color_display");
let message_display = document.querySelector("#message"); 
let h1 = document.querySelector("h1"); 
let reset_button = document.querySelector("#reset"); 

reset_button.addEventListener("click", function(){
  // generate all new colors 
   colors = generate_random_colors (6); 
  //pick a new random color from array 
   picked_color = pick_color() ; 
  // change color display to match picked color 
  color_display.textContent = picked_color; 
  //change colors of squares on the page 
  for (let i = 0; i < squares.length; i++){ 
    squares[i].style.backgroundColor = colors[i];
    h1.style.background = "#232323";  
  }
}); 

color_display.textContent = picked_color; 

for (let i = 0; i < squares.length; i++){ 
    // add initial colors to squares 
    squares[i].style.backgroundColor = colors[i]; 

    // add click listeners to all squares 
    squares[i].addEventListener("click", function(){ 
    // grab color of clicked square 
      let clicked_color = this.style.backgroundColor; 
        if (clicked_color === picked_color){ 
          message_display.textContent = "Correct!"; 
          reset_button.textContent = "Play Again?"; 
          change_colors(clicked_color);  
          h1.style.backgroundColor = clicked_color; 
        } else { 
        this.style.backgroundColor =  "#232323" ; 
        message_display.textContent = "Try Again"; 
         }
    })
}

function change_colors (color) { 
//loop through all squares 
//change color to match given color
  for( let i = 0; i < squares.length; i++ ){ 
  squares[i].style.backgroundColor = color; 
  }  
} 

function pick_color(){
  //pick a random number 
  // use the number to access the color out of the array and return the color 
  /* we are trying to randomly pick a color and attach it to one index 
  of the arrary. even though the length of the array is 1 more than the highest index
  so the length is 6 but highest number we want is 5, but math.floor * math.random 
  assures we only choose indexes between 0 and 5 so we are good */

  let random = Math.floor(Math.random() * colors.length); 
  return colors[random]; 
}

function generate_random_colors (num){ 
//make array 
let arr = []; 
//repeat num times
for (let i = 0; i < num; i++){ 
  // get random color and push into array
  arr.push(random_color()); 
}
//add num to array 
//return the arry 
return arr; 
}

function random_color (){ 
//pick a red from 0-255
let r = Math.floor(Math.random() * 256);  
//pick a blue from 0-255
let g = Math.floor(Math.random() * 256);  
//pick a green from 0-255
let b  = Math.floor(Math.random() * 256); 
return "rgb(" + r + ", " + g + ", " + b + ")";
}