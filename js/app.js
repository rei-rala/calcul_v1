let rdo = document.getElementById("resultado");
let op = document.getElementById("operacion");

let operator = document.getElementsByClassName('operator')
operator.addEventListener('click', (evento) => console.log(evento))



rdo.value = 0

texto=''
const showOp = (numero) => {
  if (op.innerHTML = 'Operacion') {
    op.innerHTML = texto
  }
  texto += numero
  return op.innerHTML+=texto
}

showOp(12325)



const calculate = ( n1, operator, n2) => {
  let result = "";
  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "/":
      result = n1 / n2;
      break;
    case "*":
      result = n1 * n2;
      break;
  }
  return result;
};