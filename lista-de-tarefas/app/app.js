var app = angular.module('listaDeTarefas', []);

app.controller('TarefasController', function($scope){
	//Lista com tarefas
	$scope.tarefas = [
		{
			texto: 'Tarefa de número 1',
			feita: true
		},
		{
			texto: 'Tarefa de número 2',
			feita: true
		},
		{
			texto: 'Tarefa de número 3',
			feita: true
		},
		{
			texto: 'Tarefa de número 4',
			feita: false
		},
		{
			texto: 'Tarefa de número 5',
			feita: false
		}
	];

	//Adicionar nova tarefa
	$scope.adicionarTarefa = function(tarefa) {
		$scope.tarefas.push(tarefa);
		$scope.tarefa = '';
		console.log('!');
	};

	//Tarefas restantes
	$scope.restantes = function () {
		var count = 0;
		angular.forEach($scope.tarefas, function(tarefa){
			count += tarefa.feita ? 1 : 0;
		});
		return count;
	};
});


