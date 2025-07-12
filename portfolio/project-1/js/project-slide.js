const listaAll = document.querySelectorAll('.projects_armazenamento ul li')
const buttonGeral = document.querySelectorAll('.projects_models ul li')
const buttonAll = document.querySelectorAll('.projects_models .all')

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo')
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        removeClick(index)
    })
})

function ShowLista(lista, button = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo')
    })

    if(button == "design"){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
    }

    if(button == "graphic"){
        lista[2].classList.add('ativo')
        lista[3].classList.add('ativo')
    }
    if(button == "website"){
        lista[4].classList.add('ativo')
        lista[5].classList.add('ativo')
        lista[6].classList.add('ativo')
        lista[7].classList.add('ativo')
    }

    if(button == "all"){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo')
        lista[3].classList.add('ativo')
        lista[4].classList.add('ativo')
        lista[5].classList.add('ativo')
        lista[6].classList.add('ativo')
        lista[7].classList.add('ativo')
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target
        if(currentButton.classList.contains('all')){
            ShowLista(listaAll)
        }

        if(currentButton.classList.contains('design')){
            ShowLista(listaAll, "design")
        }

        if(currentButton.classList.contains('graphic')){
            ShowLista(listaAll, "graphic")
        }

        if(currentButton.classList.contains('website')){
            ShowLista(listaAll, "website")
        }
        if(currentButton.classList.contains('all')){
            ShowLista(listaAll, "all")
        }
    })
})
