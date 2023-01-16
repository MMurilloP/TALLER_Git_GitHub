const datos = [];



const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
  let email = document.querySelector("#email2").value;
  let pass = document.querySelector("#pass3").value;
  let validated = true;

  if (!email.includes("@")) {
    alert("Email no válido")
    validated = false;
  }

  if (pass.length < 4) {
    alert("La contraseña debe contener al menos 5 caracteres")
    validated = false;
  }

  if (validated) {
    let objDatos = {
      email: email,
      pass: pass
    }
    datos.push(objDatos);
    alert('Hola :). Has enviado tus datos');
    console.log(datos);

  }
})

//Solo para enviar a server
/*boton.addEventListener('submit', function (event) {
  event.preventDefault();
  let email = document.querySelector("#email2").value;
  let pass = document.querySelector("#pass3").value;
  let validated = true;

  if (!email.includes("@")) {
    alert("Email no válido")
    validated = false;
  }

  if (pass.length < 4) {
    alert("La contraseña debe contener al menos 5 carcateres")
    validated = false;
  }

  if (validated) {
    let objDatos = {
      email: email,
      pass: pass
    }
    datos.push(objDatos);
    alert('Hola :). Has enviado tus datos');
    console.log(datos);
    event.target.submit;
  }
})*/
