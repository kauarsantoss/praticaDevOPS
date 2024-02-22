// Criação do elemento <h1> e exibição no console
const h1 = document.createElement("h1");
console.log(h1);

// Preenchimento do elemento <h1> com o texto "DOM"
h1.innerText = "DOM";

// Colocação do elemento <h1> na árvore DOM, no final do corpo do documento
const body = document.getElementsByTagName("body")[0];
body.appendChild(h1);

// Criação de um elemento <img> e definição de atributos src e width
const img = document.createElement("img");
img.setAttribute("src", "https://pbs.twimg.com/media/FljQAKvXoAEn1vk.jpg");
img.setAttribute("width", "1400");
body.appendChild(img); // Adição da imagem ao corpo do documento

// Criação do elemento <h2>
const h2 = document.createElement("h2");
body.appendChild(h2); // Adição do <h2> ao corpo do documento
h2.innerText = "Listinha"; // Preenchimento do <h2> com o texto "Listinha"

// Criação de um elemento <ul>
const ul = document.createElement("ul");
body.appendChild(ul); // Adição da lista ao corpo do documento

// Função para inserir um item na lista
function inserir() {
  // Solicitação ao usuário para digitar o produto
  const produto = window.prompt("Digite o produto");
  const li = document.createElement("li"); // Criação de um elemento <li>
  ul.appendChild(li); // Adição do <li> à lista

  // Criação de um elemento <em> para enfatizar o texto do produto
  const em = document.createElement("em");
  em.textContent = produto; // Preenchimento do <em> com o texto do produto
  li.appendChild(em); // Adição do <em> ao <li>
  ul.appendChild(li); // Adição do <li> à lista
}

// Função para retirar um item da lista
function retirar() {
  // Solicitação ao usuário para digitar o produto a ser retirado
  const produtoRetirar = window.prompt("Digite o produto a ser retirado");

  // Obtém todos os elementos <li>
  const listaProdutos = document.getElementsByTagName("li");

  // Itera sobre os elementos para encontrar o produto a ser retirado e removê-lo
  for (let i = 0; i < listaProdutos.length; i++) {
    if (produtoRetirar == listaProdutos[i].textContent) {
      listaProdutos[i].remove();
    }
  }
}

// Função que exibe um menu para o usuário e chama recursivamente de acordo com a escolha
function menu() {
  const escolha = window.prompt(`
  [1] - Adicionar produto
  [2] - Remover produto
  [0] - Sair
  `);
  if (escolha == 1) {
    inserir();
    setTimeout(() => {
      menu();
    }, 1000);
  } else if (escolha == 2) {
    retirar();
    setTimeout(() => {
      menu();
    }, 1000);
  } else if (escolha == 0) {
    console.log("Até logo!");
  } else {
    window.alert("Digite uma opção válida!");
    menu();
  }
}

// Chamada inicial da função menu
menu();

// Adiciona um evento de clique na imagem para chamar o menu
img.addEventListener("click", () => {
  menu();
});
