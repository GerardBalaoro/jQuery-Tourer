"use strict";

/*!
 * jQuery-Tourer v1.0.0
 * Copyright 2020 Gerard Balaoro
 * Licensed under MIT license
 */
;

(function ($) {
  $.fn.tour = function () {
    var wrapper = this,
        steps = wrapper.children('li'),
        overlay = $('.tour-overlay'),
        content = wrapper.find('.tour-content'),
        trigger = $('.tour-start'); // Add Tour Wrapper Class

    this.addClass('tour-wrapper'); // Create Navigation Elements For Each Step

    createNavigation(steps, steps.length); // Create 'Start-Tour' Event

    wrapper.on('start-tour', function () {
      if (!wrapper.hasClass('active')) {
        wrapper.addClass('active');
        showStep(steps.eq(0), overlay);
      }
    }); // Create 'Stop-Tour' Event

    wrapper.on('stop-tour', function () {
      steps.removeClass('is-selected move-left');
      wrapper.removeClass('active');
      overlay.removeClass('is-visible');
    }); // Bind Start Event to Trigger Button

    trigger.on('click', function () {
      wrapper.trigger('start-tour');
    }); // Bind Stop Event to Close Button

    content.on('click', '.tour-stop, .tour-close', function (event) {
      wrapper.trigger('stop-tour');
    }); // Add Navigation Button Handlers

    content.on('click', '.tour-prev', function (event) {
      // Previous, If Available
      !$(event.target).hasClass('inactive') && changeStep(steps, overlay, 'prev');
    });
    content.on('click', '.tour-next', function (event) {
      // Next, If Available
      !$(event.target).hasClass('inactive') && changeStep(steps, overlay, 'next');
    }); // Add Swipe Navigation For Mobile Devices

    content.on('swiperight', function (event) {
      // Previous, If Available
      if (!$(wrapper).find('.tour-prev').hasClass('inactive')) changeStep(steps, overlay, 'prev');
    });
    content.on('swipeleft', function (event) {
      // Next, If Available
      if (!$(wrapper).find('.tour-next').hasClass('inactive')) changeStep(steps, overlay, 'next');
    }); // Add Keyboard Navigation

    $(document).keyup(function (event) {
      if (event.which == '37' && !steps.filter('.is-selected').find('.tour-prev').hasClass('inactive')) {
        changeStep(steps, overlay, 'prev');
      } else if (event.which == '39' && !steps.filter('.is-selected').find('.tour-next').hasClass('inactive')) {
        changeStep(steps, overlay, 'next');
      } else if (event.which == '27') {
        wrapper.trigger('stop-tour');
      }
    }); // Realign Tour Layer On Window Resize

    $(window).on('resize', function () {
      if (wrapper.hasClass('active')) {
        alignStep($('li.tour-step.is-selected'));
      }
    });
    return this;
  };

  function createNavigation(steps, n) {
    steps.each(function (index) {
      var step = $(this),
          stepNumber = index + 1;
      var tourNavigationHtml = "\n\t\t\t\t<div class=\"tour-nav-container\">\n\t\t\t\t\t<span class=\"tour-step-count\">\n\t\t\t\t\t\t<b>".concat(stepNumber, "</b>/").concat(n, "\n\t\t\t\t\t</span>\n\t\t\t\t\t<ul class=\"tour-nav\">\n\t\t\t\t\t\t").concat(stepNumber > 1 ? '<li><a href="javascript:void(0)" class="tour-prev">&#171; Previous</a></li>' : '', "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"").concat(stepNumber < n ? 'tour-next' : 'tour-stop', "\">\n\t\t\t\t\t\t\t\t").concat(stepNumber < n ? 'Next &#187' : 'End Tour', "\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"tour-close\">Close</a>\t\t\t\t\t\n\t\t\t");
      $(tourNavigationHtml).appendTo(step.children('.tour-content'));
    });
  }

  function showStep(step, layer) {
    // Make Step Unbound if Target Element does not exist
    if ($(step.attr('target')).length == 0) step.addClass('unbound'); // Make Wrapper and Overlay Unbound if Step is Unbound

    if (step.hasClass('unbound')) {
      step.parent('.tour-wrapper.active').addClass('unbound');
      $('.tour-overlay').addClass('unbound');
    } else {
      step.parent('.tour-wrapper.active').removeClass('unbound');
      $('.tour-overlay').removeClass('unbound');
    } // Scroll to Step, Align to Target, Show Layer


    smoothScroll(step, function () {
      alignStep(step);
      showLayer(layer);
      step.addClass('is-selected').removeClass('move-left');
    });
  }

  function alignStep(step) {
    if (isBound(step)) {
      var target = $(step.attr('target'));
      var content = step.children('.tour-content');
      var left = 0.5;
      var top = 0.5;

      if (target.length > 0) {
        if (content.hasClass('right')) {
          top = (target.offset().top + target.height() / 2) / window.innerHeight;
          left = (target.offset().left + target.width()) / window.innerWidth;
        } else if (content.hasClass('left')) {
          top = (target.offset().top + target.height() / 2) / window.innerHeight;
          left = target.offset().left / window.innerWidth;
        } else if (content.hasClass('top')) {
          top = target.offset().top / window.innerHeight;
          left = (target.offset().left + target.width() / 2) / window.innerWidth;
        } else if (content.hasClass('bottom')) {
          top = (target.offset().top + target.height()) / window.innerHeight;
          left = (target.offset().left + target.width() / 2) / window.innerWidth;
        }
      }

      step.css('top', top * 100 + '%');
      step.css('left', left * 100 + '%');
    } else {
      step.removeAttr('style');
    }
  }

  function smoothScroll(element) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (isBound(element)) {
      // Wait for the Animation to Finish Before Executing Callback
      $('body,html').animate({
        scrollTop: element.offset().top - ($(window).height() - element.height()) / 2
      }, 100).promise().then(callback);
    } else {
      callback();
    }
  }

  function isBound(step) {
    // Check if the Element is Unbound of the Viewport is Mobile
    return window.innerWidth >= 1100 && !step.hasClass('unbound');
  }

  function showLayer(layer) {
    layer.addClass('is-visible').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
      layer.removeClass('is-visible');
    });
  }

  function changeStep(steps, layer, bool) {
    var visibleStep = steps.filter('.is-selected');
    var delay = 0;
    visibleStep.removeClass('is-selected');
    bool == 'next' && visibleStep.addClass('move-left');
    setTimeout(function () {
      bool == 'next' ? showStep(visibleStep.next(), layer) : showStep(visibleStep.prev(), layer);
    }, delay);
  }

  $('.tour-wrapper').tour();
})(jQuery);