$(document).ready(function () {
    var output = '';
    var DataBooks;
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'books.json',
        success: function (data) {
            DataBooks = data.book;
            var user = data.category;
            for (var i = 0; i < user.length; i++) {
                output += "<li id=" + user[i] + ">" + user[i] + "</li>";
            }
            $('#List').html(output);
        },
    });
    $('#List').on('click', function (event) {
        var user = event.target.id;
        var out = "";
        for (var i = 0; i < DataBooks.length; i++) {
            if (user === "All" || DataBooks[i].category === user) {
                out += "<div class='row2'>";
                out += "<div class='column2'>" +DataBooks[i].name + "</div>";
                out += "<div class = 'column2'>" +DataBooks[i].description + "</div>";
                out += "<div class='column2'>" +DataBooks[i].category + "</div>";
                out += "</div>";
            }
        }
        $('#content').html(out);
    }
    )
});



