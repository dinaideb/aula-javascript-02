/**2)      Criar variáveis para:
a)       Armazenar os valores: 10, 3, 9, 99.9, 721;
b)      As variáveis deverão ser do tipo objeto Number.
c)       Mostrar os valores no console.
d)      Validar se a primeira variável é menor que o valor Number.MAX_VALUE;
e)      Mostrar o resultado e valores no console;
f)        Validar se a segunda variável possui valor igual a NaN;
g)       Mostrar o resultado e valores no console;
h)      Validar se a quinta variável é menor ou igual a terceira variável;
i)        Mostrar o resultado e valores no console.
 */

var valores = {valor1: 10, valor2: 3, valor3: 9, valor4: 99.9, valor5: 721};

console,log(valores);

console.log(valores.valor1 < Number.MAX_VALUE);

console.log(valores.valor2 == NaN);

console.log(valores.valor5 <= valores.valor3);