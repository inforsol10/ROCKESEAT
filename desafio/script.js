function toggleMode() {
    const html=document.documentElement
    html.classList.toggle('light')

    /*CÓDIGO COMPLETO PARA FACILITAR O ENTENDIMENTO DA FUNÇÃO*/
    //if(html.classList.contains("light")) {
    //    html.classList.remove("light")
    //}
    //else {
    //    html.classList.add("light")
    //}
    
    const img=document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/meuAvatar.png')

    } else {
        img.setAttribute('src', './assets/meuAvatar.png')

    }
   
}   

