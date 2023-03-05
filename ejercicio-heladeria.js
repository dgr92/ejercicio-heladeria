
const sendData = () => {

    let name,
        tlfn,
        email,
        sabor,
        recipiente,
        extras = [],
        extraSel,
        form = document.forms["myForm"];

        
    // Datos Cliente
    name  = form.name.value;
    tlfn  = form.tlfn.value;
    email = form.email.value;

    if(!name || !tlfn || !email){
        alert( "Introduce datos." );
        return;
    }


    // Sabor seleccionado.
    sabor = form.sabor.value;

    if(!sabor){
        alert( "Selecciona sabor." );
        return;
    }
    

    // Recipiente seleccionado.   
    recipiente = form.recipiente.value;

    if(!recipiente){
        alert( "Selecciona recipiente." );
        return;
    }


    // Extras seleccionados
    extraSel = document.getElementsByName( "extras" );

    let n=0;
    for(let i=0; i<extraSel.length; i++){ 
        if(extraSel[i].checked){
            extras[n] = extraSel[i].value;
            n++;
        };
    }
    
    if(extras.length == 0){
        alert( "Selecciona extras." );
        return;
    }

    alert( "El cliente " + name + ", con nº de telefono " + tlfn + " y correo electrónico " + email + ", ha pedido una " + recipiente + " de sabor " + sabor + ". Extras: " + extras );
}