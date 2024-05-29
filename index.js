var rand_num = Math.floor(Math.random() * 6 ) + 1 ;
var rand_img = "dice"+rand_num+".png";
var final = "images/"+rand_img;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", final);

var rand_num1 = Math.floor(Math.random() * 6 ) + 1 ;
var rand_img1 = "dice"+rand_num1+".png";
var final1 = "images/"+rand_img1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", final1);

if (rand_num > rand_num1){
    document.querySelector("h1").innerHTML = ":) Player 1 Won"
}
else if (rand_num === rand_num1){
    document.querySelector("h1").innerHTML = "Tie"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Won :)"
}