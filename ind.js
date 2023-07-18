function startGame() {
    var name1 = document.getElementById("player1").value;
    var name2 = document.getElementById("player2").value;
  
    var p1 = document.getElementById("p1");
    p1.innerHTML = name1;
  
    var p2 = document.getElementById("p2");
    p2.innerHTML = name2;
  
    var randomNumber1= Math.floor(Math.random()*6)+1;
    var ranimg ="dice"+randomNumber1+".png";
    
    var img1=document.querySelectorAll("img")[0];
    img1.setAttribute("src",ranimg);
    
    var randomNumber2= Math.floor(Math.random()*6)+1;
    var ranimg2 ="dice"+randomNumber2+".png";
   
    var img2=document.querySelectorAll("img")[1];
    img2.setAttribute("src", ranimg2);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="&#127942 Player 1 wins !!!!";
    }
    else if(randomNumber1<randomNumber2) {
        document.querySelector("h1").innerHTML="&#127942 Player 2 wins !!!!";
    }
    else {
        document.querySelector("h1").innerHTML="Draw !!!!";
    }
  }
  
