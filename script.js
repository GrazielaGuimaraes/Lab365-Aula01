//Chamada do botão do formulário
function validar() {



	if(!document.getElementById('profissao').value  == '' || document.getElementById('nome').value == ''  ||
		document.getElementById('idade').value == ''){



		if(document.getElementById('objOportunidade').checked || document.getElementById('objCuriosidade').checked) {




		let nome = document.getElementById('nome').value
		let idade = document.getElementById('idade').value
		let profissao = document.getElementById('profissao').value 

		let objetivo = ''

		if(document.getElementById('objOportunidade').checked){

			objetivo = document.getElementById('objOportunidade').value

		} else {

			objetivo = document.getElementById('objCuriosidade').value
		}



		/*Verifica idade*/
		let maiorIdade = ''
		if(idade < 18){
			maiorIdade = 'Menor de idade'
		} else{
			maiorIdade = 'Maior de idade'
		}



		console.log('Nome: ' + nome)
		console.log('Idade: ' + idade + ' anos. Você é ' + maiorIdade)
		console.log('Profissão: ' + profissao)
		console.log('Objetivo no Floripa Mais Tec: ' + objetivo)

		   

	
	//Limpa os campos antes de mostrar no console
	limpar()





		} else{

			alert('Preencha todos os campos obrigatórios *')

		} /*else objetivo*/
		



} else{

	alert('Preencha todos os campos obrigatórios *')

	} /*else campos vazios*/


} /*fim validar*/



//Função limpar campos
function limpar(){

document.getElementById('nome').value = ''
document.getElementById('idade').value = ''
document.getElementById('profissao').value = '-Selecione-'
document.getElementById('objOportunidade').checked = false //desmarca as caixas selecionadas
document.getElementById('objCuriosidade').checked = false

}
