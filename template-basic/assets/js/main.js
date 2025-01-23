(function() {
    "use strict";

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
