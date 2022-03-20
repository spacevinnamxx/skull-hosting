function copyToClipboard(a) {
    var t = $("<input>");
    $("body").append(t), t.val($(a).text()).select(), document.execCommand("copy"), t.remove();
}
function btnToggle() {
    document.getElementById("Dropdown").classList.toggle("show");
}
$(document).ready(function () {
    var a = $("#nav");
    function t() {
        $(window).scrollTop() > 60 ? a.hasClass("navbar-fixed-top") || a.addClass("navbar-fixed-top") : a.removeClass("navbar-fixed-top");
    }
    t(),
        $(window).scroll(function () {
            t();
        });
}),
    $(document).ready(function () {
        $(".customer-logos").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 1500,
            arrows: !1,
            dots: !1,
            controls: !0,
            pauseOnHover: !0,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 4 } },
                { breakpoint: 520, settings: { slidesToShow: 3 } },
            ],
        }),
            jQuery(".image").Length;
    }),
    $(document).ready(function () {
        var a = !0,
            t = "#owl-main";
        function e() {
            $(t + " .active .caption .fadeIn-1")
                .stop()
                .delay(500)
                .animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeIn-2")
                    .stop()
                    .delay(700)
                    .animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeIn-3")
                    .stop()
                    .delay(1e3)
                    .animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        }
        function n() {
            $(t + " .active .caption .fadeInDown-1")
                .stop()
                .delay(500)
                .animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeInDown-2")
                    .stop()
                    .delay(700)
                    .animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeInDown-3")
                    .stop()
                    .delay(1e3)
                    .animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }
        function i() {
            $(t + " .active .caption .fadeInUp-1")
                .stop()
                .delay(500)
                .animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeInUp-2")
                    .stop()
                    .delay(700)
                    .animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeInUp-3")
                    .stop()
                    .delay(1e3)
                    .animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }
        function o() {
            $(t + " .active .caption .fadeInLeft-1")
                .stop()
                .delay(500)
                .animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeInLeft-2")
                    .stop()
                    .delay(700)
                    .animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeInLeft-3")
                    .stop()
                    .delay(1e3)
                    .animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }
        function c() {
            $(t + " .active .caption .fadeInRight-1")
                .stop()
                .delay(500)
                .animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeInRight-2")
                    .stop()
                    .delay(700)
                    .animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }),
                $(t + " .active .caption .fadeInRight-3")
                    .stop()
                    .delay(1e3)
                    .animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }
        $(t).owlCarousel({
            autoPlay: 5e3,
            stopOnHover: !0,
            navigation: !0,
            pagination: !1,
            singleItem: !0,
            addClassActive: !0,
            transitionStyle: "fade",
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            afterInit: function () {
                e(), n(), i(), o(), c();
            },
            afterMove: function () {
                e(), n(), i(), o(), c();
            },
            afterUpdate: function () {
                e(), n(), i(), o(), c();
            },
            startDragging: function () {
                a = !0;
            },
            afterAction: function () {
                a
                    ? $(t + " .caption .fadeIn-1, " + t + " .caption .fadeIn-2, " + t + " .caption .fadeIn-3").css({ opacity: 0 })
                    : $(t + " .caption .fadeIn-1, " + t + " .caption .fadeIn-2, " + t + " .caption .fadeIn-3")
                          .stop()
                          .delay(800)
                          .animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" }),
                    a
                        ? $(t + " .caption .fadeInDown-1, " + t + " .caption .fadeInDown-2, " + t + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" })
                        : $(t + " .caption .fadeInDown-1, " + t + " .caption .fadeInDown-2, " + t + " .caption .fadeInDown-3")
                              .stop()
                              .delay(800)
                              .animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" }),
                    a
                        ? $(t + " .caption .fadeInUp-1, " + t + " .caption .fadeInUp-2, " + t + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" })
                        : $(t + " .caption .fadeInUp-1, " + t + " .caption .fadeInUp-2, " + t + " .caption .fadeInUp-3")
                              .stop()
                              .delay(800)
                              .animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" }),
                    a
                        ? $(t + " .caption .fadeInLeft-1, " + t + " .caption .fadeInLeft-2, " + t + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" })
                        : $(t + " .caption .fadeInLeft-1, " + t + " .caption .fadeInLeft-2, " + t + " .caption .fadeInLeft-3")
                              .stop()
                              .delay(800)
                              .animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" }),
                    a
                        ? $(t + " .caption .fadeInRight-1, " + t + " .caption .fadeInRight-2, " + t + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" })
                        : $(t + " .caption .fadeInRight-1, " + t + " .caption .fadeInRight-2, " + t + " .caption .fadeInRight-3")
                              .stop()
                              .delay(800)
                              .animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" }),
                    (a = !1);
            },
        }),
            $(t).hasClass("owl-one-item") &&
                $(t + ".owl-one-item")
                    .data("owlCarousel")
                    .destroy(),
            $(t + ".owl-one-item").owlCarousel({ singleItem: !0, navigation: !1, pagination: !1 }),
            $("#transitionType li a").click(function () {
                $("#transitionType li a").removeClass("active"), $(this).addClass("active");
                var a = $(this).attr("data-transition-type");
                return $(t).data("owlCarousel").transitionTypes(a), $(t).trigger("owl.next"), !1;
            }),
            $(".slider-next").click(function () {
                owl.trigger("owl.next");
            }),
            $(".slider-prev").click(function () {
                owl.trigger("owl.prev");
            });
    }),
    $("img").bind("contextmenu", function (a) {
        return !1;
    }),
    $("img").mousedown(function (a) {
        return !1;
    }),
    $(window).scroll(function () {
        $(this).scrollTop() > 150 ? $(".button__scroll--up").addClass("is_showing") : $(".button__scroll--up").removeClass("is_showing");
    }),
    $(".button__scroll--up").click(function () {
        $("html , body").animate({ scrollTop: 0 }, 1e3);
    }),
    $(document).ready(function () {
        $("[data-toggle='offcanvas']").on("click touchstart", function (a) {
            var t = $(this).data("target");
            return $("body").toggleClass("overlay"), $(t).toggleClass("offcanvas-open"), !1;
        }),
            $(document).on("click touchstart", function (a) {
                if ($(a.target).hasClass("navbar")) return $("body").toggleClass("overlay"), $($(a.target).find(".navbar-offcanvas")).toggleClass("offcanvas-open"), !1;
            });
    }),
    (window.onclick = function (a) {
        if (!a.target.matches(".dropbutton")) {
            var t,
                e = document.getElementsByClassName("dropdownmenu-content");
            for (t = 0; t < e.length; t++) {
                var n = e[t];
                n.classList.contains("show") && n.classList.remove("show");
            }
        }
    });


// Video Player
document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr('#player');
  
  // Expose
  window.player = player;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play', 'click', () => { 
    player.play();
  });

  // Pause
  on('.js-pause', 'click', () => { 
    player.pause();
  });

  // Stop
  on('.js-stop', 'click', () => { 
    player.stop();
  });

  // Rewind
  on('.js-rewind', 'click', () => { 
    player.rewind();
  });

  // Forward
  on('.js-forward', 'click', () => { 
    player.forward();
  });
});

(function(){$('.loader').delay(1000).fadeOut('slow');}());

$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});

