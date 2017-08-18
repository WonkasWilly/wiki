$(function(){
    $(".btn").click(function() {
        var searchTerm = $("#search-bar").val();
        var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&utf8=&format=json&origin=*";
        console.log(url);
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                console.log(data);
            }
        })

    });

});