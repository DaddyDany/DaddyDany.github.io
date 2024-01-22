document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("formulario enviado");
  resetColors();
  getImc();
});

function getImc() {
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");
  const imcText = document.getElementById("imcText");
  const kg = Number(weight.value);
  const mts = Number(height.value);
  const imc = kg / (mts * mts);
  console.log("tu imc es " + imc);
  imcText.innerText = "IMC: " + imc.toFixed(1);
  turnOnLight(imc);
}

function turnOnLight(value) {
  const yellowCircle = document.getElementById("yellow");
  const greenCircle = document.getElementById("green");
  const orangeCircle = document.getElementById("orange");
  const redCircle = document.getElementById("red");
  if (value < 18.5) {
    yellowCircle.style.backgroundColor = "yellow";
  } else if (value >= 18.5 && value < 25) {
    greenCircle.style.backgroundColor = "green";
  } else if (value >= 25 && value < 30) {
    orangeCircle.style.backgroundColor = "orange";
  } else if (value >= 30) {
    redCircle.style.backgroundColor = "red";
  } else {
    console.log(typeof value);
    alert(
      "Verifica que los valores ingresados sean correctos. No pudimos calcular tu IMC."
    );
  }
}

function resetColors() {
  const circulos = document.getElementsByClassName("circle");
  Array.from(circulos).forEach((element) => {
    element.style.backgroundColor = "white";
    console.log("colores reseteados");
  });
}
