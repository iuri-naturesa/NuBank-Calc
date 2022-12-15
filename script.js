function calcular() {
  var valorTotal = document.querySelector("#valortotal").value;
  var parcelasTotais = document.querySelector("#parcelastotais").value;
  var parcelasPagas = document.querySelector("#parcelaspagas").value;
  var adiantamento = document.querySelector("#adiantamento").value;

  var valorTotalN = Number(valorTotal);
  var parcelasTotaisN = Number(parcelasTotais);
  var parcelasPagasN = Number(parcelasPagas);
  var adiantamentoN = Number(adiantamento);

  const taxa = 0.816 / 100;
  var valorParcelaN = valorTotalN / parcelasTotaisN;
  var parcelaFinalN = parcelasTotaisN - adiantamentoN + 1;
  var somaParcelasN = (parcelasTotaisN + parcelaFinalN) * (adiantamentoN / 2);

  var economia = valorParcelaN * somaParcelasN * taxa;

  document.querySelector("#resultado").innerHTML = economia + " " + "Reais";

  console.log(parcelasTotaisN);
  console.log(parcelaFinalN);
  console.log(valorParcelaN);
  console.log(somaParcelasN);
  console.log(economia);
}
