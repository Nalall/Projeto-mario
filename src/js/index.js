const botaoTrailer = document.querySelector(".botao-trailer")
const video = document.getElementById("video")
const modal = document.querySelector(".modal")
const botaofecharmodal = document.querySelector(".fechar-modal")
const linkDoVideo = video.src

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

botaofecharmodal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "")
})
