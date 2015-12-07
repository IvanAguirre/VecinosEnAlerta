/*alert("jkfdhbjkfdg");
$( "#myButton" ).bind( "click", function(event, ui) {
  alert("hola");
});

$( "#myButton" ).click(function() {
  alert( "Handler for .click() called." );
});*/

function fff(){
	alert( "Handler for .click() called." );
}

function mandarAlertaPanico()
{
	alert("Alerta enviada");
	var mensaje = "Fulano ha activado la alerta de panico, ¡Actúe! su vecino puede estar en peligro";

// Comprobamos que está disponible AJAX
	if(window.XMLHttpRequest) 
		{
			ajax = new XMLHttpRequest()
		}
// La respuesta aparecerá en una alerta
/*ajax.onreadystatechange=function()
{
	if(ajax.readyState == 4) {
		if(ajax.status == 200) {
			alert(ajax.responseText)
		}
	}
}*/
// Pedimos el archivo "registro.php"
ajax.open("POST","http://www.agendasonidocaracol.mx/VecinosEnAlerta/PhonegapPushNotifications/pedir_auxilio.php",true)
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
ajax.send("&message=" + mensaje + "&regId='1'")

}

              