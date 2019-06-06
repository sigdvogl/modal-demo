// prevent mixed $ selections with other scripts
(function() {

    // Init foundation library for functionality
    $(document).foundation();

    $('.js-carousel').each(function() {
        $(this).slick(
            {
                'dots': true,
                'arrows': true
            }
        )
    })

})(jQuery);
