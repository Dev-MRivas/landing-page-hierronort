document.addEventListener('DOMContentLoaded', function () {
    $('.sucursal').on('click', function() {
        var mapaId = $(this).data('map');
        $('.mapa.show').removeClass('show');
        $('#' + mapaId).addClass('show');
    });
})