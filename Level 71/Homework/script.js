const child = document.getElementById("child-container");

let left = 0;
let y = 0;
let direction = "top"

const moveACW = setInterval(function(){
    if(direction == "top"){
        y++;
        if(y == 230){
            direction = "right"
        }
    } else if(direction == "right"){
        left++;
        if(left == 230){
            direction = "bottom";
        }
    } else if(direction == "bottom"){
        y--;
        if(y == 230){
            direction = "top"
        }
    } else{
        y--;
        if(y == 0 && left == 0){
            clearInterval(moveACW);
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 10);


