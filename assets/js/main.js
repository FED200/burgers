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

  let countDownBox = document.querySelector(".time");
  let daysBox = document.querySelector(".days");
  let hrsBox = document.querySelector(".hrs");
  let minBox = document.querySelector(".min");
  let secBox = document.querySelector(".sec");
  let countDownDate = new Date("07/03/2022").getTime();

  // COUNT DOWN FUNCTION
  let x = setInterval(function () {

    // GET DATE
    let now = new Date().getTime();

    // TIME BETWEEN NOW AND DATE
    let distance = countDownDate - now;

    // CALCULATION TIME
    let days = Math.floor(distance / (1000 * 3600 * 24));
    let hours = Math.floor((distance % (1000 * 3600 * 24)) / (1000 * 3600));
    let minutes = Math.floor((distance % (1000 * 3600)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysBox.innerHTML = days;
    hrsBox.innerHTML = hours;
    minBox.innerHTML = minutes;
    secBox.innerHTML = seconds;

    // IF FINISH
    if (distance < 0) {
      clearInterval(x);
      countDownBox.innerHTML = "¡FELICIDADES!";
    }
  }, 1000);

});