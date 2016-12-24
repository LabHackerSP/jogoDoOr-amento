

var app = angular.module('jogoDoOrcamento', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/orc.html"
    })
    .when("/orc", {
        templateUrl : "templates/orc.html"
    })
    .when("/comp", {
        templateUrl : "templates/comp.html"
    });
});

app.controller('GameCtrl', ['$scope', '$filter', function($scope, $filter, $route){

    // $scope.$on('$routeChangeStart', function (event, next, prev) {
    //     console.log('oi');
    //     $( "#appView" ).addClass( "faded" );
    // });
    // $scope.$on('$routeChangeSuccess', function (event, next, prev) {
    //     console.log('tchau');
    //     $( "#appView" ).delay(500).removeClass( "faded" );
    // });



    $scope.gabarito = [ 
        {
        	value: 0.2562461713,
        	name: 'Legislativa',
            imageSrc: 'icons/i_04.png'
        }, 
        {
        	value: 1.137733,
        	name: 'Judiciária',
            imageSrc: 'icons/i_21.png'
        }, 
        {
        	value: 0.2220800151,
        	name: 'Essencial à Justiça',
            imageSrc: 'icons/i_24.png'
        }, 
        {
        	value: 0.9566523727,
        	name: 'Administração',
            imageSrc: 'icons/i_27.png'
        }, 
        {
        	value: 2.053385986,
        	name: 'Defesa Nacional',
            imageSrc: 'icons/i_18.png'
        }, 
        {
        	value: 0.276745865,
        	name: 'Segurança Pública',
            imageSrc: 'icons/i_19.png'
        }, 
        {
        	value: 0.1059150841,
        	name: 'Relações Exteriores',
            imageSrc: 'icons/i_08.png'
        }, 
        {
        	value: 2.65812695,
        	name: 'Assistência Social',
            imageSrc: 'icons/i_12.png'
        }, 
        {
        	value: 19.56695764,
        	name: 'Previdência Social',
            imageSrc: 'icons/i_03.png'
        }, 
        {
        	value: 3.430282079,
        	name: 'Saúde',
            imageSrc: 'icons/i_09.png'
        }, 
        {
        	value: 2.538545403,
        	name: 'Trabalho',
            imageSrc: 'icons/i_15.png'
        }, 
        {
        	value: 3.519114085,
        	name: 'Educação',
            imageSrc: 'icons/i_06.png'
        }, 
        {
        	value: 0.07516554357,
        	name: 'Cultura',
            imageSrc: 'icons/i_05.png'
        }, 
        {
        	value: 0.04441600302,
        	name: 'Direitos da Cidadania',
            imageSrc: 'icons/i_17.png'
        }, 
        {
        	value: 0.08541539042,
        	name: 'Urbanismo',
            imageSrc: 'icons/i_25.png'
        }, 
        {
        	value: 0.4236603365,
        	name: 'Habitação',
            imageSrc: 'icons/i_23.png'
        }, 
        {
        	value: 0.02982705433,
        	name: 'Saneamento',
            imageSrc: 'icons/i_02.png'
        }, 
        {
        	value: 0.2118301682,
        	name: 'Gestão Ambiental',
            imageSrc: 'icons/i_16.png'
        }, 
        {
        	value: 0.2835790962,
        	name: 'Ciência e Tecnologia',
            imageSrc: 'icons/i_13.png'
        }, 
        {
        	value: 1.028401301,
        	name: 'Agricultura',
            imageSrc: 'icons/i_10.png'
        }, 
        {
        	value: 0.1366646247,
        	name: 'Organização Agrária',
            imageSrc: 'icons/i_28.png'
        }, 
        {
        	value: 0.0649156967,
        	name: 'Indústria',
            imageSrc: 'icons/i_22.png'
        }, 
        {
            value: 0.1810806277,
            name: 'Comércio e Serviços',
            imageSrc: 'icons/i_22.png'
        },  
        {
        	value: 0.05124923425,
        	name: 'Comunicações',
            imageSrc: 'icons/i_14.png'
        }, 
        {
        	value: 0.06833231233,
        	name: 'Energia',
            imageSrc: 'icons/i_11.png'
        }, 
        {
        	value: 0.6218240422,
        	name: 'Transporte',
            imageSrc: 'icons/i_07.png'
        }, 
        {
        	value: 0.05124923425,
        	name: 'Desporto e Lazer',
            imageSrc: 'icons/i_21.png'
        }, 
        {
        	value: 58.08246548,
        	name: 'Encargos Especiais',
            imageSrc: 'icons/i_26.png'
        }, 
        {
        	value: 1.838139202,
        	name: 'Reserva de Contingência',
            imageSrc: 'icons/i_29.png'
    } ];

    $scope.ideal = [ 
        {
            value: 1,
            name: 'Legislativa',
            imageSrc: 'icons/i_04.png'
        }, 
        {
            value: 1,
            name: 'Judiciária',
            imageSrc: 'icons/i_21.png'
        }, 
        {
            value: 1,
            name: 'Essencial à Justiça',
            imageSrc: 'icons/i_24.png'
        }, 
        {
            value: 1,
            name: 'Administração',
            imageSrc: 'icons/i_27.png'
        }, 
        {
            value: 1,
            name: 'Defesa Nacional',
            imageSrc: 'icons/i_18.png'
        }, 
        {
            value: 1,
            name: 'Segurança Pública',
            imageSrc: 'icons/i_19.png'
        }, 
        {
            value: 1,
            name: 'Relações Exteriores',
            imageSrc: 'icons/i_08.png'
        }, 
        {
            value: 1,
            name: 'Assistência Social',
            imageSrc: 'icons/i_12.png'
        }, 
        {
            value: 1,
            name: 'Previdência Social',
            imageSrc: 'icons/i_03.png'
        }, 
        {
            value: 1,
            name: 'Saúde',
            imageSrc: 'icons/i_09.png'
        }, 
        {
            value: 1,
            name: 'Trabalho',
            imageSrc: 'icons/i_15.png'
        }, 
        {
            value: 1,
            name: 'Educação',
            imageSrc: 'icons/i_06.png'
        }, 
        {
            value: 1,
            name: 'Cultura',
            imageSrc: 'icons/i_05.png'
        }, 
        {
            value: 1,
            name: 'Direitos da Cidadania',
            imageSrc: 'icons/i_17.png'
        }, 
        {
            value: 1,
            name: 'Urbanismo',
            imageSrc: 'icons/i_25.png'
        }, 
        {
            value: 1,
            name: 'Habitação',
            imageSrc: 'icons/i_23.png'
        }, 
        {
            value: 1,
            name: 'Saneamento',
            imageSrc: 'icons/i_02.png'
        }, 
        {
            value: 1,
            name: 'Gestão Ambiental',
            imageSrc: 'icons/i_16.png'
        }, 
        {
            value: 1,
            name: 'Ciência e Tecnologia',
            imageSrc: 'icons/i_13.png'
        }, 
        {
            value: 1,
            name: 'Agricultura',
            imageSrc: 'icons/i_10.png'
        }, 
        {
            value: 1,
            name: 'Organização Agrária',
            imageSrc: 'icons/i_28.png'
        }, 
        {
            value: 1,
            name: 'Indústria',
            imageSrc: 'icons/i_22.png'
        }, 
        {
            value: 1,
            name: 'Comércio e Serviços',
            imageSrc: 'icons/i_22.png'
        },  
        {
            value: 1,
            name: 'Comunicações',
            imageSrc: 'icons/i_14.png'
        }, 
        {
            value: 1,
            name: 'Energia',
            imageSrc: 'icons/i_11.png'
        }, 
        {
            value: 1,
            name: 'Transporte',
            imageSrc: 'icons/i_07.png'
        }, 
        {
            value: 1,
            name: 'Desporto e Lazer',
            imageSrc: 'icons/i_21.png'
        }, 
        {
            value: 1,
            name: 'Encargos Especiais',
            imageSrc: 'icons/i_26.png'
        }, 
        {
            value: 1,
            name: 'Reserva de Contingência',
            imageSrc: 'icons/i_29.png'
    } ];

    $scope.imaginario = [ 
        {
            value: 2,
            name: 'Legislativa',
            imageSrc: 'icons/i_04.png'
        }, 
        {
            value: 2,
            name: 'Judiciária',
            imageSrc: 'icons/i_21.png'
        }, 
        {
            value: 2,
            name: 'Essencial à Justiça',
            imageSrc: 'icons/i_24.png'
        }, 
        {
            value: 2,
            name: 'Administração',
            imageSrc: 'icons/i_27.png'
        }, 
        {
            value: 2,
            name: 'Defesa Nacional',
            imageSrc: 'icons/i_18.png'
        }, 
        {
            value: 2,
            name: 'Segurança Pública',
            imageSrc: 'icons/i_19.png'
        }, 
        {
            value: 2,
            name: 'Relações Exteriores',
            imageSrc: 'icons/i_08.png'
        }, 
        {
            value: 2,
            name: 'Assistência Social',
            imageSrc: 'icons/i_12.png'
        }, 
        {
            value: 2,
            name: 'Previdência Social',
            imageSrc: 'icons/i_03.png'
        }, 
        {
            value: 2,
            name: 'Saúde',
            imageSrc: 'icons/i_09.png'
        }, 
        {
            value: 2,
            name: 'Trabalho',
            imageSrc: 'icons/i_15.png'
        }, 
        {
            value: 2,
            name: 'Educação',
            imageSrc: 'icons/i_06.png'
        }, 
        {
            value: 2,
            name: 'Cultura',
            imageSrc: 'icons/i_05.png'
        }, 
        {
            value: 2,
            name: 'Direitos da Cidadania',
            imageSrc: 'icons/i_17.png'
        }, 
        {
            value: 2,
            name: 'Urbanismo',
            imageSrc: 'icons/i_25.png'
        }, 
        {
            value: 2,
            name: 'Habitação',
            imageSrc: 'icons/i_23.png'
        }, 
        {
            value: 2,
            name: 'Saneamento',
            imageSrc: 'icons/i_02.png'
        }, 
        {
            value: 2,
            name: 'Gestão Ambiental',
            imageSrc: 'icons/i_16.png'
        }, 
        {
            value: 2,
            name: 'Ciência e Tecnologia',
            imageSrc: 'icons/i_13.png'
        }, 
        {
            value: 2,
            name: 'Agricultura',
            imageSrc: 'icons/i_10.png'
        }, 
        {
            value: 2,
            name: 'Organização Agrária',
            imageSrc: 'icons/i_28.png'
        }, 
        {
            value: 2,
            name: 'Indústria',
            imageSrc: 'icons/i_22.png'
        }, 
        {
            value: 2,
            name: 'Comércio e Serviços',
            imageSrc: 'icons/i_22.png'
        },  
        {
            value: 2,
            name: 'Comunicações',
            imageSrc: 'icons/i_14.png'
        }, 
        {
            value: 2,
            name: 'Energia',
            imageSrc: 'icons/i_11.png'
        }, 
        {
            value: 2,
            name: 'Transporte',
            imageSrc: 'icons/i_07.png'
        }, 
        {
            value: 2,
            name: 'Desporto e Lazer',
            imageSrc: 'icons/i_21.png'
        }, 
        {
            value: 2,
            name: 'Encargos Especiais',
            imageSrc: 'icons/i_26.png'
        }, 
        {
            value: 2,
            name: 'Reserva de Contingência',
            imageSrc: 'icons/i_29.png'
    } ];

    $scope.items = $scope.ideal;

    $scope.toIdeal = function () {
        $scope.items = $scope.ideal;
        $scope.barName = 'ideal';

        $('#myTabs li:first-child').addClass('active');
        $('#myTabs li:last-child').removeClass('active');
    }
    $scope.toImaginario = function () {
        $scope.items = $scope.imaginario;
        $scope.barName = 'imaginario';

        $('#myTabs li:last-child').addClass('active');
        $('#myTabs li:first-child').removeClass('active');
    }


    $scope.orcTotal = 2926873000000;

    $scope.valueTotal = function(val) {

        var somaTotal = val;
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
        } else if (somaTotal >= 1000000) {
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
     	var total = subtotal
        return total.toFixed(2);
    }
    $scope.sum2 = function(list) {
        var subtotal=0;
            angular.forEach(list , function(item){
            subtotal+= item.value;
        });
        var total = 100 - subtotal
        return total.toFixed(2);
    }

    $scope.barLeft = function(soma) {
        if (soma > 100) {
            return 'background-color: #e26969; width: 100 vw'
        } else if (soma == 100) {
            return 'background-color: #68afbf; width: 100 vw'
        } else if (soma < 100) {
            return 'background-color: #68bf68; width:' + soma + 'vw'
        }
    }

    $scope.barMouseEnter = function(i) {
        $scope.items[i].style = 'background-color: #fff; border: 1px solid #3c3c3c;';
        $('.bar').eq(i).addClass('barhover');
        $('.bar .tooltips').eq(i).css('opacity', 1);

    }
    $scope.barMouseLeave = function(i) {
        $scope.items[i].style = 'background-color: #f6f6f6; border:  1px solid #e7e7e7;'; 
        $('.bar').eq(i).removeClass('barhover');
        $('.bar .tooltips').eq(i).css('opacity', 0);

    }

    $scope.boxMouseEnter = function(i) {
        $scope.items[i].style = 'background-color: #fff; border: 1px solid #3c3c3c;';

    }
    $scope.boxMouseLeave = function(i) {
        $scope.items[i].style = 'background-color: #f6f6f6; border:  1px solid #e7e7e7;'; 

    }

    $scope.barMouseEnterComp = function(i) {
        $scope.items[i].style = 'background-color: #fff; border: 1px solid #3c3c3c;'; 
        $('.bgabarito').eq(i).addClass('barhover');
        $('.bideal').eq(i).addClass('barhover');
        $('.bimaginario').eq(i).addClass('barhover');

        $('.bgabarito .tooltips').eq(i).css('opacity', 1);
        $('.bideal .tooltips').eq(i).css('opacity', 1);
        $('.bimaginario .tooltips').eq(i).css('opacity', 1);

    }
    $scope.barMouseLeaveComp = function(i) {
        $scope.items[i].style = 'background-color: #f6f6f6; border:  1px solid #e7e7e7;'; 
        $('.bgabarito').eq(i).removeClass('barhover');
        $('.bideal').eq(i).removeClass('barhover');
        $('.bimaginario').eq(i).removeClass('barhover');

        $('.bgabarito .tooltips').eq(i).css('opacity', 0);
        $('.bideal .tooltips').eq(i).css('opacity', 0);
        $('.bimaginario .tooltips').eq(i).css('opacity', 0);


    }


    $scope.barStyle = function(item) {
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

    $scope.barStyleComp = function(item) {
        var soma=0;

        for (i in $scope.items) {
            soma += $scope.items[i].value;
        };

        var divWidth = document.getElementById('canvas').clientWidth * 0.998;
        $('#fullMarker').css('left', divWidth);
        $('#fullText').css('left', divWidth);
        var barWidth = ((divWidth / 100) * item.value.toFixed(1));
        var s = 'width :' +  String(barWidth) + 'px';
        return s
    }


    $scope.barStyleComparar = function(list, i) {
        // Se o gabarito for o maior
        if ($scope.gabarito[i].value >= $scope.ideal[i].value && $scope.gabarito[i].value >= $scope.imaginario[i].value ) {
            var bigger = $scope.gabarito[i].value
            if (list === $scope.ideal) {
                
                // console.log('lista: ideal, maior n: gabarito')
                
                var height = $scope.ideal[i].value * 8 / $scope.gabarito[i].value;
                var h = 'height :' +  String(height) + 'vh';
                return h

            } else if (list === $scope.imaginario) {
                
                // console.log('lista: imaginario, maior n: gabarito')
                
                var height = $scope.imaginario[i].value * 8 / $scope.gabarito[i].value;
                var h = 'height :' +  String(height) + 'vh';
                return h

            } else {
                
                // console.log('lista: gabarito, maior n: gabarito')
                
                var h = 'height : 8vh';
                return h

            };
        // Se o ideal for o maior
        } else if ($scope.ideal[i].value >= $scope.gabarito[i].value && $scope.ideal[i].value >= $scope.imaginario[i].value ) {
            var bigger = $scope.ideal[i].value
            if (list === $scope.ideal) {
                
                // console.log('lista: ideal, maior n: ideal')
                
                var h = 'height : 8vh';
                return h

            } else if (list === $scope.imaginario){
                
                // console.log('lista: imaginario, maior n: ideal')
                
                var height = $scope.imaginario[i].value * 8 / $scope.ideal[i].value;
                var h = 'height :' +  String(height) + 'vh';
                return h

            } else {
                
                // console.log('lista: gabarito, maior n: ideal')
                
                var height = $scope.gabarito[i].value * 8 / $scope.ideal[i].value;
                var h = 'height :' +  String(height) + 'vh';
                return h

            };
        // Se o imaginario for o maior
        } else {
            var bigger = $scope.imaginario[i].value
            if (list === $scope.imaginario) {
                
                // console.log('lista: imaginario, maior n: ideal')
                
                var h = 'height : 8vh';
                return h

            } else if (list === $scope.ideal){
                
                // console.log('lista: ideal, maior n: ideal')
                
                var height = $scope.ideal[i].value * 8 / $scope.imaginario[i].value;
                var h = 'height :' +  String(height) + 'vh';
                return h

            } else {
                
                // console.log('lista: gabarito, maior n: ideal')
                
                var height = $scope.gabarito[i].value * 8 / $scope.imaginario[i].value;
                var h = 'height :' +  String(height) + 'vh';
                return h

            };
        }
        
    }

    $scope.expandMenu = function() {
        $('header ul').toggleClass('hidden-xs');
        $('header .glyphicon').toggleClass('glyphicon-menu-hamburger');
        $('header .glyphicon').toggleClass('glyphicon-remove');
    }


		

}]);

