// prevent mixed $ selections with other scripts
(function() {

    // Init foundation core and plugins for whole functionality
    $(document).foundation();

    // select all slick elements
    $('.js-carousel').each(function() {

        // Init slick instance for each slick element
        $(this).slick(
            {
                // your settings
                'dots': true,
                'arrows': true,
                'adaptiveHeight': true
            }
        )
    })

})(jQuery);
