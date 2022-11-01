$(function () {
    

    var $links = $('.menu a')
    // console.log($links)

    $links.click(function (e) { 
        e.preventDefault()
        $links.removeClass('active')
        var attr = $(this).addClass('active').attr('href')
        // console.log($attr)

        var $target = $(attr).offset().top - 60
        console.log($target)


        $('html, body').animate({
        scrollTop: $target  
        }, 500)
     })


    $(window).scroll(function(){
        var scroll = $(this).scrollTop()
        // console.log(scroll)

        $links.each(function(){
            var target = $(this).attr('href');
            var selector = $(target).offset().top - 60;
            if(scroll >= selector){
                $links.removeClass('active')
                $(this).addClass('active')
            }
        })
    })

     
});