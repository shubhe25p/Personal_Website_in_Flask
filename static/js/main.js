requirejs.config({
    baseUrl: 'static',
    paths: {
        jquery: 'js/jquery.min',
        lib: 'js'
        //node_dir: '/node_dir'
    }
});
requirejs([
        'jquery',
        'js/home'],
    function ($, home) {
        /*********info animation***********/
        var h = new home();
        h.init();
        h.animate();
    });

/****************************/
