$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search',
  method: 'GET',//Post Put Delete
  contentType: 'application/json; charset=UTF-8',
  data: {
    q:'cats',  // We are searching for cats
    limit: 20,  // We limit this search to 25 gifs only, results number
    api_key: 'dc6zaTOxFJmzC'  // Password to authenticate us as a legitimate Giphy user
  },
  success: handleResults  // Name of a function to be called after API call was successful
});


function handleResults(response_body){
  response_body.data.forEach(function(item) {
    var url = item.images.fixed_height_downsampled.url;
    var image = $(document.createElement('img'));
    image.attr('src', url)
    image.appendTo('#photo-container')
  })
}
