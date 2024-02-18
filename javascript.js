$(function() {
    $('#toggleDayOrNight').click(function(e) {
        // toggle classes
        $('#container').toggleClass('container-dark-mode ')
        $('.content').toggleClass('content-dark-mode')
        $('.btn').toggleClass('btn-dark-mode')
        // set background-image when clicked
        if($('#container')[0].className) {
        $('#toggleDayOrNight').css({'background-image':'url(https://img.icons8.com/dusk/64/000000/summer.png)',
        'background-color': '#FFF'})
        } else {
        $('#toggleDayOrNight').css({'background-image':'url(https://img.icons8.com/dusk/64/000000/new-moon.png)',
        'background-color': '#000'})
        }
    })
})