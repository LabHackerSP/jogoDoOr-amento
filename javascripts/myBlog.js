var app = angular.module('jogoDoOrcamento', []);

app.controller('GameCtrl', ['$scope', function($scope){

    $scope.items = [ 
    {
    	value: 1,
    	name: 'Legislativa',
        color: '#3EBB47'
    }, 
    {
    	value: 2,
    	name: 'Judiciária',
        color: '#3E96BB'
    }, 
    {
    	value: 3,
    	name: 'Essencial à Justiça',
        color: '#BB4D3E'
    }, 
    {
    	value: 4,
    	name: 'Administração',
        color: '#efe63d'
    }, 
    {
    	value: 4,
    	name: 'Defesa Nacional',
        color: '#3EBBAB'
    }, 
    {
    	value: 4,
    	name: 'Segurança Pública',
        color: '#2A7E38'
    }, 
    {
    	value: 4,
    	name: 'Relações Exteriores',
        color: '#BB3E89'
    }, 
    {
    	value: 4,
    	name: 'Assistência Social',
        color: '#62CBC4'
    }, 
    {
    	value: 4,
    	name: 'Previdência Social',
        color: '#0F2E1F'
    }, 
    {
    	value: 4,
    	name: 'Saúde',
        color: '#BF406A'
    }, 
    {
    	value: 4,
    	name: 'Trabalho',
        color: '#2B827F'
    }, 
    {
    	value: 4,
    	name: 'Educação',
        color: '#E0E2A7'
    }, 
    {
    	value: 4,
    	name: 'Cultura',
        color: '#7E2A5D'
    }, 
    {
    	value: 4,
    	name: 'Direitos da Cidadania',
        color: '#C9EDE7'
    }, 
    {
    	value: 4,
    	name: 'Urbanismo',
        color: '#6B3924'
    }, 
    {
    	value: 4,
    	name: 'Habitação',
        color: '#D279CB'
    }, 
    {
    	value: 4,
    	name: 'Saneamento',
        color: '#184849'
    }, 
    {
    	value: 4,
    	name: 'Gestão Ambiental',
        color: '#FAFCF7'
    }, 
    {
    	value: 4,
    	name: 'Ciência e Tecnologia',
        color: '#301132'
    }, 
    {
    	value: 4,
    	name: 'Agricultura',
        color: '#2F8E37'
    }, 
    {
    	value: 4,
    	name: 'Organização Agrária',
        color: '#CD6A6F'
    }, 
    {
    	value: 4,
    	name: 'Indústria',
        color: '#CCCC66'
    }, 
    {
    	value: 4,
    	name: 'Comércio e Serviços',
        color: '#B6E7D1'
    }, 
    {
    	value: 4,
    	name: 'Comunicações',
        color: '#181339'
    }, 
    {
    	value: 4,
    	name: 'Energia',
        color: '#BB7B3E'
    }, 
    {
    	value: 4,
    	name: 'Transporte',
        color: '#225467'
    }, 
    {
    	value: 4,
    	name: 'Desporto e Lazer',
        color: '#C3514B'
    }, 
    {
    	value: 4,
    	name: 'Encargos Especiais',
        color: '#D5F1DC'
    }, 
    {
    	value: 4,
    	name: 'Reserva de Contingência',
        color: '#321123'
    } ];


    // $scope.slider = function() {
        
    // };

    $scope.sum = function(list) {
        var subtotal=0;
            angular.forEach(list , function(item){
            subtotal+= item.value;
        });
     	var total = 100 - subtotal
        return total.toFixed(1);
    }

    $scope.style = function(item) {
     	var soma=0;

        for (i in $scope.items) {
            soma += $scope.items[i].value;
        };

        var divWidth = document.getElementById('canvas').clientWidth * 0.75;
        $('#fullMarker').css('left', divWidth);
        $('#fullText').css('left', divWidth);
        var barWidth = ((divWidth / 100) * item.value.toFixed(1));
        var s = 'width :' +  String(barWidth) + 'px';
        return s
    }

		

}]);