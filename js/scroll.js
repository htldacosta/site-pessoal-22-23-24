

// const myObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }else {
//             entry.target.classList.remove('show')
//         }
//     })
// })

// const elements = document.querySelectorAll('.hidden')

// elements.forEach((element) => myObserver.observe(element))


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('show');   

            entry.target.classList.add('animated'); // Adiciona a classe 'animated' para marcar que a animação já ocorreu
        }
    });
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));