$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
   
    e.preventDefault();

});
   



   // scroll

   $(window).scroll(function() {
    var wScroll = $(this).scrollTop();



    //portfolio
     
    if ( wScroll > $ ('.portfolio').offset().top -250 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * i);
        });
        
        
        
    }



   


});