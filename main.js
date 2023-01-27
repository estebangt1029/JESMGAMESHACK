alert('Hola Gamer como estas.Recuerda que si quieres que meta un juego en especial debes pedirmelo por instagram y si algun link ya no funciona podrias avisarme igual')
document.addEventListener("keyup", e=>{
    if (e.target.matches(".search")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".juego").forEach(juego =>{
            juego.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?juego.classList.remove("filtro")
              :juego.classList.add("filtro")
        })
    }
  })







  