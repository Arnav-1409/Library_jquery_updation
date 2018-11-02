$(document).ready(function () {
    var output = '';
    var URL = 'books.json';
    console.log("hello");
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'books.json',
        success: function (data) {
            var user = data.category;
            for (var i = 0; i < user.length; i++) {
                output += "<li id='All'>" + user[i] + "</li>";
            }
            $('#List').html(output);
        },

    });
});

$(function () {
    function loadAll() {
        var output = '';
        var URL = 'books.json';
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'books.json',
            success: function (data) {
                var user = data.book;
                for (var i = 0; i < user.length; i++) {
                    output += "<div class='row2'>";
                    output += "<div class='column2'>" + user[i].name + "</div>";
                    output += "<div class = 'column2'>" + user[i].description + "</div>";
                    output += "<div class='column2'>" + user[i].category + "</div>";
                    output += "</div>";
                }
                $('#content').html(output);
            },
        });
    }
    $('#List').on('click', function (event) {
        var user = event.target.id;
        var i = [];
        if ( user === user[i]) {
            user = '';
            loadAll();
            console.log("if");
        }
        else {
            console.log("else")
            var output = ' ';
            var URL = 'books.json';
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'books.json',
                success: function (data) {
                    var up_user = data.book;
                    for (var i = 0; i < up_user.length; i++) {
                        // console.log(data.book[i]);
                        // console.log(up_user[i]);
                        if (up_user[i] === category[i]) {
                            output += "<div class='row2'>";
                            output += "<div class='column2'>" + up_user[i].name + "</div>";
                            output += "<div class = 'column2'>" + up_user[i].description + "</div>";
                            output += "<div class='column2'>" + up_user[i].category + "</div>";
                            output += "</div>";
                            console.log("else for loop");
                        }
                    }
                    $('#content').html(output);
                    console.log("output");
                },
            });
        }
    });
});

