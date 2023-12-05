let userEdad = parseInt(prompt("Ingrese su edad"));
let userEdadMax = parseInt(prompt("Ingrese su edad maxima"));
let snacksPorDia = parseInt(prompt("Snacks que comes por dia: "));
let snackPrecio = parseFloat(prompt("Ingrese el precio por unidad de snack: "));
let diasRestantes = (userEdadMax - userEdad) * 365;
let snacksRestantes = diasRestantes * snacksPorDia;

alert(
  "Necesitarás " +
    snacksRestantes +
    " snacks para que te alcancen hasta los " +
    userEdadMax +
    " años."
);

alert (
  "Gastaras $" +
  snacksRestantes * snackPrecio +
  " en " +
  snacksRestantes +
  " snacks"
);
