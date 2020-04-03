$(document).ready(function(e){

    $mobilemenu = $('.mobile-menu');
    $toggle = $('.toggle-button');
    $remove =$('.close');
  
    $toggle.click(function(e){
           $toggle.css("display","none");
           $remove.css("display","block");
           $mobilemenu.addClass('active');
    });

    $remove.click(function(e){
        $remove.css("display","none");
        $toggle.css("display","block");
        $mobilemenu.removeClass('active');
    })
    

});


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