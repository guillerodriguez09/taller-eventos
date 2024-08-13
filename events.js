function saludar(){
    alert('Hola!');
}

document.addEventListener('DOMContentLoaded', function () {
    let container= document.getElementById('container');
    container.addEventListener('click', function(){
        alert('Hola! Soy el div jiji')
    } );
}
);