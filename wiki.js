$(function(){
    $("#search-bar").keyup(function(event) {
        if(event.keyCode === 13) {
            $(".btn").click();
        }
    });
    $(".btn").click(function() {
        var searchTerm = $("#search-bar").val();
        var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&utf8=&format=json&origin=*";
        console.log(url);
        $.ajax({
            cache: false,
            url: url,
            type: 'GET',
            success: function(data) {
                // Create a blank array to store the specific URLs in
                var urlArr = [];
                for (var i=0; i <= data.query.search.length; i++) {
                    // Adding the variables for use here
                    var headerData = data.query.search[i].title;
                    var urlSearchTerm = headerData.replace(/\s/gi, '_');
                    var snippetData = data.query.search[i].snippet + "...";
                    var createDiv = document.createElement("div");
                    var createHeader = document.createElement("h1");
                    var createSnippet = document.createElement("p");
                    var divId = "div" + i.toString();
                    var headerId = "header" + i.toString();
                    var snippetId = "snippet" + i.toString();
                    var resultUrl = "https://en.wikipedia.org/wiki/";
                    urlArr[i] = resultUrl + urlSearchTerm;
                    // Create the div element, give it an id
                    // Create <h1> element, give it an id
                    // Create <p> element, give it an id
                    // Give each <div> a class
                    createDiv.setAttribute("id", divId);
                    createHeader.setAttribute("id", headerId);
                    createSnippet.setAttribute("id", snippetId);
                    createDiv.setAttribute("class", "each-result");
                    // appending <div> elements in the #results id element in body
                    // appending <h1> element to the div element
                    // appending <p> element to the div element
                    document.getElementById("results").appendChild(createDiv);
                    document.getElementById(divId).appendChild(createHeader);
                    document.getElementById(divId).appendChild(createSnippet);
                    // populate json data into <h1> element
                    // populate json data into <p> element
                    $("#header" + i.toString()).text(headerData);
                    $("#snippet" + i.toString()).html(snippetData);
                    // create a click event handler that does 2 things
                    // 1. Gives each div an element that has a URL in the resultUrl array
                    // 2. Opens that url in a new window
                    (function(i) {
                        $("#div" + i.toString()).click(function() {
                            window.open(urlArr[i]);
                    });
                    }(i));



                }
            }
        });

    });

    $("#random-wiki-button").click(function() {
       window.open("https://en.wikipedia.org/wiki/Special:Random");
    });

});