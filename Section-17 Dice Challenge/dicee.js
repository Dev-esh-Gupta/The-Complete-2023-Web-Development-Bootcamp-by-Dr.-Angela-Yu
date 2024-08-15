function change(){
    // alert('Hello');
    var r1 = Math.floor(Math.random() * 6 ) + 1;
    var r2 = Math.floor(Math.random() * 6 ) + 1;
    if (r1 > r2) {
        document.querySelector("h1").innerHTML = "Player1 Win";
    }else if(r1 < r2){
        document.querySelector("h1").innerHTML = "Player2 Win";
    }else{
        document.querySelector("h1").innerHTML = "Draw";
    }
    
    console.log(r1 + r2);
    var src1 = "./images/dice"+r1+".png";
    var src2 = "./images/dice"+r2+".png";
    document.querySelector("img.img1").setAttribute("src", src1);
    document.querySelector("img.img2").setAttribute("src", src2);
}