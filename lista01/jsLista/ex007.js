var compra, quant_parcelas, parcela

compra=parseFloat(prompt("Qual o valor de ua compra: "))
quant_parcelas=parseInt(prompt("Quantas parcela serão realizadas: "))

parcela=compra/quant_parcelas

alert("A compra de "+compra+" parcelada em "+quant_parcelas+" tem como valor de cada parcela de "+parcela)