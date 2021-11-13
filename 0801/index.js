const options = document.getElementsByClassName("type");
const images = ["Didot.png", "AvantGarde.png", "Helvetica.jpg"];
const titles = ["DIDOT", "AVANTGARDE", "HELVETICA"];
let prevChoice;


for(i=0;i<options.length;i++){
  options[i].innerHTML = "<h2>" + titles[i] + "</h2>";
  options[i].addEventListener("click", setActive, false);
  options[i].id = titles[i];
}

// e = event
function setActive(e){

  prevChoice = document.getElementsByClassName()
  if(prevChoice != undefined){
    document.getElementById(prevChoice).classList.toggle("active");
  }
  console.log("prevChoice " + prevChoice);

  // make sure we dont just target inner html
  if(e.target.tagName == "H2"){
    console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");
  }else{
    console.log("div clicked");
    e.target.classList.toggle("active");
  }
}
