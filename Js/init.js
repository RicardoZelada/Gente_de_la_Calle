//---------- Header Responsive ----------------    
$(document).ready(function(){
    $('.toggle').click(function(){
        $('ul').toggleClass('active');
    })
    })

$(document).ready(function(){
    $('.toggleB').hide(); //div con la clase toggleB se esconde con .hide

    $('.btnMore_Memoria').click(function(){
        $('.toggleB').toggle(2000);

        $('.btnMore_Memoria').html("Ver Menos Memorias");
    });
});

$(document).ready(function(){
    $('.toggleM').hide();

    $('.btnMore_Balance').click(function(){
        $('.toggleM').toggle(2000);

        $('.btnMore_Balance').html("Ver Menos Balances");
    });
});

$(document).ready(function(){
    $('.new-4').hide();

    $('.btn-button').click(function(){
        $('.new-4').toggle(2000);

        $('.btn-button').html("Ver Menos Noticias");
    });
});




const btnRespuesta = document.querySelector(".pregunta_1");

btnRespuesta.addEventListener('click', ()=>{
    let divRespuesta = document.querySelector(".Respuesta_1");
    divRespuesta.innerHTML = "";

        let ol = document.createElement("ol");
        ol.classList.add("p-2");
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = "El Fono Calle es un Call Center del Ministerio de Desarrollo Social y Familia, donde te entregarán la dirección de los albergues de invierno, el N°., es 800 104 777, opción 0. Esta información también la puedes encontrar en este enlace. ";
        ol.appendChild(li);
        divRespuesta.appendChild(ol);
    
        if(divRespuesta != ""){
            const btnRespuesta = document.querySelector(".pregunta_1");
            btnRespuesta.classList.add("d-none");

            let nuevoBtn  = document.querySelector(".btn-nuevo_1");
            let btn = document.createElement("button");
            btn.classList.add("btn","btn-warning");
            btn.innerHTML = "Cerrar Respuesta";
            nuevoBtn.appendChild(btn);
            //console.log("no esta vacio");

            const btnNuevo = document.querySelector(".btn-nuevo_1");
            btnNuevo.addEventListener('click', ()=>{
                let divRespuesta = document.querySelector(".Respuesta_1");
                //divRespuesta.classList.add("d-none");
                divRespuesta.innerHTML = "";

                //nuevoBtn = document.querySelector(".btn-nuevo");
                nuevoBtn.classList.add("d-none");

                //btnRespuesta = document.querySelector(".pregunta_1");
                btnRespuesta.classList.remove("d-none");
                btnRespuesta.classList.add("d-block");
        });
        }else{
            console.log("esta vacio");
            
        }
});



const btnRespuesta_2 = document.querySelector(".pregunta_2");

btnRespuesta_2.addEventListener('click', ()=>{
    let divRespuesta_2 = document.querySelector(".Respuesta_2");
    divRespuesta_2.innerHTML = "";

        let ol_2 = document.createElement("ol");
        ol_2.classList.add("p-2");
        let li_2 = document.createElement("li");
        li_2.classList.add("list-group-item");
        li_2.innerText = "Acércate y conversa con la persona para saber cuál es su situación, si puedes satisfacer sus necesidades de abrigo, alimentación o protección (carpa) ¡HAZLO! esperar que otros lo hagan no lo beneficiará. Revisa todos los protocolos y herramientas que hemos levantado para apoyar a las Personas en Situación de Calle en el contexto de pandemia, haciendo clic aquí.";
        ol_2.appendChild(li_2);
        divRespuesta_2.appendChild(ol_2);
    
        if(divRespuesta_2 != ""){
            const btnRespuesta_2 = document.querySelector(".pregunta_2");
            btnRespuesta_2.classList.add("d-none");

            let nuevoBtn_2  = document.querySelector(".btn-nuevo_2");
            let btn_2 = document.createElement("button");
            btn_2.classList.add("btn","btn-warning");
            btn_2.innerHTML = "Cerrar Respuesta";
            nuevoBtn_2.appendChild(btn_2);
            //console.log("no esta vacio");

            const btnNuevo_2 = document.querySelector(".btn-nuevo_2");
            btnNuevo_2.addEventListener('click', ()=>{
                let divRespuesta_2 = document.querySelector(".Respuesta_2");
                //divRespuesta.classList.add("d-none");
                divRespuesta_2.innerHTML = "";

                //nuevoBtn = document.querySelector(".btn-nuevo");
                nuevoBtn_2.classList.add("d-none");

                //btnRespuesta = document.querySelector(".pregunta_1");
                btnRespuesta_2.classList.remove("d-none");
                btnRespuesta_2.classList.add("d-block");
        });
        }else{
            console.log("esta vacio");
            
        }
});

