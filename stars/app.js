// function adicionarClasseComAtraso() {
//     const anima = document.querySelectorAll('span.animar1');
//     anima.classList.add('.animar2');

//   }
  
//   // Chama a função após 15 segundos (15000 milissegundos)
//   window.onload = () => {
//     setTimeout(adicionarClasseComAtraso, 5000);
//   };

// function adicionarClasseComAtraso() {
//     const elementos = document.querySelectorAll('span.animar1'); // Seleciona todos os elementos com a classe 'animar1'
  
//     elementos.forEach(elemento => { // Itera sobre cada elemento
//       elemento.classList.add('animar2'); // Adiciona a classe 'animar2' ao elemento atual
//     });
//   }
  
//   // Chama a função após 5 segundos
//   window.onload = () => {
//     setTimeout(adicionarClasseComAtraso, 10000);
//   };

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const elementos = document.querySelectorAll('.animar1');
      elementos.forEach(elemento => {
        elemento.classList.add('animar2');
      });
    }, 3000); // Aguarda 10 segundos
  });
