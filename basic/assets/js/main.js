(function() {
    "use strict";

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // Jika scroll lebih dari 50px
            $("#navbar").addClass("fixed-top shadow");
        } else {
            $("#navbar").removeClass("fixed-top shadow");
        }

        // Tombol Scroll ke Atas muncul
        if ($(this).scrollTop() > 200) {
            $("#scrollTopBtn").fadeIn();
        } else {
            $("#scrollTopBtn").fadeOut();
        }
    });

    // Aksi klik untuk scroll ke atas
    $("#scrollTopBtn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove(); // Hapus elemen preloader setelah halaman selesai dimuat
        });
    }

    /**
   * Animation on scroll function and init
   */
    function aosInit() {
        AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
        });
    }
    window.addEventListener('load', aosInit);
})();
