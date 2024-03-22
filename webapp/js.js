/**
 * 
 */
let numeroIngresado = prompt("Ingrese un valor numerico", 1);
if (isNaN(numeroIngresado)) {
	alert("Debe ingresar un valor numérico.");
} else {
	let html = ""; // Inicializar la variable html
	let fila = ''; // Inicializar la variable fila
	function juego() {

		for (let i = 1; i <= numeroIngresado; i++) {
			fila += "*";
			html += fila + "<br>";
		}
		document.getElementById("dibujar").innerHTML = html;
	}
}