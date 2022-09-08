var formulario = document.querySelector('form#form_contato');

formulario.addEventListener('submit',enviar); 

function enviar (evento){
    evento.preventDefault();

    var dados = new FormData(formulario);
    var nome = dados.get('nome');
    var email = dados.get('email');
    var turma = dados.get('turma');
    var motivo = dados.get('motivo');
    var mensagem = dados.get('mensagem');
    
    console.log(nome,email,turma,motivo,mensagem);

    var templateParams = {
        "nome": nome,
        "email": email,
        "turma": turma,
        "motivo": motivo,
        "mensagem": mensagem
    };

    emailjs.send('service_vn40v07', 'template_11cv658', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    alert('Funcionou!')
};

var resultado = document.createElement('p')
resultado.style.padding = '10px'
resultado.style.textAlign = 'center'
formulario.append(resultado)