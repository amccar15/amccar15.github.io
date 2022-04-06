//<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    $('#tabs').accordion({
        collapsible: true,
        active: "panelClosed",
        heightStyle: "content"
    });
});