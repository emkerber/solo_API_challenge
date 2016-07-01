//function to be executed if there is an error processing the request
function errorLog(movieNum) {
  console.log('An error occurred with getting movie number ' + movieNum);
};

//gets the JSON code for the first movie and appends to the DOM
$.get('http://www.omdbapi.com/?i=tt2312602&plot=short&r=json')
.then(function(data) {
  $('#movie1 .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  $('#movie1 .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
})
.catch(errorLog(1));

//gets the JSON code for the second movie and appends to the DOM
$.get('http://www.omdbapi.com/?i=tt0784972&plot=short&r=json')
.then(function(data) {
  $('#movie2 .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  $('#movie2 .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
})
.catch(errorLog(2));

//gets the JSON code for the third movie and appends to the DOM
$.get('http://www.omdbapi.com/?i=tt1399683&plot=short&r=json')
.then(function(data) {
  $('#movie3 .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  $('#movie3 .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
})
.catch(errorLog(3));

//listens for a click event on the Submit! button and reads the input in the text bar
$('#submitButton').on('click', function(event) {
  event.preventDefault(); //to prevent the page from reloading
  //$('#searchResult').empty(); //to clear previous searches
  // var input = $('#searchInput').val(); //assigns the text input to a value
  // $.get('http://www.omdbapi.com/?s=' + input) //searches the API for the movie
  // .then(function(data) { //appends movie information to the DOM
  //   $('#searchResult .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  //   $('#searchResult .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
  // })
  // .catch(errorLog(4)); //function is executed if there is an error processing the request
});
