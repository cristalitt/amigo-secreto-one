let amigos = [];

function agregarAmigo(){

        let inputAmigo = document.getElementById("amigo");
        let amigo = inputAmigo.value;
        
        if(amigo === ""){

                alert("Por favor, ingresa un nombre");
                return;

        } else {

        amigos.push(amigo);
        console.log(amigos); 
        listaAmigos();

        }

        limpiarCaja();

}

function listaAmigos() {
        
        let lista = document.querySelector("#listaAmigos");
        
        lista.innerHTML = "";
        
        for (let i = 0; i < amigos.length; i++) {
        
                let amigoHTM = document.createElement("li");

                amigoHTM.innerHTML = amigos[i];
        
                lista.appendChild(amigoHTM);

  }
}

function asignarTextoElemento (elemento, texto){
    
        let elementoHTML = document.querySelector(elemento);
    
        elementoHTML.innerHTML = texto;
    
        return;
}

function limpiarCaja(){
    
        document.querySelector("#amigo").value = "";

}

function sortearAmigo(){

    if (amigos.length === 0) {
        
        alert("No hay nombres para sortear");
        
        return;
      }

    
    let amigoSeleccionado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoSeleccionado];

    // Mostrar el resultado en la lista de resultado
    asignarTextoElemento("#resultado", `🎉 Tu amigo secreto es: ${amigoSorteado}`);

}

function reiniciarJuego() {
  
        amigos = [];

        document.getElementById("listaAmigos").innerHTML = "";

        asignarTextoElemento("#resultado", "");

        limpiarCaja();
}
