

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
        }, 
        {
            value: 1.137733,
        }, 
        {
            value: 0.2220800151,
        }, 
        {
            value: 0.9566523727,
        }, 
        {
            value: 2.053385986,
        }, 
        {
            value: 0.276745865,
        }, 
        {
            value: 0.1059150841,
        }, 
        {
            value: 2.65812695,
        }, 
        {
            value: 19.56695764,
        }, 
        {
            value: 3.430282079,
        }, 
        {
            value: 2.538545403,
        }, 
        {
            value: 3.519114085,
        }, 
        {
            value: 0.07516554357,
        }, 
        {
            value: 0.04441600302,
        }, 
        {
            value: 0.08541539042,
        }, 
        {
            value: 0.4236603365,
        }, 
        {
            value: 0.02982705433,
        }, 
        {
            value: 0.2118301682,
        }, 
        {
            value: 0.2835790962,
        }, 
        {
            value: 1.028401301,
        }, 
        {
            value: 0.1366646247,
        }, 
        {
            value: 0.0649156967,
        }, 
        {
            value: 0.1810806277,
        },  
        {
            value: 0.05124923425,
        }, 
        {
            value: 0.06833231233,
        }, 
        {
            value: 0.6218240422,
        }, 
        {
            value: 0.05124923425,
        }, 
        {
            value: 58.08246548,
        }, 
        {
            value: 1.838139202,
    } ];

    $scope.ideal = [ 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        },  
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
        }, 
        {
            value: 1,
    } ];

    $scope.imaginario = [ 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        },  
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
        }, 
        {
            value: 2,
    } ];

    var categorias = [
        {
            description:["Ação Legislativa","Controle Externo"],
            name:"Legislativa",
            imageSrc:"icons/i_04.png"
        },
        {
            description:["Ação Judiciária","Defesa do Interesse Público no Processo Judiciário"],
            name:"Judiciária",
            imageSrc:"icons/i_21.png"
        },
        {
            description:["Defesa da Ordem Jurídica","Representação Judicial e Extrajudicial"],
            name:"Essencial à Justiça",
            imageSrc:"icons/i_24.png"
        },
        {
            description:["Planejamento e Orçamento","Administração Geral","Administração Financeira","Controle Interno","Normatização e Fiscalização","Tecnologia da Informação","Ordenamento Territorial","Formação de Recursos Humanos","Administração de Receitas","Administração de Concessões","Comunicação Social"],
            name:"Administração",
            imageSrc:"icons/i_27.png"
        },
        {
            description:["Defesa Aérea","Defesa Naval","Defesa Terrestre"],
            name:"Defesa Nacional",
            imageSrc:"icons/i_18.png"
        },
        {
            description:["Policiamento","Defesa Civil","Informação e Inteligência"],
            name:"Segurança Pública",
            imageSrc:"icons/i_19.png"
        },
        {
            description:["Relações Diplomáticas","Cooperação Internacional"],
            name:"Relações Exteriores",
            imageSrc:"icons/i_08.png"
        },
        {
            description:["Assistência ao Idoso","Assistência ao Portador de Deficiência","Assistência à Criança e ao Adolescente","Assistência Comunitária"],
            name:"Assistência Social",
            imageSrc:"icons/i_12.png"
        },
        {
            description:["Previdência Básica","Previdência do Regime Estatutário","Previdência Complementar","Previdência Especial"],
            name:"Previdência Social",
            imageSrc:"icons/i_03.png"
        },
        {
            description:["Atenção Básica","Assistência Hospitalar e Ambulatorial","Suporte Profilático e Terapêutico","Vigilância Sanitária","Vigilância Epidemiológica","Alimentação e Nutrição"],
            name:"Saúde",
            imageSrc:"icons/i_09.png"
        },
        {
            description:["Proteção e Benefícios ao Trabalhador","Relações de Trabalho","Empregabilidade","Fomento ao Trabalho"],
            name:"Trabalho",
            imageSrc:"icons/i_15.png"
        },
        {
            description:["Ensino Fundamental","Ensino Médio","Ensino Profissional ","Ensino Superior","Educação Infantil","Educação de Jovens e Adultos","Educação Especial","Educação Básica (3) (I)"],
            name:"Educação",
            imageSrc:"icons/i_06.png"
        },
        {
            description:["Patrimônio Histórico, Artístico e Arqueológico","Difusão Cultural"],
            name:"Cultura",
            imageSrc:"icons/i_05.png"
        },
        {
            description:["Custódia e Reintegração Social","Direitos Individuais, Coletivos e Difusos","Assistência aos Povos Indígenas"],
            name:"Direitos da Cidadania",
            imageSrc:"icons/i_17.png"
        },
        {
            description:["Infra-Estrutura Urbana","Serviços Urbanos","Transportes Coletivos Urbanos"],
            name:"Urbanismo",
            imageSrc:"icons/i_25.png"
        },
        {
            description:["Habitação Rural","Habitação Urbana"],
            name:"Habitação",
            imageSrc:"icons/i_23.png"
        },
        {
            description:["Saneamento Básico Rural","Saneamento Básico Urbano"],
            name:"Saneamento",
            imageSrc:"icons/i_02.png"
        },
        {
            description:["Preservação e Conservação Ambiental","Controle Ambiental","Recuperação de Áreas Degradadas","Recursos Hídricos","Meteorologia"],
            name:"Gestão Ambiental",
            imageSrc:"icons/i_16.png"
        },
        {
            description:["Desenvolvimento Científico","Desenvolvimento Tecnológico e Engenharia","Difusão do Conhecimento Científico e Tecnológico"],
            name:"Ciência e Tecnologia",
            imageSrc:"icons/i_13.png"
        },
        {
            description:["Promoção da Produção Vegetal (4) (E)","Promoção da Produção Animal(4) (E)","Defesa Sanitária Vegetal (4) (E)","Defesa Sanitária Animal (4)(E)","Abastecimento","Extensão Rural","Irrigação","Promoção da Produção Agropecuária (4) (I)","Defesa Agropecuária (4)(I)"],
            "name":"Agricultura",
            "imageSrc":"icons/i_10.png"
        },
        {
            description:["Reforma Agrária","Colonização"],
            name:"Organização Agrária",
            imageSrc:"icons/i_28.png"
        },
        {
            description:["Promoção Industrial","Produção Industrial","Mineração","Propriedade Industrial","Normalização e Qualidade"],
            name:"Indústria",
            imageSrc:"icons/i_22.png"
        },
        {
            description:["Promoção Comercial","Comercialização","Comércio Exterior","Serviços Financeiros","Turismo"],
            name:"Comércio e Serviços",
            imageSrc:"icons/i_22.png"
        },
        {
            description:["Comunicações Postais","Telecomunicações"],
            name:"Comunicações",
            imageSrc:"icons/i_14.png"
        },
        {
            description:["Conservação de Energia","Energia Elétrica","Combustíveis Minerais (2) (A)","Biocombustíveis (2) (A)"],
            name:"Energia",
            imageSrc:"icons/i_11.png"
        },
        {
            description:["Transporte Aéreo","Transporte Rodoviário","Transporte Ferroviário","Transporte Hidroviário","Transportes Especiais "],
            name:"Transporte",
            imageSrc:"icons/i_07.png"
        },
        {
            description:["Desporto de Rendimento","Desporto Comunitário","Lazer"],
            name:"Desporto e Lazer",
            imageSrc:"icons/i_21.png"
        },
        {
            description:["Refinanciamento da Dívida Interna","Refinanciamento da Dívida Externa","Serviço da Dívida Interna","Serviço da Dívida Externa","Outras Transferências (I) (A)","Outros Encargos Especiais","Transferências para a Educação Básica (1) (I)"],
            name:"Encargos Especiais",
            imageSrc:"icons/i_26.png"
        },
        {
            description:["Refinanciamento da Dívida Interna","Refinanciamento da Dívida Externa","Serviço da Dívida Interna","Serviço da Dívida Externa","Outras Transferências (I) (A)","Outros Encargos Especiais","Transferências para a Educação Básica (1) (I)"],
            name:"Reserva de Contingência",
            imageSrc:"icons/i_29.png"
    }];

    for (i in $scope.gabarito) {
        var item = categorias[i]
        $scope.gabarito[i].description =  item.description;
        $scope.ideal[i].description =  item.description;
        $scope.imaginario[i].description =  item.description;

        $scope.gabarito[i].name =  item.name;
        $scope.ideal[i].name =  item.name;
        $scope.imaginario[i].name =  item.name;

        $scope.gabarito[i].imageSrc =  item.imageSrc;
        $scope.ideal[i].imageSrc =  item.imageSrc;
        $scope.imaginario[i].imageSrc =  item.imageSrc;


    }

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


    $scope.showDesc = function (i){
        console.log('topzera')
        i += 1
        i = String(i)
        var e = '#boxRow div.col-md-3:nth-child('
        var element = e + i + ') .descriptionBox'
        var element2 = e + i + ') .infoSign'
        $(element).toggleClass('show');
        $(element2).toggleClass('glyphicon-question-sign').toggleClass('glyphicon-minus');
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
        $scope.items[i].style = 'background-color: #fff; border: 1px solid #ccc;';
        $('.bar').eq(i).addClass('barhover');
        $('.bar .tooltips').eq(i).css('opacity', 1);

    }
    $scope.barMouseLeave = function(i) {
        $scope.items[i].style = 'background-color: #f6f6f6; border:  1px solid #e7e7e7;'; 
        $('.bar').eq(i).removeClass('barhover');
        $('.bar .tooltips').eq(i).css('opacity', 0);

    }

    $scope.boxMouseEnter = function(i) {
        $scope.items[i].style = 'background-color: #fff; border: 1px solid #ccc;';

    }
    $scope.boxMouseLeave = function(i) {
        $scope.items[i].style = 'background-color: #f6f6f6; border:  1px solid #e7e7e7;'; 

    }

    $scope.barMouseEnterComp = function(i) {
        $scope.items[i].style = 'background-color: #fff; border: 1px solid #ccc;'; 
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

