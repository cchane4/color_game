

let colors = [ 
    "rgb(255, 0, 0)", 
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
] 

let squares = document.querySelectorAll(".square");
let picked_color = pick_color() ; 
let color_display = document.getElementById("color_display");
let message_display = document.querySelector("#message"); 

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
          change_colors(clicked_color);  
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