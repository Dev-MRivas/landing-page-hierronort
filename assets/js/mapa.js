document.addEventListener('DOMContentLoaded', function () {
    $('.sucursal').on('click', function () {
        // Cargar el mapa correspondiente
        var mapaId = $(this).data('map');
        $('.mapa.show').removeClass('show');
        $('#' + mapaId).addClass('show');

        // Coloreo de las tarjetas
        const mapaSeleccionado = $('.mapa-seleccionado');
        mapaSeleccionado.removeClass('mapa-seleccionado')
        mapaSeleccionado.addClass('mapa-no-seleccionado')
        $(this).removeClass('mapa-no-seleccionado');
        $(this).addClass('mapa-seleccionado');
    });
})
