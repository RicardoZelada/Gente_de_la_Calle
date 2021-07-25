const btnAux_1 = document.querySelector("#btn-enviar");
btnAux_1.addEventListener('click', ()=>{
    let div_Carro = document.querySelector('.div-Recordatorio');
    div_Carro.innerHTML = "";

    let selectValor = document.querySelector('.select-monto').value;
    //console.log(selectValor);
    
    if(selectValor != ""){
        let div_Valor = document.createElement('div');
        div_Valor.classList.add("div-seudoCarrito");
        div_Valor.innerText = "Usted tiene una corona pendiente por pagar de: $ " +selectValor;

        div_Carro.appendChild(div_Valor);
    }else{
        //console.log("esta Vacio");
    }

});    

  /*--- VALIDACION  FORMULARIO ----------*/
  window.mostrarErrores = (listaErrores)=>{//le paso la lista de errores
    let error = document.querySelector(".div-Validacion");
    let divParrafo = document.createElement("ol");
    divParrafo.classList.add("alert", "alert-danger");
    listaErrores.forEach((items)=>{
        let li = document.createElement("li");
        li.classList.add("text-center",);
        li.innerText = items
        divParrafo.appendChild(li);
    });
        error.appendChild(divParrafo);
    }
    

    window.listaRegistros = []    
const btn_Pago = document.querySelector("#btn-pago");

btn_Pago.addEventListener('click', ()=>{
    let erroresDivs = document.querySelector(".div-Validacion");
    erroresDivs.innerHTML = "";

    let nroTarjeta = document.querySelector("#input-numero").value;
    let nroCvv = document.querySelector("#input-cvv").value;
    let nombreTitular = document.querySelector("#input-nombre").value;
    let montoPagar = document.querySelector("#input-monto").value;
    let firstName = localStorage.getItem(montoPagar);

    let fechaMes = document.querySelector("#input-mes").value;
    let fechaAnio = document.querySelector("#input-anio").value;

        listaErrores = [];
        if(nroTarjeta === ""){
            listaErrores.push("Ingrese un Nro de Cuenta");
        }if(nroCvv === ""){
            listaErrores.push("Ingrese CVV de la Tarjeta");
        }if(nombreTitular === ""){
            listaErrores.push("Escriba su Nombre, Por Favor");
        }if(montoPagar === ""){
            listaErrores.push("Monto a Pagar Por Favo");
        }if(fechaMes === ""){
            listaErrores.push("Ingrese Mes de Vencimiento");
        }if(fechaAnio === ""){
            listaErrores.push("Año de Vencimiento");
        }if(listaErrores.length === 0){
            let registro = {}//creo un objeto registro
            registro.numeroTarjeta = nroTarjeta;
            registro.Cvv = nroCvv
            registro.nombre = nombreTitular;
            registro.valor = montoPagar;
            registro.mes = fechaMes;
            registro.anio = fechaAnio;

            window.listaRegistros.push(registro);
    
                Swal.fire(
                    'Gracias!',
                    'Su pago se realizo con exito!',
                    'success'
                )


        }else{
            window.mostrarErrores(listaErrores);
        }
        console.log(listaRegistros);
    });    


    function traspasar (){
        let selectValor = document.querySelector('.select-monto').value;
        //console.log(valorMonto);

        document.querySelector("#input-monto").value = selectValor;
        //montoPagar.innerHTML = '2000';

    }