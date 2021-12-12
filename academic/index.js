let links = document.getElementsByClassName("biglink");
let holders = document.getElementsByClassName("imgholder");


for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", isHovered);
  links[i].id = i;
}

function isHovered(e){
  for (var i = 0; i < links.length; i++) {
    if(i==e.target.id){
      holders[e.target.id].style.height = "auto";
    }else{
      holders[i].style.height = "0vw";
    }
  }
}
