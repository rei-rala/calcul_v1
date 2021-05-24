
let rdo = document.getElementById("resultado");
let op = document.getElementById("operacion");
let memoria = [0,0,0 ]
let usuario_opero = 'No'

reset = () => {
  console.log('Reset')
  memoria[0] = 0
  rdo.innerHTML = 0;
  op.innerHTML = 'RESET';
  op.style.color = 'crimson';
  setTimeout( () => {op.innerHTML='Hello!'; op.style.color = 'black';} ,200) 
}

send = (elemento) => {
  let largo = rdo.innerHTML.length;
  //console.log(largo); // Prueba el largo del input
  if (rdo.innerHTML == 'Superado maximo') {}
  else {
    if (largo == '21') {
      console.log('Excedido Caracteres')
    } else {
      if ( rdo.innerHTML.includes('.') && elemento.innerHTML == '.') {console.log('Separador decimal ya incorporado')} else {
        if (rdo.innerHTML === '0') {
          if (elemento.innerHTML == '.') {
            rdo.innerHTML += elemento.innerHTML;
          } else {
          rdo.innerHTML = elemento.innerHTML;
          }
        } else {
          rdo.innerHTML += elemento.innerHTML;
        }
      }
    }
  }
}


operator = (operando) => {
  if (rdo.innerHTML == 'Superado maximo') {}
  else {
    if ( usuario_opero == 'Si' ) {
      console.log(`Ya estas operando: ${op.innerHTML} a ${memoria[0]}`)
    } else {
      memoria[0] = rdo.innerHTML;
      rdo.innerHTML = 0;
      switch (operando.innerHTML) {
      case '+':
        op.innerHTML= `Sumando a ${memoria[0]}`;
        memoria[1] = '+';
        break;
      case '-':
        op.innerHTML=`Restar a ${memoria[0]}`;
        memoria[1] = '-';
        break;
      case '*':
        op.innerHTML=`Multiplicar ${memoria[0]} por`;
        memoria[1] = '*';
        break;
      case '/':
        op.innerHTML=`Dividir a ${memoria[0]} por`;
        memoria[1] = '/';
        break;
      }
      usuario_opero = 'Si';
    }
  }

}

equals = () => {
  if (usuario_opero == 'Si') {
  a = parseFloat(memoria[0]);
  b = parseFloat(rdo.innerHTML);

  switch (memoria[1]) {
    case '+':
      rdo.innerHTML= a+b;
      break;
    case '-':
      rdo.innerHTML= a-b;
      break;
    case '*':
      rdo.innerHTML= a*b;
      break;
    case '/':
      rdo.innerHTML= (a/b);
      break;
    }
  console.log(rdo.innerHTML)
  op.innerHTML= 'Resultado';
  usuario_opero = 'No';
  } else {
    console.log('Aguardando operacion')
  }
}