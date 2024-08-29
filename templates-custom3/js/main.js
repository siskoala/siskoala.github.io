(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow');
        } else {
            $('.navbar').removeClass('sticky-top shadow');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });
    


    /**
    * Initiate glightbox
    */
    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    /**
    * Project isotope and filter
    */
    let projectnIsotope = document.querySelector('.project-isotope');
    if (projectnIsotope) {

        let projectFilter = projectnIsotope.getAttribute('data-project-filter') ? projectnIsotope.getAttribute('data-project-filter') : '*';
        let projectLayout = projectnIsotope.getAttribute('data-project-layout') ? projectnIsotope.getAttribute('data-project-layout') : 'masonry';
        let projectSort = projectnIsotope.getAttribute('data-project-sort') ? projectnIsotope.getAttribute('data-project-sort') : 'original-order';

        window.addEventListener('load', () => {
            let projectIsotope = new Isotope(document.querySelector('.project-container'), {
                itemSelector: '.project-item',
                layoutMode: projectLayout,
                filter: projectFilter,
                sortBy: projectSort
            });

            let menuFilters = document.querySelectorAll('.project-isotope .project-flters li');
            menuFilters.forEach(function(el) {
                    el.addEventListener('click', function() {
                    document.querySelector('.project-isotope .project-flters .filter-active').classList.remove('filter-active');
                    this.classList.add('filter-active');
                    projectIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                });
            })
        })
    }


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

