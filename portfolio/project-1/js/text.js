const titulo = document.querySelector('.digitando')

function ativaLetra(elemento){
    const arrTexto = elemento.textContent.split('')
    elemento.textContent = ''
    arrTexto.forEach((letra, i) => {
        setTimeout(()=>{
            elemento.textContent += letra 
        }, 95 * i)
    });
}

ativaLetra(titulo)

