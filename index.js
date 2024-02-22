// criacao de nos
const h1 = document.createElement("h1");
console.log(h1);

// preenchendo o nó
h1.innerText = "DOM";

//Colocando na arvore
const body = document.getElementsByTagName("body")[0];
body.appendChild(h1);

// criando uma imagem e colocando no body
const img = document.createElement("img");
img.setAttribute("src", "https://pbs.twimg.com/media/FljQAKvXoAEn1vk.jpg");
img.setAttribute("width", "1400");
body.appendChild(img);

// removendo elemento imagem
// body.removeChild(img);
// ou
// img.remove();

// construindo h2
const h2 = document.createElement("h2");
body.appendChild(h2);
h2.innerText = "Listinha";
body.appendChild(h2);

// construindo UL
const ul = document.createElement("ul");
body.appendChild(ul);

// const produtos = [];

function inserir() {
  //Criação do produto
  const produto = window.prompt("Digite o produto");
  const li = document.createElement("li");
  ul.appendChild(li);

  //Colocando enfase no texto
  const em = document.createElement("em");
  em.textContent = produto;
  li.appendChild(em);
  ul.appendChild(li);
}

function retirar() {
  const produtoRetirar = window.prompt("Digite o produto a ser retirado");

  //pegando todos os produtos
  const listaProdutos = document.getElementsByTagName("li");

  //encontrando o produto a ser retirado
  for (let i = 0; i < listaProdutos.length; i++) {
    if (produtoRetirar == listaProdutos[i].textContent) {
      listaProdutos[i].remove();
    }
  }
}

function menu() {
  const escolha = window.prompt(`
  [1] - Gol do Garro
  [2] - Foi muito no canto fidelkkkkkj
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
    window.alert("Digite uma opção valida!");
    menu();
  }
}

menu();

img.addEventListener("click", () => {
  menu();
});
