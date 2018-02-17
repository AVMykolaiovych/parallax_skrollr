$(function() {

    function enableSkrollr() {
        console.log('we are on desktop');

        if (!Modernizr.touch) {
            var s = skrollr.init({
                forceHeight: false
            });
        }
    }

    function desableSkrollr() {
        console.log('we are on mobile');

        var s = skrollr.init();
        s.destroy();
    }

    enquire.register("screen and (min-width: 768px)", {
        match : function() {
            enableSkrollr();
        },
        unmatch : function() {
            desableSkrollr();
        }
    });

});
