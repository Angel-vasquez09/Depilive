
const get = document.querySelector("#getStart");
const usuario = localStorage.getItem("banner");
if(!usuario){
    console.log(usuario);
    console.log("Usuario no existe")
    document.querySelector("#banner").classList.remove("d-none");
}
console.log(localStorage.getItem("banner"))
get.addEventListener("click", () => {
    document.querySelector("#banner").classList.add("d-none");
    localStorage.setItem("banner","Registrado");
})