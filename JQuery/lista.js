$(document).ready(function()
{    
    $('form').on('submit', function(e)
    {
        e.preventDefault();

        const inputTarefa = $('#input-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(`<span>${inputTarefa}</span>`).appendTo(novaTarefa);
        novaTarefa.appendTo('#lista-tarefas');
        $('#input-tarefa').val('');
    })

    $('#lista-tarefas').on('click', function(e)
    {
        if(e.target.classList.contains('concluido'))
        {
            e.target.classList.remove('concluido');
        }else
        {
            e.target.classList.add('concluido');
        }
    })
})