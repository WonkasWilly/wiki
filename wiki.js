$(function(){
    $(".btn").click(function() {
        var searchTerm = $("#search-bar").val();
        var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&utf8=&format=json&origin=*";
        console.log(url);
        $.ajax({
            cache: false,
            url: url,
            type: 'GET',
            success: function(data) {
                for (var i=0; i <= data.query.search.length; i++) {
                    var headerData = data.query.search[i].title;
                    var snippetData = data.query.search[i].snippet + "...";
                    var createDiv = document.createElement("div");
                    var createHeader = document.createElement("h1");
                    var createSnippet = document.createElement("p");

                   createDiv.setAttribute("id", "div" + i.toString());
                   console.log("div" + i.toString());
                   createHeader.setAttribute("id", "header" + i.toString());
                   createSnippet.setAttribute("id", "snippet" + i.toString());
                   createDiv.setAttribute("class", "each-result");

                    document.getElementById("results").appendChild(createDiv);
                    document.getElementById("div" + i.toString()).appendChild(createHeader);
                    document.getElementById("div" + i.toString()).appendChild(createSnippet);

                    $("#header" + i.toString()).text(headerData);
                    $("#snippet" + i.toString()).html(snippetData);
                    
                }

            }
        })

    });

});