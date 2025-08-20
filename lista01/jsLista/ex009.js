var valor, valor_acre, valor_desc

valor=parseFloat(prompt("Digite o valor de sua compra: "))
valor_acre=valor*1.15
valor_desc=valor*0.85

alert("A compra que custa "+ valor+" com acrescimo de 15% custara "+valor_acre+" e com desconto de 15% custara "+valor_desc)