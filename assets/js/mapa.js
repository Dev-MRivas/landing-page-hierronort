document.addEventListener('DOMContentLoaded', function () {
    $('.sucursal').on('click', function() {
        var mapaId = $(this).data('map');
        $('.mapa.show').removeClass('show');
        $('#' + mapaId).addClass('show');
    });
})


$('.mapa-no-seleccionado').on('click', function() {
    const mapaSeleccionado = $('.mapa-seleccionado');
    mapaSeleccionado.removeClass('mapa-seleccionado')
    mapaSeleccionado.addClass('mapa-no-seleccionado')
    $(this).removeClass('mapa-no-seleccionado');
    $(this).addClass('mapa-seleccionado');
});