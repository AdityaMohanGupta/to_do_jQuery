$('input').keypress(function(e){
    if(e.keyCode === 13){
        const todotext=$(this).val();
        if(todotext!=''){
            $('#list').append(`<li>${todotext}</li>`)
        }
        $(this).val('');
    }
})


$('#plus').click(function(){
    const todotext=$('input').val();
    if(todotext!=''){
        $('#list').append(`<li>${todotext}</li>`)
    }
    $('input').val('');
})

$('#list').on('click', 'li', function () {
    $(this).toggleClass('lol');
});

$('#bt1').click(function(){
    $('li').remove();
})

$('#bt2').click(function(){
    $('.lol').remove();
})