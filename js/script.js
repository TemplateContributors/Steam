    // Carsoul--------------------------------------


$(".carousel1").mouseover(function(){
    $("#infCardCrousel1").css('display','initial');
    $("#infCardCrousel1").css('animation','1s forwards topbardropdown');
});
$(".carousel1").mouseleave(function(){
    $("#infCardCrousel1").css('display','none');
});
$(".carousel2").mouseover(function(){
    $("#infCardCrousel2").css('animation','1s forwards topbardropdown');
    $("#infCardCrousel2").css('display','initial');
});
$(".carousel2").mouseleave(function(){
    $("#infCardCrousel2").css('display','none');
});
$(".carousel3").mouseover(function(){
    $("#infCardCrousel3").css('animation','1s forwards topbardropdown');
    $("#infCardCrousel3").css('display','initial');
});
$(".carousel3").mouseleave(function(){
    $("#infCardCrousel3").css('display','none');
});

let elements=['.carousel1 img:nth-child(2)','.carousel1 img:nth-child(3)','.carousel1 img:nth-child(4)','.carousel1 img:nth-child(5)'];
let srcs=['dist/images/carousel/nioh2.jpg',"dist/images/carousel/nioh3.jpg","dist/images/carousel/nioh4.jpg","dist/images/carousel/nioh5.jpg"];
for(var i=0;i<4;i++){
$(elements[i]).mouseover(function(){
    $('.carousel1 img:nth-child(1)').attr('src',srcs[i]);
    console.log('aa')
})
$(elements[i]).mouseleave(function(){
    $('.carousel1 img:nth-child(1)').attr('src',"dist/images/carousel/nioh1.jpg");
})
}



    // Header Navbar Rasponsive--------------------------------------


$('.headerNavbarRespansive div:nth-child(2)').click(function(){
    $('.headerNavbarRespansive div:nth-child(2) div ul:first-of-type').toggleClass('headerNavbarRespansiveMenu');
    $('.headerNavbarRespansive div:nth-child(2)').toggleClass('headerNavbarRespansiveMenu');
});
$('.headerNavbarRespansive div:nth-child(3)').click(function(){
    $('.headerNavbarRespansive div:nth-child(3) div ul:first-of-type').toggleClass('headerNavbarRespansiveMenu');
    $('.headerNavbarRespansive div:nth-child(3)').toggleClass('headerNavbarRespansiveMenu');
});
// $('.headerNavbar i').click(function(){
//     $('.headerNavbarRespansive').css('display','initial !important');
// });
// $('body').click(function(){
//     $('.headerNavbarRespansive').css('display','none !important');
// });
