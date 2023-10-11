function sendMail() {
  // Obtener los valores del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  
  // Enviar el correo electrónico usando EmailJS
  emailjs.send("service_lxthpw4", "template_ula30il", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
  })
  .then(function(response) {
      // Mostrar mensaje de éxito y limpiar los campos
      document.getElementById("loading").style.display = "none";
      document.getElementById("sent-message").style.display = "block";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
  }, function(error) {
      // Mostrar mensaje de error
      document.getElementById("loading").style.display = "none";
      document.getElementById("error-message").style.display = "block";
      console.log("Error:", error);
  });
  
  // Mostrar el mensaje de carga mientras se envía el correo electrónico
  document.getElementById("loading").style.display = "block";
}