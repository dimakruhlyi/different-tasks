function adaptiveMenu() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// let bg = document.getElementById('first');
// document.getElementById('menuIcon').addEventListener("mouseover", function(){
//   bg.style.background = "#ffbb42";
//   bg.style.borderRadius = "5px";
//   document.getElementById('homeLink').style.color = "#fff";
//   this.addEventListener("mouseout", function(){bg.style.background = "";});
// });