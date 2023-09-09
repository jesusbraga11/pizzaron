 var mouse="empty";
 var uPosicionX, uPosicionY;

 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");

 var color="blue";
 var anchoDeLinea= 5;
var a_pantalla=screen.width;
var n_ancho_pantalla= screen.width - 70;
var n_alto_pantalla = screen.height -300;
if (a_pantalla<992)
{
   document.getElementById("myCanvas").width=n_ancho_pantalla;
   document.getElementById("myCanvas").height=n_alto_pantalla;
   document.body.style.overflow="hidden";
} 

//aqui inician eventos mouse
 canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e)
 {
color = document.getElementById ("color").value;
    mouse="mousedown";
    console.log(mouse);
 }
 canvas.addEventListener("mousemove", my_mousemove);
 
 function my_mousemove(e)
 {

    PosicionActualX = e.clientX - canvas.offsetLeft;
    PosicionActualY = e.clientY - canvas.offsetTop;

    if (mouse == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = anchoDeLinea;
        console.log("Ultima Posicion y coordenadas=");
        console.log("x =" + uPosicionX + "y ="+ uPosicionY );

        ctx.moveTo(uPosicionX, uPosicionY)

        ctx.lineTo(PosicionActualX, PosicionActualY);
        ctx.stroke();
    }

    uPosicionX = PosicionActualX;
    uPosicionY = PosicionActualY; 
 }

 canvas.addEventListener("mouseup", my_mouseup);

 function my_mouseup(e)
 {
    mouse="mouseup";
 }
//aqui terminan eventos mouse

//aqui inician eventos touch
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
   console.log("my_touchstar")

   PosicionActualX = e.touches [0].clientX-canvas.offsetLeft

   PosicionActualY = e.touches [0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
   PosicionActualX= e.touches[0].clientX - canvas.offsetLeft;

   PosicionActualY= e.touches[0].clientY - canvas.offsetTop;

   ctx.beginPath();
   ctx.strokeStyle =color;
   ctx.lineWidth=anchoDeLinea;

   ctx.moveTo(uPosicionX, uPosicionY);
   ctx.lineTo(PosicionActualX, PosicionActualY);
   ctx.stroke();

   uPosicionX = PosicionActualX;
   uPosicionY = PosicionActualY;
}
//aqui terminan los eventos touch

 function clearArea()
 {
    ctx.clearRect(0,0, canvas.width, canvas.height);
 }


 
