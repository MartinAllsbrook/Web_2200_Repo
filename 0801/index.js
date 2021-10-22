const options = document.getElementsByClassName("type");
const images = ["Didot.png", "AvantGarde.png", "Helvetica.jpg"];
const titles = ["DIDOT", "AVANTGARDE", "HELVETICA"];


for(i=0;i<options.length;i++){
  // console.log(options[i].innerHTML);
  document.getElementsByClassName('label')[i].innerHTML = titles[i];
  options[i].innerHTML += '<img src="assets/'+images[i]+'">';
}
