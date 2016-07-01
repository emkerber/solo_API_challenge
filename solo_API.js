//var poster = '<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">';
//var text = '<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>';

// function appendMovie(data, movieNum) {
//   $('#movie' + movieNum + ' .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
//   $('#movie' + movieNum + ' .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
// };
//
function errorLog(movieNum) {
  console.log('An error occurred with getting movie number ' + movieNum);
};

$.get('http://www.omdbapi.com/?i=tt2312602&plot=short&r=json')
.then(function(data) {
  $('#movie1 .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  $('#movie1 .text').append('<p><b>' + data.Title + '</b></p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
})
.catch(errorLog(1));

$.get('http://www.omdbapi.com/?i=tt0784972&plot=short&r=json')
.then(function(data) {
  $('#movie2 .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  $('#movie2 .text').append('<p><b>' + data.Title + '</b></p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
})
.catch(errorLog(2));

$.get('http://www.omdbapi.com/?i=tt1399683&plot=short&r=json')
.then(function(data) {
  $('#movie3 .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  $('#movie3 .text').append('<p><b>' + data.Title + '</b></p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
})
.catch(errorLog(3));
//function appendMovie(data, movieNum) {
//  .then(function(data) {
    // $('#movie' + movieNum + ' .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  //   // $('#movie' + movieNum + ' .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
  // })
  // .catch(function() {
  //   console.log('An error occurred with getting movie number ' + movieNum);
  // })
//};
