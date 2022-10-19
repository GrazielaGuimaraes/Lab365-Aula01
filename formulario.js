
//Chamada do botão do formulário html
function validar() {



//Pegando valores da página html
let nome = document.getElementById('nome').value
let idade = document.getElementById('idade').value
let profissao = document.getElementById('profissao').value 
let objetivoFloripaMaisTecExperiencia = document.getElementById('objExperiencia')
let objetivoFloripaMaisTecDiversao = document.getElementById('objDiversao')



	//Profissão - vinda do select

	if(profissao == '' || profissao == null || profissao == '-Selecione-') {
		profissao = 'Não selecionado'
		console.log('Profissão vazia, nula ou não selecionada')
	}

    if (profissao == '1') {
		profissao = 'Tosadora(o)'
	}

	if(profissao == '2') {
		profissao = 'Contadora(o)'
	}

	if(profissao == '3'){
		profissao = 'Administradora(o)'
	}

	if(profissao == '4'){
		profissao = 'Arquiteta(o)'
	}





	//Verificar qual objetivo está marcado - caixas de seleção - checkbox

	let objetivo = ''

	if(objetivoFloripaMaisTecExperiencia.checked){
		objetivo = objetivoFloripaMaisTecExperiencia.value
	}

	if(objetivoFloripaMaisTecDiversao.checked){
		objetivo = objetivoFloripaMaisTecDiversao.value
	}

	//Limpa os campos antes de mostrar no console
	limpar()



 //Verficar idade 
 let maiorIdade = ''

if(idade < 18){
	maiorIdade = 'menor de idade'
} else {
	maiorIdade = 'maior de idade'
}



console.log('Nome: ' + nome)
console.log('Idade: ' + idade + ' anos. Você é ' + maiorIdade)
console.log('Profissão: ' + profissao)
console.log('Objetivo na Floripa Mais Tec: ' + objetivo)


}

//Função limpar campos
function limpar(){

document.getElementById('nome').value = ''
document.getElementById('idade').value = ''
document.getElementById('profissao').value = '-Selecione-'
document.getElementById('objExperiencia').checked = false //desmarca as caixas selecionadas
document.getElementById('objDiversao').checked = false

}
