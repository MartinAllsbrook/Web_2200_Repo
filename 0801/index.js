const options = document.getElementsByClassName("type");
const imageSpot = document.getElementsByClassName("image");
const images = ["Didot.png", "AvantGarde.png", "Helvetica.jpg"];
const titles = ["DIDOT", "AVANTGARDE", "HELVETICA"];


for(i=0;i<options.length;i++){
  // console.log(options[i].innerHTML);
  document.getElementsByClassName('label')[i].innerHTML = titles[i];
  imageSpot[i].innerHTML += '<img src="assets/'+images[i]+'">';
  options[i].setAttribute("id", titles[i])
  options[i].addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID) {
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
