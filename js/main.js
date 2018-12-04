$(document).ready(function() {
    //$('#main-content').load('/about.html');

    $('#main-nav a').click(function(e) {
      e.preventDefault();
      $("#main-content").load(e.target.href);
    })
});

function loadAbout() {
    var converter = new showdown.Converter(),
    text = '# hello, markdown!',
    html = converter.makeHtml(text);

    $('#main-content').html(html);
    $('#main-content').html("<p> Hello! </p>");
}

