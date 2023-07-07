$(document).ready(function(){
    $('#carrosel').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $("#telefone").mask("(00) 00000-0000", {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculo: {
                required: false
            }
        },
        messages:{
            nome: 'por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorreto = validador.numberOfInvalids()
            alert(`existem ${camposIncorreto} campos incorretos`)

        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo').val(nomeVeiculo)

        $('html').animate({
           scrollTop: destino.offset().top
        }, 1000)
    })
})