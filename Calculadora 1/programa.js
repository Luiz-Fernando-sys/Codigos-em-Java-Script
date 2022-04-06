function calcular(operacao) {
   const valor1 = parseFloat(document.calcform.valor1.value);
   const valor2 = parseFloat(document.calcform.valor2.value);
   let resultado = 0

   if (!valor1 || !valor2) return

   switch (operacao) {
      case "somar":
         resultado = valor1 + valor2;
         break;

      case "subtrair":
         resultado = valor1 - valor2;
         break;

      case "multiplicar":
         resultado = valor1 * valor2;
         break;

      case "dividir":
         resultado = valor1 / valor2;
         break;
   }

   document.calcform.res.value = resultado;
}