const options = document.getElementsByClassName("type");
const images = ["Didot.png", "AvantGarde.png", "Helvetica.png", "Garamond.png", "Futura.png"];
const titles = ["Didot", "AvantGarde", "Helvetica", "Garamond", "Futura"];
let prevChoice;
let meal;


for(i=0;i<options.length;i++){
  options[i].id = titles[i];
  // options[i].innerHTML = "<h2>" + titles[i] + "</h2>";
  options[i].addEventListener("click", setActive, false);
}

document.getElementById('Didot').classList.toggle('active');
document.getElementById('image').innerHTML = "<img src= 'assets/" + images[0] + "'>";
document.getElementById('back').addEventListener('click', function(){
  location.href='../index.html'});
// e = event
function setActive(e){
  if(document.getElementsByClassName("active")[0] != undefined){
    prevChoice = document.getElementsByClassName("active")[0].id;
    // console.log(document.getElementsByClassName("active")[0].id);
  }
  if(prevChoice != undefined){
    document.getElementById(prevChoice).classList.toggle("active");
  }
  // console.log("prevChoice " + prevChoice);

  // make sure we dont just target inner html
  if(e.target.tagName == "H2"){
    // console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");
  }else{
    // console.log("div clicked");
    e.target.classList.toggle("active");
  }

  current = document.getElementsByClassName("active")[0].id;
  // console.log(current);
  document.getElementById('image').innerHTML = "<img src= 'assets/" + current + ".png'>"
}
