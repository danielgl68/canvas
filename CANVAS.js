let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")

function desenharRetangulos(){
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 50, 50);

    ctx.fillStyle = "red";
    ctx.fillRect(250, 0, 50, 50);

    ctx.fillStyle = "red";
    ctx.fillRect(115, 150, 35, 35);

    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 120, 30, 60);

    ctx.fillStyle = "cyan";
    ctx.fillRect(270, 135, 30, 30);

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 240, 30, 60);

    ctx.fillStyle = "yellow";
    ctx.fillRect(30, 270, 30, 30);

    ctx.fillStyle = "black";
    ctx.fillRect(270, 240, 30, 60);

    ctx.fillStyle = "black";
    ctx.fillRect(240, 270, 30, 30);
}


function desnharLinhas(){
    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.strokeStyle = "green";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(150, 150);
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 150);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(150, 300);
    ctx.strokeStyle = "black";
    ctx.stroke();

}


function desenharArcos(){
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "cyan";
    ctx.arc(150, 120, 15, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(150, 150, 60, 3.15, 2.0*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(150, 300, 80, 3.15, 1.5*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.fillStyle = "cyan";
    ctx.arc(150, 300, 40, 3.15, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(150, 300, 60, 4.73, 2.0*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(150, 150, 80, 3.15, 1.25*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(150, 150, 80, 5.5, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.fillStyle = "yellow";
    ctx.arc(75, 225, 15, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.fillStyle = "yellow";
    ctx.arc(225, 225, 15, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

function escrever(){
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Canvas",115 ,50);
}

desenharRetangulos();
desnharLinhas();
desenharArcos();
escrever();