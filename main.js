$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Este campo é obrigatório'
        },

        submitHandler: function (form) {
            alert('formulário enviado com sucesso!')
            form.submit();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });

    $('#form').submit(function (e) {
        e.preventDefault();
    });
});