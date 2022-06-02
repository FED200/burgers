$(document).ready(function () {
    function initBgCover(context) {
      if (!context) context = $('body');
      context.find('.bg-cover').each(function () {
        var holder = $(this);
        var image = holder.find('> img').hide();
        var imageSrc = image.prop('src');
        holder.css({
          backgroundImage: 'url(' + imageSrc + ')',
        });
      });
    }
  
    initBgCover();
  
    /* smooth scroll*/
    $('a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

});