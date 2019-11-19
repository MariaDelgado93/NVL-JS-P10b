var num = Math.floor((Math.random() * 100) + 1);
var pares = []
var impares = []

for (var i = 0; i < 50 + 1; i++){
  if (num % 2 == 0){
    pares.push(num)
  }else{
    impares.push(num)
  }
}
