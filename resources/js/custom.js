(function ($) {
    "use strict";

    $(window).on('load', function() {
        $(".preloader").fadeOut();     
    });
    var msheireb = {

        /* ============================================================ */
        /* Sidebar/Mobile Menu
        /* ============================================================ */
        sidebarMenu: function(){
            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);
            }
            cloneMobileMenu("header .navbar-menu ul", ".sidebar-menu .main-menu");

            // Humbergur Menu Click and sidebar expanded
            $('header .sidebar-toggle').on("click", function() {
                event.preventDefault();
                $('.sidebar-menu').toggleClass('expand-menu');
                $('body').toggleClass('expand-menu');
            });

            // Mobile Menu
            function mobileNav($selector, $parentSelector) {
                var $mobileNav = $($selector);
                $mobileNav.on("click", function() {
                    $($selector).toggleClass('expand-menu');
                });

                var $closeButton = $($parentSelector).find(".close-menu");
                $closeButton.each(function(){
                    var $self = $(this);
                    $self.on("click", function() {
                        $self.parent($parentSelector).toggleClass('expand-menu');
                        $('body').removeClass("expand-menu");
                    });
                });

                $(document).on('click', function(e) {
                    var $selectorType = $($parentSelector).add($mobileNav);
                    if ($selectorType.is(e.target) !== true && $selectorType.has(e.target).length === 0) {
                        $($parentSelector).removeClass("expand-menu");
                        $($selector).removeClass("expand-menu");
                        $('body').removeClass("expand-menu");
                    }          
                });
            }
            mobileNav('.sidebar-toggle', '.sidebar-menu');
	

            // $('.nav-main .main-menu ul.menu-bar li a, .sidebar-menu .close-menu').on('click', function(){
            //     $('.sidebar-menu').removeClass('expand-menu');
            // });
        },

        /* ============================================================ */
        /* Random
        /* ============================================================ */
        commonActivation: function(){    
            $('.hero-carousel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                asNavFor: '.hero-carousel-nav',
                // autoplay: true,
            });
            $('.hero-carousel-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.hero-carousel',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                autoplay: false,
            });

            var picked_item_Slider = $('.picked-item-slider');
            picked_item_Slider.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,   
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 2,
                        margin: 30,
                    },
                    // breakpoint from 1400 up
                    1400 : {
                        items: 3,
                        margin: 30,
                    },
                }
            });

            $('.picked-item-slider .thumb-carousel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                dots: true
            });

            var testimonial = $('.testimonial-slider');
            testimonial.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: 1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 2,
                        margin: 30,
                    },
                    // breakpoint from 1200 up
                    1400 : {
                        items: 3,
                        margin: 50,
                    },
                }
            });

            var blog_caroursel = $('.blog-carousel');
            blog_caroursel.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 2,
                    },
                    // breakpoint from 1200 up
                    1200 : {
                        items: 3,
                    },
                }
            });
            
            var partner_carousel = $('.partner-carousel');
            partner_carousel.owlCarousel({
                items: 2,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                responsive : {
                    // breakpoint from 768 up
                    768 : {
                        items: 3,
                    },
                    // breakpoint from  up
                    1200 : {
                        items: 5,
                    },
                }
            });

            var award_carousel = $('.award-slider');
            award_carousel.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                responsive : {
                    // breakpoint from 992 up
                    992 : {
                        items: 2,
                        margin: 30
                    },
                    // breakpoint from 1200 up
                    1200 : {
                        items: 3,
                        margin: 30
                    },
                }
            });
            var news_slider = $('.news-slider');
            news_slider.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                margin: 30,
                responsive : {
                    // breakpoint from 772 up
                    772 : {
                        items: 2,
                        margin: 30
                    },
                    // breakpoint from 1200 up
                    1200 : {
                        items: 3,
                    },
                    1400: {
                        items: 4,
                    }
                }
            });
            var neighbour_slider = $('.neighbourhood-slider');
            neighbour_slider.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                responsive : {
                    // breakpoint from 992 up
                    992 : {
                        items: 2,
                        margin: 30
                    },
                    // breakpoint from 1200 up
                    1200 : {
                        items: 3,
                        margin: 30
                    },
                    // breakpoint from 1400 up
                    1400: {
                        items: 4,
                        margin: 30
                    }
                }
            });
            var trending_place_slider = $('.trending-place-slider');
            trending_place_slider.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,

                responsive : {
                    // breakpoint from 992 up
                    992 : {
                        items: 2,
                        margin: 30
                    },
                    // breakpoint from 1200 up
                    1200 : {
                        items: 3,
                        margin: 30
                    },
                    // breakpoint from 1400 up
                    1400: {
                        items: 4,
                        margin: 30
                    }
                }
            });
            var events_slider = $('.events-slider');
            events_slider.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,

                responsive : {
                    // breakpoint from 992 up
                    992 : {
                        items: 2,
                        margin: 30
                    },
                    // breakpoint from 1200 up
                    1200 : {
                        items: 3,
                        margin: 30
                    },
                    // breakpoint from 1400 up
                    1400: {
                        items: 4,
                        margin: 30
                    }
                }
            });
            var presentation_slider = $('.presentation-slider');
            presentation_slider.owlCarousel({
                items: 1,
                loop: 1,
                dots: 1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
            });
            var presentation_slider = $('.post-carousel');
            presentation_slider.owlCarousel({
                items: 3,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                responsive : {
                    // breakpoint from 992 up
                    576 : {
                        items: 4,
                    },
                    // breakpoint from 768 up
                   768 : {
                        items: 5,
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 6,
                    },
                }
            });



            $(".booking-date-from, .booking-date-to").flatpickr({
                defaultDate: new Date(),
            });
        },

        /* ============================================================ */
        /* Banner Slider
        /* ============================================================ */
        bannerSlider: function() {
            var bannerSlider = $('.banner-slider');
            bannerSlider.owlCarousel({
                items: 1,
                loop: 1,
                dots: 1,
                nav: !1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 10000,
            });
        },
        /* ============================================================ */
        /* Featured Product slider
        /* ============================================================ */
        productSlider: function() {

            // Product Single Sidebar Suggested Product Slider
            var ps_s_sug_prod = $('.product-description .suggested-products .product-slider');
            ps_s_sug_prod.owlCarousel({
                items: 1,
                loop: !1,
                dots: !1,
                nav: !1,
                margin: 20,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 10000,
            }); 

            
        },

        /* ============================================================ */
        /* Mobile Menu Intigration
        /* ============================================================ */
        mobile_menu: function() {

        },
        /* ============================================================ */
        /* Light Gallery
        /* ============================================================ */
        lightGallery: function() {
            // Product Review image popup
            $(".review-item .images").lightGallery({
                selector: '.zoom',
                share: false,
                download: false
            });
        },
        /* ============================================================ */
        /* Video Background
        /* ============================================================ */
        video_background: function() {
            $('.video-banner').vide({
                'mp4': 'resources/images/about-bg',
                // 'poster': 'resources/images/about-bg',
            }, {
                volume: 1,
                muted: false,
                loop: true,
                autoplay: true,
                position: '50% 50%', 
                posterType: 'none', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
                resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
                bgColor: 'transparent', // Allow custom background-color for Vide div,
                className: '' // Add custom CSS class to Vide div
            });
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var fixed_top = $(".site-header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    fixed_top.addClass("is-sticky");
                } else {
                    fixed_top.removeClass("is-sticky");
                }
            });


            var sticky_dsc_nav = $(".product-description .navigation");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 1000) {
                    sticky_dsc_nav.addClass("is-sticky");
                } else {
                    sticky_dsc_nav.removeClass("is-sticky");
                }
            });
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fas fa-level-up-alt'></span></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },


        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },


        initializ: function() {
			msheireb.sidebarMenu();
			msheireb.mobile_menu();
			msheireb.commonActivation();
			msheireb.bannerSlider();
			msheireb.productSlider();
			msheireb.sticky_menu();
			msheireb.lightGallery();
			msheireb.background_image();
		}

    };
    $(function() {
		msheireb.initializ();
	});


})(jQuery);