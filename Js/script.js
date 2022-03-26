//declairing variables
let ham = document.getElementById("ham");
let lgnav  = document.getElementById("lgnav");
let slids  = document.getElementById("slids");
let heading  = document.getElementById("heading");
let para = document.getElementById('para');
let btn = document.getElementById('btn');
let newbtn  = document.getElementById('newbtn')

//handling hamburger
ham.addEventListener('click',()=>{
 if (ham.src.match("../photos/ham.svg")) {
    lgnav.style.transform = "translateX(0px)";
    lgnav.style.transform = "translateY(57px)";
    ham.src = "../photos/cross.svg"
 }
 else{
   lgnav.style.transform = "translateX(-100rem)";
  //  lgnav.style.transform = "translateY(0vh)";
   ham.src = "../photos/ham.svg"
 }
});

var i = 0; 			
var images = [];
var head = [];	
var p = [];
var b = [];
var time = 5000;	
	 
// Image List
images[0] = "../photos/ms.webp";
images[1] = "../photos/ms1.jpg";

//head list
head[0] = "Surface Laptop 4";
head[1] = "Microsoft 365";

//para list
p[0] = "Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.";
p[1] = "Premium Office apps, extra cloud storage, advanced security, and more - all in one convenient subscription";

//button list
b[0] = "Shop Now >";
b[1] = "Choose your Microsoft 365 >";

// Change Image
function changeImg(){
	slids.src = images[i];
  heading.innerText = head[i];
  para.innerText = p[i];
  btn.innerText = b[i];
  
	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} 
  else { 
		// Reset Back To O
		i = 0;
	}
  if (slids.src.match("../photos/ms1.jpg")){
    newbtn.style.display = "none";
  }
  else{
    newbtn.style.display = "block";
  }


	// Run function every x seconds
	setTimeout("changeImg()", time);

}

// Run function when page loads
window.onload=changeImg;


