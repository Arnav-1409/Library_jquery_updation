$(document).ready(function () {
    var output = '';
    var D;
    console.log("hello");
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'books.json',
        success: function (data) {
            D = data.book;
            var user = data.category;
            console.log(user);
            for (var i = 0; i < user.length; i++) {
                output += "<li id=" + user[i] + ">" + user[i] + "</li>";
            }
            $('#List').html(output);
        },

    });
    $('#List').on('click', function (event) {
        var user = event.target.id;
        var out = "";
        for (var i = 0; i < D.length; i++) {
            if (user === "All" || D[i].category === user) {
                out += "<div class='row2'>";
                out += "<div class='column2'>" + D[i].name + "</div>";
                out += "<div class = 'column2'>" + D[i].description + "</div>";
                out += "<div class='column2'>" + D[i].category + "</div>";
                out += "</div>";
                console.log("in for loop");
            }
        }
        $('#content').html(out);
    }
    )
});



