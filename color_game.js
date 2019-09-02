
let num_squares = 6; 
let colors = generate_random_colors (num_squares); 
let squares = document.querySelectorAll(".square");
let picked_color = pick_color() ; 
let color_display = document.getElementById("color_display");
let message_display = document.querySelector("#message"); 
let h1 = document.querySelector("h1"); 
let reset_button = document.querySelector("#reset"); 
let easy_button = document.querySelector("#easy_btn"); 
let hard_button = document.querySelector("#hard_btn"); 

easy_button.addEventListener("click", function(){  
  easy_button.classList.add("selected"); 
  hard_button.classList.remove("selected");
  num_squares = 3;  
  colors = generate_random_colors(num_squares); 
  picked_color = pick_color(); 
  color_display.textContent = picked_color; 
  for (let i = 0; i < squares.length; i++){ 
    if (colors[i]){ 
      squares[i].style.backgroundColor = colors[i]; 
    } else { 
      squares[i].style.display = "none"; 
    }
  }
}); 

hard_button.addEventListener("click", function(){ 
  hard_button.classList.add("selected"); 
  easy_button.classList.remove("selected");
  num_squares = 6;  
  colors = generate_random_colors(num_squares); 
  picked_color = pick_color(); 
  color_display.textContent = picked_color; 
  for (let i = 0; i < squares.length; i++){ 
      squares[i].style.backgroundColor = colors[i]; 
      squares[i].style.display = "block"; 
  }  
}); 

reset_button.addEventListener("click", function(){
  // generate all new colors 
   colors = generate_random_colors(num_squares); 
  //pick a new random color from array 
   picked_color = pick_color() ; 
  // change color display to match picked color 
  color_display.textContent = picked_color; 
  //change colors of squares on the page 
  for (let i = 0; i < squares.length; i++){ 
    squares[i].style.backgroundColor = colors[i];
    h1.style.backgroundColor = "steelblue";
    message_display.textContent = "";   
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
        this.style.backgroundColor =  "#232323"; 
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
let arr = []; 
for (let i = 0; i < num; i++){ 
  arr.push(random_color()); 
}
return arr; 
}

function random_color (){ 
let r = Math.floor(Math.random() * 256);  
let g = Math.floor(Math.random() * 256);  
let b  = Math.floor(Math.random() * 256); 
return "rgb(" + r + ", " + g + ", " + b + ")";
}