function appendMovie(data, movieNum) {
  $('#movie' + movieNum + ' .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  $('#movie' + movieNum + ' .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
};

function errorLog(movieNum) {
  console.log('An error occurred with getting movie number ' + movieNum);
};

$.get('http://www.omdbapi.com/?i=tt2312602&plot=short&r=json')
.then(appendMovie(1)).catch(errorLog(1));

$.get('http://www.omdbapi.com/?i=tt0784972&plot=short&r=json')
.then(appendMovie(2)).catch(errorLog(2));

$.get('http://www.omdbapi.com/?i=tt1399683&plot=short&r=json')
.then(appendMovie(3)).catch(errorLog(3));

//function appendMovie(data, movieNum) {
//  .then(function(data) {
    // $('#movie' + movieNum + ' .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  //   // $('#movie' + movieNum + ' .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
  // })
  // .catch(function() {
  //   console.log('An error occurred with getting movie number ' + movieNum);
  // })
//};

function appendMovie(data, movieNum) {
  $('#movie' + movieNum + ' .picture').append('<img src=\"' + data.Poster + '\" alt=\"' + data.Title + '\">');
  $('#movie' + movieNum + ' .text').append('<p>' + data.Title + '</p><p> Year released: ' + data.Year + '</p><p>Rated ' + data.Rated + '</p><p>Plot: ' + data.Plot + '</p>');
};

function errorLog(movieNum) {
  console.log('An error occurred with getting movie number ' + movieNum);
};
