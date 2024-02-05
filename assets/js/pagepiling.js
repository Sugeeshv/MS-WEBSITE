$(document).ready(function() {
    $('#pagepiling').pagepiling({
        // PagePiling options go here
    });
});

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: null, // You can add a menu if needed
        anchors: ['section1', 'section2', 'section3'], // Anchor links for each section
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'], // Background colors for each section
        // Add more options as needed
    });
});