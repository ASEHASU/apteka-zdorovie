// Найдём все кнопки "Купить"
const buttons = document.querySelectorAll(".product button");

// Добавим обработчик клика к каждой
buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Товар добавлен в корзину!");
  });
});
