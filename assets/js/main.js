$(document).ready(function () {

  /* ===== Stickyfill ===== */
  /* Ref: https://github.com/wilddeer/stickyfill */
  // Add browser support to position: sticky
  var elements = $('.sticky');
  Stickyfill.add(elements);


  /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
  $(window).on('load resize', function () {
    $(window).trigger('scroll');
  });

  /* Activate scrollspy menu */
  $('body').scrollspy({ target: '#doc-menu', offset: 100 });

  /* Smooth scrolling */
  $('a.scrollto').on('click', function (e) {
    //store hash
    var target = this.hash;
    e.preventDefault();
    $('body').scrollTo(target, 800, { offset: 0, 'axis': 'y' });

  });
});