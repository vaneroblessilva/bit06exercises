function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;
    let msg=document.getElementById("msg");

    if(user=="bit" && pass=="2023")
    {
        window.location="https://vaneroblessilva.github.io/bit06exercises/ejercicios.html";
    }
    else
    {
        alert("Datos incorrectos")

    }
}
