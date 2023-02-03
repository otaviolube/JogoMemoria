var cartoes = document.querySelectorAll(".cartao");

function virarCartao() {
  this.classList.toggle("virado");
}

cartoes.forEach(function (cartao) {
  cartao.addEventListener("click", virarCartao);
});
