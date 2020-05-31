$('.card').click(function(e) {
    const img = $(this).find('img').prop('src')
    const name = $(this).find('h3').text()
    const chef = $(this).find('span').text();
    $('.modal-overlay').addClass('active')
    $('.modal-overlay').find('#image').prop('src', '/image'+img.split('image')[1])
    $('.modal-overlay').find('#name').text(name)
    $('.modal-overlay').find('#chef').text(chef)
})

$('#close').click(function() {
    $('.modal-overlay').removeClass('active')
})