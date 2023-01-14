const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", e=>{   //cursor de mouse
    cursor.setAttribute("style", "top:  " + (e.pageY -10) + "px; left:"+ (e.pageX -15)+"px;");
})
function paraAtras() { //boton de inicio
	document.getElementById("boton").href="proyectoargentinaprograma.html";}
