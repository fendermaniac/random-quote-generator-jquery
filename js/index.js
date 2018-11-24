function changeColor() { 
  var colors = ["teal","aqua","orange","chartreuse","coral","lightgreen","lightpink",
              "lightsalmon","lightskyblue","lightseagreen","olivedrab"];
  
  $("body").css("background", colors[Math.floor(Math.random() * colors.length)]); 
};

function quoteGen() { $.getJSON("https://talaikis.com/api/quotes/random/", function(data){
        $("#quote").html(JSON.stringify(data.quote));      
        $("#author").html("Quote by: " + JSON.stringify(data.author));
      }); };

function tweetQuote() { window.open('https://twitter.com/intent/tweet?text=' 
                    + $("#quote").text() + " " + $("#author").text()); };

function init() {
  $("#getQuote").click(changeColor).click(quoteGen);
  $("#tweetQuote").click(tweetQuote);
}

$(document).ready(init);