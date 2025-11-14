funcao contador()
{
	inteiro contador = 1, num = 0

	escreva("Digite um número inteiro de 1 a 10: ")
	leia(num)

	enquanto(num > contador){
		contador = contador + 1
		escreva("\nA contagem atual é ",contador,"")
	}
}