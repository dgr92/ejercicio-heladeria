
const sendData = () => {

    let name,
        tlfn,
        email,

        saborSel,
        recipienteSel,
        extrasSel,

        sabor,
        recipiente,
        extras = [];


    // Datos Cliente
    name  = document.getElementById( "name" ).value;
    tlfn  = document.getElementById( "tlfn" ).value;
    email = document.getElementById( "email" ).value;
    // Comprobar si se han introducido datos
    if(!name || !tlfn || !email){
        alert( "Introduce datos." );
        return;
    }


    // Sabor seleccionado.
    saborSel = document.getElementsByName( "sabor" );
    
    for(let i=0; i<saborSel.length; i++){
        if(saborSel[i].checked){
            sabor = saborSel[i].value;
        }
    }
    // Comprobar si se ha seleccionado sabor
    if(!sabor){
        alert( "Selecciona sabor." );
        return;
    }
    

    // Recipiente seleccionado.
    recipienteSel = document.getElementsByName( "recipiente" );
    
    for(let i=0; i<recipienteSel.length; i++){
        if(recipienteSel[i].checked){
            recipiente = recipienteSel[i].value;
        }
    }
    // Comprobar si se ha seleccionado recipiente
    if(!recipiente){
        alert( "Selecciona recipiente." );
        return;
    }


    // Extras seleccionados
    extrasSel = document.getElementsByName( "extras" );

    let n=0;
    for(let i=0; i<extrasSel.length; i++){ 
        if(extrasSel[i].checked){
            extras[n] = extrasSel[i].value;
            n++;
        }
    }
// Comprobar si se han seleccionado extras
if(extras.length == 0){
    alert( "Selecciona extras." );
    return;
}

    alert( "El cliente " + name + ", con nº de telefono " + tlfn + " y correo electrónico " + email + ", ha pedido una " + recipiente + " de sabor " + sabor + ". Extras: " + extras );
}