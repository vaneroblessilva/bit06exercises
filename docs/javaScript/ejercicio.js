/*1.Pedir nombre al usuario y saludarlo*/
window.onload=inicio;

function inicio(){
    //document.querySelector("boton").onclick=listar;
}
function listar(){
    let nombre=document.querySelector("campo").value;
    document.querySelector("caja").innerHTML+=`<div>${nombre}</div>`;

}

