function calcular(oper) {
   const valor1 = parseFloat(document.calcform.valor1.value);
   const valor2 = parseFloat(document.calcform.valor2.value);

   if (!valor1 || !valor2) return

   switch (oper) {
      case "somar":
         result = valor1 + valor2;
         break;

      case "subtrair":
         result = valor1 - valor2;
         break;

      case "multiplicar":
         result = valor1 * valor2;
         break;

      case "dividir":
         result = valor1 / valor2;
         break;
   }

   document.calcform.res.value = result;
}