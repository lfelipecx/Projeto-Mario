const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const linkVideo = video.src


function alternarModal(){
    modal.classList.toggle("aberto") //toggle verifica se tem a classe no atributo, se tiver ele retira e se não tiver ele acrescenta
}

botaoTrailer.addEventListener("click", () => {
    //modal.classList.add("aberto") //inserindo uma classe ao HTML
    alternarModal()
    video.setAttribute("src", linkVideo)
})

fecharModal.addEventListener("click", () => {
    //modal.classList.remove("aberto") //removendo uma classe do HTML
    alternarModal()
    video.setAttribute("src","") //definindo um valor a um atributo HTML
})