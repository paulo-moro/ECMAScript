// parametros opicionais

function soma(a, b){
  console.log(a + b)
}

function subtração(a, b){
  console.log(a - b)
}

function soma(a, b = 0){
  console.log(a + b)
}

function subtração(a, b = 0){
  console.log(a - b)
}

function subtraçãoInv(a,b, inverter = false){
  if(inverter){
    console.log(b - a)
  } else {
    console.log(a - b)
  }
}