const btnRespuesta_3 = document.querySelector(".pregunta_3");

btnRespuesta_3.addEventListener('click', ()=>{
    let divRespuesta_3 = document.querySelector(".Respuesta_3");
    divRespuesta_3.innerHTML = "";

        let ol_3 = document.createElement("ol");
        ol_3.classList.add("p-2");
        let li_3 = document.createElement("li");
        li_3.classList.add("list-group-item");
        li_3.innerText = "Esta información es entregada presencialmente en los albergues. Si quieres derivar a alguien, lee la pregunta previa.";
        ol_3.appendChild(li_3);
        divRespuesta_3.appendChild(ol_3);
    
        if(divRespuesta_3 != ""){
            const btnRespuesta_3 = document.querySelector(".pregunta_3");
            btnRespuesta_3.classList.add("d-none");

            let nuevoBtn_3  = document.querySelector(".btn-nuevo_3");
            let btn_3 = document.createElement("button");
            btn_3.classList.add("btn","btn-warning");
            btn_3.innerHTML = "Cerrar Respuesta";
            nuevoBtn_3.appendChild(btn_3);
            //console.log("no esta vacio");

            const btnNuevo_3 = document.querySelector(".btn-nuevo_3");
            btnNuevo_3.addEventListener('click', ()=>{
                let divRespuesta_3 = document.querySelector(".Respuesta_3");
                //divRespuesta.classList.add("d-none");
                divRespuesta_3.innerHTML = "";

                //nuevoBtn = document.querySelector(".btn-nuevo");
                nuevoBtn_3.classList.add("d-none");

                //btnRespuesta = document.querySelector(".pregunta_1");
                btnRespuesta_3.classList.remove("d-none");
                btnRespuesta_3.classList.add("d-block");
        });
        }else{
            console.log("esta vacio");
            
        }
});

const btnRespuesta_4 = document.querySelector(".pregunta_4");

btnRespuesta_4.addEventListener('click', ()=>{
    let divRespuesta_4 = document.querySelector(".Respuesta_4");
    divRespuesta_4.innerHTML = "";

        let ol_4 = document.createElement("ol");
        ol_4.classList.add("p-2");
        let li_4 = document.createElement("li");
        li_4.classList.add("list-group-item");
        li_4.innerText = "Mujeres y hombres chilenos y/o extranjeros, cualquier persona que se encuentra en situación de calle y que acepta las normas de cuarentena.";
        ol_4.appendChild(li_4);
        divRespuesta_4.appendChild(ol_4);
    
        if(divRespuesta_4 != ""){
            const btnRespuesta_4 = document.querySelector(".pregunta_4");
            btnRespuesta_4.classList.add("d-none");

            let nuevoBtn_4  = document.querySelector(".btn-nuevo_4");
            let btn_4 = document.createElement("button");
            btn_4.classList.add("btn","btn-warning");
            btn_4.innerHTML = "Cerrar Respuesta";
            nuevoBtn_4.appendChild(btn_4);
            //console.log("no esta vacio");

            const btnNuevo_4 = document.querySelector(".btn-nuevo_4");
            btnNuevo_4.addEventListener('click', ()=>{
                let divRespuesta_4 = document.querySelector(".Respuesta_4");
                //divRespuesta.classList.add("d-none");
                divRespuesta_4.innerHTML = "";

                //nuevoBtn = document.querySelector(".btn-nuevo");
                nuevoBtn_4.classList.add("d-none");

                //btnRespuesta = document.querySelector(".pregunta_1");
                btnRespuesta_4.classList.remove("d-none");
                btnRespuesta_4.classList.add("d-block");
        });
        }else{
            console.log("esta vacio");
            
        }
});









