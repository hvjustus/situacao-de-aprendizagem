funcao converterKmhEmMs()
{		
	real kilometroHora = 0.0
	real metroSegundo = 0.0
	
	escreva("Conversor de km/h em m/s \n")
	escreva("Insira a velocidade em km/h \n")
	leia(kilometroHora)

	metroSegundo = kilometroHora / 3.6

	escreva("A velocidade convertida é ", metroSegundo ,"m/s \n")
}