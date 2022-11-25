const myImage = document.querySelector("img"); myImage.onclick = () => {
 const mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/firefox-icon.jpeg") { 
  myImage.setAttribute("width",250);           myImage.setAttribute("height",250);
 myImage.setAttribute("src", 
      "../images/bashir-pic.jpg")
 /* myImage.setAttributes("width",250);        myImage.setAttributes("height",250);*/
  } else
   { myImage.setAttribute("src", "../images/firefox-icon.jpeg");
   
   } 
   };

let myButton = document.querySelector("button"); let myHeading = document.querySelector("h1");
function setUserName() {
const myName = prompt("Please enter your name.");
 localStorage.setItem("name", myName); myHeading.textContent = `Mozilla is cool, ${myName}`; }

if (!localStorage.getItem("name")) { setUserName(); } 
else { 
const storedName = localStorage.getItem("name"); myHeading.textContent = `Mozilla is cool, ${storedName}`; }

myButton.onclick = () => { setUserName(); };