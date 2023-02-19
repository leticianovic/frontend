(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

const inputNasc = document.getElementById("txtdata_nasc");

document.querySelector("form").addEventListener("submit", function(){
  //obter array com [ano,mes,dia] através de split("-") e convertendo em numero com Map
  let nasc = inputNasc.value.split("-").map(Number);
  //construir data 18 anos a seguir a data dada pelo usuario
  let depois18Anos = new Date(nasc[0] + 18, nasc[1] - 1, nasc[2]);
  let agora = new Date();
  
  if (depois18Anos <= agora){
    console.log("Maior de 18");
  }
  else {
    console.log("Menor de 18");
  }
  event.preventDefault(); //só para não mudar de pagina na submissão do formulario
});