import { listaDoCarrinho } from "../scripts/database.js";
import { removeDoCarrinho } from "../scripts/script.js";

const myCart = document.querySelector(".cart__container");

listaDoCarrinho.forEach((item) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card__container"); // Adicione uma classe ao cardContainer, se necessário

  cardContainer.innerHTML = `
  <div class='card__content'>
  <img class='card__img' src="${item.image}" />
  
  <div class='card__info'>
  <p class='card__name'>${item.name}</p>
  <p class='card__price'>${item.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}</p>
    </div>
    </div>

      <p class='card__remove' >X</p>
    `;

  const buttonRemove = cardContainer.querySelector(".card__remove");

  buttonRemove &&
    buttonRemove.addEventListener("click", (e) => {
      e.preventDefault();
      removeDoCarrinho(item);
    });

  myCart.appendChild(cardContainer);
});