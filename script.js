var x = 253;
var blue = "deepskyblue";

function createPad(num){

    for (var i = 0; i < num; i++)
        $('#main').append('<div class="box col-xs-1 col-md-1" id="box'+ i + '"></div>');
}
function calculateSquareWidth(x) {
    return $('#main').width() / x - 2;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function bluePen(thisSquare) {thisSquare.css({"background-color": blue, "opacity": 1});}
function randomColorPen(thisSquare) {thisSquare.css({"background-color": getRandomColor(), "opacity": 1});}
function opacityPen(thisSquare) {
    var opacity = thisSquare.css("opacity");
    if(opacity > 0)
        thisSquare.css("opacity", opacity - 0.1);
}

//drawing function
function draw(penBtn) {
    $('.container').off();  // detach previously attached listener
    // draw on mousedown
    $('.box').on('mousedown', function() {
        $('.box').on('mouseenter', function() {
            var btnName = penBtn.attr('id');
            switch(btnName) {
                case 'blueBtn':  bluePen($(this)); break;
                case 'colorBtn':   randomColorPen($(this)); break;
                case 'opacityBtn': opacityPen($(this)); break;
            }
        });
        // stop drawing when mouseup
    }).on('mouseup', function() {
        $('.box').off('mouseenter');
    });
}

$('document').ready(function(){
    console.log('ready');
    createPad(x);

    $('#clear').click(function(){
        $('#main').html('');
    });
    $('.penBtn').on('click', function() {
        $('.clicked').removeClass('clicked');
        $(this).addClass('clicked');
        draw($(this));
    });
    $('#go').click(function(){
        createPad(x);
    });

});