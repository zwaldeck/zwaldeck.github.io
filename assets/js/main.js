$(document).ready(() => {
    /*======= Skillset *=======*/

    const levelBar = $('.level-bar-inner');

    levelBar.css('width', '0');
    levelBar.each((index, value) => {
        const itemWidth = $(value).attr('data-level');

        $(value).show();
        $(value).animate({
            width: itemWidth
        }, 800);

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    // licence
    $('#show-licence').click((e) => {
        e.preventDefault();
        $('#licence').show();
        $('#show-licence').parent().hide();
    });
});