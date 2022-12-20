const msg = document.querySelectorAll(".msg-chat");
const texto = document.querySelectorAll(".msg-texto");
const dados = [];
const enviar = document.querySelector("#enviar");

var valorTotal;
var parcelasTotais;
var parcelasPagas;
var adiantamento;

document
  .getElementById("valor-chat")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("enviar").click();
    }
  });

enviar.addEventListener("click", () => {
  msgEnviada(index);
  enviarMsg("enviar");
  msg[index].scrollIntoView();
  updateDados();
  document.getElementById("valor-chat").value = "";
});
let index = 0;

function msgEnviada(index) {
  msg[index].classList.add("ativo");
}
function enviarMsg(operacao) {
  if (operacao === "enviar") {
    msgEnviada((index += 1));
    msgEnviada((index += 1));
  }
}
function updateDados() {
  if (document.getElementById("valor-chat").value == "") {
    dados.push(0);
  } else {
    dados.push(document.getElementById("valor-chat").value);
  }
  valorTotal = Number(dados[0]);
  parcelasTotais = Number(dados[1]);
  parcelasPagas = Number(dados[2]);
  adiantamento = Number(dados[3]);

  const taxa = 0.816 / 100;
  var valorParcela = valorTotal / parcelasTotais;
  var parcelasAdiantadas = parcelasTotais - parcelasPagas;
  var parcelaFinal = parcelasAdiantadas - adiantamento + 1;
  var somaParcelas = (parcelasTotais + parcelaFinal) * (adiantamento / 2);

  var precoJuntos = valorParcela * adiantamento;
  var economia = valorParcela * somaParcelas * taxa;
  var precoEconomia = precoJuntos - economia;

  texto[1].innerHTML = `R$${valorTotal}`;
  texto[3].innerHTML = `Parcelei em ${parcelasTotais} vezes.`;
  texto[5].innerHTML = `Paguei ${parcelasPagas} parcela(s).`;
  texto[7].innerHTML = `Desejo adiantar ${adiantamento} parcela(s).`;
  texto[8].innerHTML = `De R$${precoJuntos.toFixed(
    2
  )} por R$${precoEconomia.toFixed(
    2
  )}. Você vai economizar R$${economia.toFixed(2)}.`;
}
