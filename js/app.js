
let rdo = document.getElementById("resultado");
let op = document.getElementById("operacion");
let memoria = [ ]

reset = () => {
  memoria[0] = '?'
  rdo.innerHTML =0;
  op.innerHTML = 'RESET';
  op.style.color = 'crimson';
  setTimeout( () => {op.innerHTML='Hello!'; op.style.color = 'black';} ,200) 
}

send = (elemento) => {
  if ( rdo.innerHTML.includes('.') && elemento.innerHTML == '.') {} else {
    if (rdo.innerHTML === '0') {
      if (elemento.innerHTML == '.') {
        rdo.innerHTML += elemento.innerHTML;
      } else {
      rdo.innerHTML = elemento.innerHTML;
      }
    } else {
      rdo.innerHTML += elemento.innerHTML
    }
  }
}


operator = (operando) => {
  if (['Sumar', 'Restar', 'Multiplicar', 'Dividir'].includes(op.innerHTML) ) {
    console.log('YA ESTAS OPERANDO CONCHUDO')} else{
  switch (operando.innerHTML) {
    case '+':
      op.innerHTML='Sumar';
      memoria[1] = '+'
      break;
    case '-':
      op.innerHTML='Restar';
      memoria[1] = '-'
      break;
    case '*':
      op.innerHTML='Multiplicar'
      memoria[1] = '*'
      break;
    case '/':
      op.innerHTML='Dividir'
      memoria[1] = '/'
      break;
  }
  memoria[0] = rdo.innerHTML;
  rdo.innerHTML = 0;
}
}
  equals = () => {
    a = parseFloat(memoria[0])
    b = parseFloat(rdo.innerHTML)
    switch (memoria[1]) {
      case '+':
        rdo.innerHTML= a+b;
        console.log(a+b);
        break;
      case '-':
        rdo.innerHTML= a-b;
        console.log(a-b);
        break;
      case '*':
        rdo.innerHTML= a*b;
        console.log(a*b);   
        break;
      case '/':
        rdo.innerHTML= a/b;
        console.log(a/b); 
        break;
    }
    op.innerHTML='Resultado'
  }

//console.log( (Number('3.141516')).toFixed(5) )