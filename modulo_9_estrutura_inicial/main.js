$(document).ready(function () {
    $('header button').click(function () { // Quando o botão dentro do <header> for clicado, exibe o formulário com um efeito de slide
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function () { // Quando o botão de cancelar for clicado, esconde o formulário com um efeito de slide
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {     // Evento acionado quando o formulário for enviado
        e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

        
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();       // Obtém o endereço da imagem inserida no input
         // Cria um novo item <li>, inicialmente escondido
        const novoItem = $('<li style ="display: none"></li>');

        // Adiciona a imagem ao novo item <li>
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
         // Adiciona a sobreposição com o link para a imagem em tamanho real
        $(`<div class="overlay-imagem-link"> 
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem tamanho real">
            Ver imagem tamanho real
            </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);  // Aplica um efeito de fade-in ao novo item, tornando-o visível gradualmente
        $('#endereco-imagem-nova').val('')  //Limpa o campo após o envio
    });
});
