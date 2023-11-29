let heroi= "Markerah"
let XP = "7000"

switch (XP){
  case "Ferro":
    console.log("Se o XP for menor que 1000 = Ferro");
    break;
  case "Bronze":
    console.log("Se o XP for menor que 1001 e 2000 = Bronze");
    break;
  case "Prata":
    console.log("Se o XP for menor que 2.001 e 5.000 = Prata");
    break;
  case "Ouro":
    console.log("Se o XP for menor que 5.001 e 7.000 = Ouro");
    break;
  case "Platina":
    console.log("Se o XP for menor que 7.001 e 8.000 = Platina");
    break;
  case "Ascendente":
    console.log("Se o XP for menor que 8.001 e 9.000 = Ascendente");
    break;
  case "Imortal":
    console.log("Se o XP for menor que 9.001 e 10.000 = Imortal");
    break;
  case "Radiante":
    console.log("Se o XP for maior ou igual a 10.000 = Radiante");
    break;
  default:
    console.log("O Herói de nome markerah está no nível 7000");
}      

        
