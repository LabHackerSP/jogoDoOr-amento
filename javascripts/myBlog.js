

var app = angular.module('jogoDoOrcamento', []);

app.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});

app.controller('GameCtrl', ['$scope', '$filter', function($scope, $filter){

    $scope.gabarito = [ 
    {
    	value: 0.2562461713,
    	name: 'Legislativa',
    }, 
    {
    	value: 1.137733,
    	name: 'Judiciária',
    }, 
    {
    	value: 0.2220800151,
    	name: 'Essencial à Justiça',
    }, 
    {
    	value: 0.9566523727,
    	name: 'Administração',
    }, 
    {
    	value: 2.053385986,
    	name: 'Defesa Nacional',
    }, 
    {
    	value: 0.276745865,
    	name: 'Segurança Pública',
    }, 
    {
    	value: 0.1059150841,
    	name: 'Relações Exteriores',
    }, 
    {
    	value: 2.65812695,
    	name: 'Assistência Social',
    }, 
    {
    	value: 19.56695764,
    	name: 'Previdência Social',
    }, 
    {
    	value: 3.430282079,
    	name: 'Saúde',
    }, 
    {
    	value: 2.538545403,
    	name: 'Trabalho',
    }, 
    {
    	value: 3.519114085,
    	name: 'Educação',
    }, 
    {
    	value: 0.07516554357,
    	name: 'Cultura',
    }, 
    {
    	value: 0.04441600302,
    	name: 'Direitos da Cidadania',
    }, 
    {
    	value: 0.08541539042,
    	name: 'Urbanismo',
    }, 
    {
    	value: 0.4236603365,
    	name: 'Habitação',
    }, 
    {
    	value: 0.02982705433,
    	name: 'Saneamento',
    }, 
    {
    	value: 0.2118301682,
    	name: 'Gestão Ambiental',
    }, 
    {
    	value: 0.2835790962,
    	name: 'Ciência e Tecnologia',
    }, 
    {
    	value: 1.028401301,
    	name: 'Agricultura',
    }, 
    {
    	value: 0.1366646247,
    	name: 'Organização Agrária',
    }, 
    {
    	value: 0.0649156967,
    	name: 'Indústria',
    }, 
    {
        value: 0.1810806277,
        name: 'Comércio e Serviços',
    },  
    {
    	value: 0.05124923425,
    	name: 'Comunicações',
    }, 
    {
    	value: 0.06833231233,
    	name: 'Energia',
    }, 
    {
    	value: 0.6218240422,
    	name: 'Transporte',
    }, 
    {
    	value: 0.05124923425,
    	name: 'Desporto e Lazer',
    }, 
    {
    	value: 58.08246548,
    	name: 'Encargos Especiais',
    }, 
    {
    	value: 1.838139202,
    	name: 'Reserva de Contingência',
    } ];

    $scope.ideal = [ 
    {
        value: 1,
        name: 'Legislativa',
    }, 
    {
        value: 1,
        name: 'Judiciária',
    }, 
    {
        value: 1,
        name: 'Essencial à Justiça',
    }, 
    {
        value: 1,
        name: 'Administração',
    }, 
    {
        value: 1,
        name: 'Defesa Nacional',
    }, 
    {
        value: 1,
        name: 'Segurança Pública',
    }, 
    {
        value: 1,
        name: 'Relações Exteriores',
    }, 
    {
        value: 1,
        name: 'Assistência Social',
    }, 
    {
        value: 1,
        name: 'Previdência Social',
    }, 
    {
        value: 15,
        name: 'Saúde',
    }, 
    {
        value: 2,
        name: 'Trabalho',
    }, 
    {
        value: 25,
        name: 'Educação',
    }, 
    {
        value: 6,
        name: 'Cultura',
    }, 
    {
        value: 1,
        name: 'Direitos da Cidadania',
    }, 
    {
        value: 4,
        name: 'Urbanismo',
    }, 
    {
        value: 2,
        name: 'Habitação',
    }, 
    {
        value: 2,
        name: 'Saneamento',
    }, 
    {
        value: 4,
        name: 'Gestão Ambiental',
    }, 
    {
        value: 4,
        name: 'Ciência e Tecnologia',
    }, 
    {
        value: 4,
        name: 'Agricultura',
    }, 
    {
        value: 4,
        name: 'Organização Agrária',
    }, 
    {
        value: 4,
        name: 'Indústria',
    }, 
    {
        value: 2,
        name: 'Comércio e Serviços',
    },  
    {
        value: 2,
        name: 'Comunicações',
    }, 
    {
        value: 4,
        name: 'Energia',
    }, 
    {
        value: 1,
        name: 'Transporte',
    }, 
    {
        value: 4,
        name: 'Desporto e Lazer',
    }, 
    {
        value: 0.9,
        name: 'Encargos Especiais',
    }, 
    {
        value: 0.1,
        name: 'Reserva de Contingência',
    } ];

    $scope.items = $scope.ideal;

    $scope.toIdeal = function () {
        $scope.items = $scope.ideal;
        $('[data-toggle="tooltip"]').tooltip()
    }
    $scope.toReal = function () {
        $scope.items = $scope.gabarito;
        $('[data-toggle="tooltip"]').tooltip()
    }


    $scope.orcTotal = 2926873000000;

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
        } else if (somaTotal >= 1000000000000) {
            somaTotal = somaTotal / 1000000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' trilhão';
        } else if (somaTotal > 2000000000) {
            somaTotal = somaTotal / 1000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' bilhões';
        } else if (somaTotal >= 1000000000) {
            somaTotal = somaTotal / 1000000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' bilhão';
        } else if (somaTotal > 2000000) {
            somaTotal = somaTotal / 1000000;
            return $filter('currency')(somaTotal, 'R$', 2) + ' milhões';
        }else if (somaTotal >= 1000000) {
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
        return total.toFixed(2);
    }

    $scope.sumLeft = function(soma) {
        if (soma < 0) {
            return 'color: red'
        } else if (soma = 0) {
            return 'color: blue'
        } else {
            return 'color: green'
        };
    }


    $scope.style = function(item) {
     	var soma=0;

        for (i in $scope.items) {
            soma += $scope.items[i].value;
        };

        var divWidth = document.getElementById('canvas').clientWidth * 0.9;
        $('#fullMarker').css('left', divWidth);
        $('#fullText').css('left', divWidth);
        var barWidth = ((divWidth / 100) * item.value.toFixed(1));
        var s = 'width :' +  String(barWidth) + 'px';
        return s
    }

		

}]);

