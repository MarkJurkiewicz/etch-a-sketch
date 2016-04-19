function createGrid(num){
    for (var i = 0; i < num; i++)
        $('#main').append('<div class="box col-xs-1 col-md-1" id="box'+ i + '"></div>');
}

$('document').ready(function(){
    console.log('ready');
    $('#go').click(function(){
        var x = $('#size').val();
        $('#main').find('.box').remove();
        createGrid(x);
    });
    $('#clear').click(function(){
        $('#main').html('');
    });
});
