var app = angular.module('jogoDoOrcamento', []);

app.controller('GameCtrl', ['$scope', '$filter', function($scope, $filter){

    $scope.items = [ 
    {
    	value: 1,
    	name: 'Legislativa',
        color: '#3EBB47'
    }, 
    {
    	value: 1,
    	name: 'Judiciária',
        color: '#3E96BB'
    }, 
    {
    	value: 1,
    	name: 'Essencial à Justiça',
        color: '#BB4D3E'
    }, 
    {
    	value: 1,
    	name: 'Administração',
        color: '#efe63d'
    }, 
    {
    	value: 1,
    	name: 'Defesa Nacional',
        color: '#3EBBAB'
    }, 
    {
    	value: 1,
    	name: 'Segurança Pública',
        color: '#2A7E38'
    }, 
    {
    	value: 1,
    	name: 'Relações Exteriores',
        color: '#BB3E89'
    }, 
    {
    	value: 1,
    	name: 'Assistência Social',
        color: '#62CBC4'
    }, 
    {
    	value: 1,
    	name: 'Previdência Social',
        color: '#0F2E1F'
    }, 
    {
    	value: 15,
    	name: 'Saúde',
        color: '#BF406A'
    }, 
    {
    	value: 2,
    	name: 'Trabalho',
        color: '#2B827F'
    }, 
    {
    	value: 25,
    	name: 'Educação',
        color: '#E0E2A7'
    }, 
    {
    	value: 6,
    	name: 'Cultura',
        color: '#7E2A5D'
    }, 
    {
    	value: 1,
    	name: 'Direitos da Cidadania',
        color: '#C9EDE7'
    }, 
    {
    	value: 4,
    	name: 'Urbanismo',
        color: '#6B3924'
    }, 
    {
    	value: 2,
    	name: 'Habitação',
        color: '#D279CB'
    }, 
    {
    	value: 2,
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
    	value: 2,
    	name: 'Comércio e Serviços',
        color: '#B6E7D1'
    }, 
    {
    	value: 2,
    	name: 'Comunicações',
        color: '#181339'
    }, 
    {
    	value: 4,
    	name: 'Energia',
        color: '#BB7B3E'
    }, 
    {
    	value: 1,
    	name: 'Transporte',
        color: '#225467'
    }, 
    {
    	value: 4,
    	name: 'Desporto e Lazer',
        color: '#C3514B'
    }, 
    {
    	value: 0.9,
    	name: 'Encargos Especiais',
        color: '#D5F1DC'
    }, 
    {
    	value: 0.1,
    	name: 'Reserva de Contingência',
        color: '#321123'
    } ];


    // $scope.slider = function() {
        
    // };
    $scope.orcTotal = 3000000000000;

    $scope.valueTotal = function(val) {

        var somaTotal = val;
        if (somaTotal > 2000000000000) {
            somaTotal = somaTotal / 1000000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' trilhões';
        } else if (somaTotal > 1000000000000) {
            somaTotal = somaTotal / 1000000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' trilhão';
        } else if (somaTotal > 2000000000) {
            somaTotal = somaTotal / 1000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' bilhões';
        } else if (somaTotal > 1000000000) {
            somaTotal = somaTotal / 1000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' bilhão';
        } else if (somaTotal > 2000000) {
            somaTotal = somaTotal / 1000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' milhões';
        }else if (somaTotal > 1000000) {
            somaTotal = somaTotal / 1000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' milhão';
        } else if (somaTotal > 1000) {
            somaTotal = somaTotal / 1000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' mil';
        };
    }

    $scope.valueItem = function (item){
        var somaTotal = $scope.orcTotal / 100 * item.value;
        if (somaTotal > 2000000000000) {
            somaTotal = somaTotal / 1000000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' trilhões';
        } else if (somaTotal > 1000000000000) {
            somaTotal = somaTotal / 1000000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' trilhão';
        } else if (somaTotal > 2000000000) {
            somaTotal = somaTotal / 1000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' bilhões';
        } else if (somaTotal > 1000000000) {
            somaTotal = somaTotal / 1000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' bilhão';
        } else if (somaTotal > 2000000) {
            somaTotal = somaTotal / 1000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' milhões';
        }else if (somaTotal > 1000000) {
            somaTotal = somaTotal / 1000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' milhão';
        } else if (somaTotal > 1000) {
            somaTotal = somaTotal / 1000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' mil';
        };
    }

    $scope.sum = function(list) {
        var subtotal=0;
            angular.forEach(list , function(item){
            subtotal+= item.value;
        });
     	var total = 100 - subtotal
        return total.toFixed(1);
    }

    $scope.sumLeft = function(soma) {
        if (soma < 0) {
            return 'color: red'
        } else {
            return 'color: green'
        };
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