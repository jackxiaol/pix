window.onload = function () {
    initSwiper();
    erSwiper();
}



function initSwiper() {
    const mySwiper = new Swiper('.swiper', {
        autoplay: {
            delay: 1500,
        },
        loop: true,
        mousewheel: true,
        effect: 'cube',
        // 解决自动轮播的时候手动后无法再次自动轮播
        autoplayDisableOnInteraction: false,
    })
    mySwiper.el.onmouseover = function () {
        mySwiper.autoplay.stop();
    }
    mySwiper.el.onmouseout = function () {
        mySwiper.autoplay.start();
    }
}

function erSwiper() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2000,
        },
        loop: true,
        mousewheel: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplayDisableOnInteraction: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

$(function () {
    $('#er1').on('mouseover', function () {
        $('.swiper-button-next').show();
        $('.swiper-button-prev').show();
    })
    $('#er1').on('mouseout', function () {
        $('.swiper-button-next').hide();
        $('.swiper-button-prev').hide();
    })

    $('.kg').on('click', function () {
        if ($('.ob').css('left') == '0px') {
            $('.ob').css('left', '-236px')
        } else {
            $('.ob').css('left', '0px')
        }
    })

    $('.oa').on('click',function(){
        var timId = setInterval(function () {
            if (document.documentElement.scrollTop > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = document.documentElement.scrollTop - 30;
            } else {
                clearInterval(timId);
            };
        }, 10)
    }).on('mouseenter',function(){
        $('.oa').css({'background-color':'#ff99cc','color':'#fff'});
    }).on('mouseout',function(){
        $('.oa').css({'background-color':'','color':''});
    })
    dhl();
    function dhl(){
        window.onscroll=function(){
            let dhh=$('#toubu')[0];
            if(window.pageYOffset>dhh.offsetHeight/2){
                $('.oa').show();
                $('#dhl').addClass('haard');
                $('#dhl').css('background',$('#toubu').css('background-image'));
            }else{
                $('.oa').hide();
                $('#dhl').removeClass('haard');
                $('#dhl').css('background','');
            }
        }
    }

    $('#er1').on('mouseleave',function(){
        $('.ty').hide();
    })
    $('.index').on('mouseenter',function(){
        $(this).children('div').show().parent().siblings().children('div').hide();
    })
    
    $('#ui1').children().on('click',function(){
        $('#toubu').css('background-image',$(this).css('background-image'));
        if($('#dhl').css('margin-top')=='0px'){
            $('#dhl').css('background',$(this).css('background-image'));
        }
    })
    $('#ui2').children().on('click',function(){
        $('#toubu').css('background-image',$(this).css('background-image'));
        if($('#dhl').css('margin-top')=='0px'){
            $('#dhl').css('background',$(this).css('background-image'));
        }
    })
    
    $('#body1-1').children().on('mouseenter',function(){
        $(this).children('div').children('.bssc').addClass('yq');
        $(this).children('div').children('h6').css('color','#ff99cc');
        $(this).css('box-shadow','#ff99cc 0px 0px 10px');
    }).on('mouseleave',function(){
        $(this).children('div').children('.bssc').removeClass('yq');
        $(this).children('div').children('h6').css('color','');
        $(this).css('box-shadow','');
    })

    
})
