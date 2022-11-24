function OcultarBandera(){
    let bandera1 = document.getElementById("ejercicio1");
    let bandera2 = document.getElementById("ejercicio2");
    let bandera3 = document.getElementById("ejercicio3");
    let bandera4 = document.getElementById("ejercicio4");
    let bandera5 = document.getElementById("ejercicio5");
    
    bandera1.style.display = "none";
    bandera2.style.display = "none";
    bandera3.style.display = "none";
    bandera4.style.display = "none";
    bandera5.style.display = "none";
}

window.onload = OcultarBandera()

function MostrarBandera(){
    let selecflag = document.getElementById("selecflag");
    let bandera = selecflag.value;
    let bandera1 = document.getElementById("ejercicio1");
    let bandera2 = document.getElementById("ejercicio2");
    let bandera3 = document.getElementById("ejercicio3");
    let bandera4 = document.getElementById("ejercicio4");
    let bandera5 = document.getElementById("ejercicio5");
    
    if(bandera =="Gua"){
        bandera1.style.display = "block"
        bandera2.style.display = "none"
        bandera3.style.display = "none"
        bandera4.style.display = "none"
        bandera5.style.display = "none"
    }else if(bandera =="India"){
        bandera1.style.display = "none"
        bandera2.style.display = "block"
        bandera3.style.display = "none"
        bandera4.style.display = "none"
        bandera5.style.display = "none"
    }else if(bandera =="Frnc"){
        bandera1.style.display = "none"
        bandera2.style.display = "none"
        bandera3.style.display = "block"
        bandera4.style.display = "none"
        bandera5.style.display = "none"
    }else if(bandera =="Suec"){
        bandera1.style.display = "none"
        bandera2.style.display = "none"
        bandera3.style.display = "none"
        bandera4.style.display = "block"
        bandera5.style.display = "none"
    }else{
        bandera1.style.display = "none"
        bandera2.style.display = "nonw"
        bandera3.style.display = "none"
        bandera4.style.display = "none"
        bandera5.style.display = "block"
    }
}
