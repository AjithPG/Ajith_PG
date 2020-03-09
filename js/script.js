$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win,$navbar,width);

    //resize
    $win.resize(function(){
        toggle_onclick($win,$navbar,width);
    });

    $toggle.click(function(e){
           $navbar.toggleClass("toggle-left");
    });


});

function toggle_onclick($win,$navbar,width){

    if($win.width()<=768){
        $navbar.css({left:`-${width}px`});

    }else{
        $navbar.css({left:'0px'});
    }
}

var typed = new Typed('#typed',{
    strings:[
        'Web Developer',
        'Designer',
        'Freelancer'
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true
});
var typed_2 = new Typed('#typed_2',{
    strings:[
        'Web Developer',
        'Designer',
        'Freelancer'
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true
});