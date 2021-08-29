var md = window.markdownit();

$.get('./data/content.md', function (data) {
    var result = md.render(data);
    $("#contenter-team").append(result)
});