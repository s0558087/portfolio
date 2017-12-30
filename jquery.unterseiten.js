// Ancor scroll function
$(document).ready(function() {

    // Angabe welcher Link mit entsprechender CSS Klasse für die Anker scroll
    // Funktion genutzt werden soll
    $('a.scroll').click(function(event) {
        event.preventDefault();

        var full_url = this.href;

        var parts = full_url.split('#');
        var trgt = parts[1];

        var target_offset = $('#' + trgt).offset();
        var target_top = target_offset.top;

        $('html, body').animate({
            scrollTop: target_top
        }, 1000);

    });
});

// Menu
function myFunction(x) {
    x.classList.toggle("change");
}
