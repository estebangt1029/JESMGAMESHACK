
document.addEventListener("keyup", e=>{
    if (e.target.matches(".search")){
        if (e.key ==="Escape")e.target.value = ""
          document.querySelectorAll(".juego").forEach(juego=>{
              juego.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?juego.classList.remove("filtro")
                :juego.classList.add("filtro")
        })
    }
})













  