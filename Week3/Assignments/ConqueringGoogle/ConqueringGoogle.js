function searchPixabay(str){
  var key = "8733404-69a00da7c73a45a5448f6e2cd"
  $.ajax({
    url: 'https://pixabay.com/api/?' + 'key=' + key + '&q=' + str ,
    method: 'GET',
      success : function(data){
        var arr = [];
        var data = data;

        for(var i =0; i < data.hits.length; i++){
          arr.push(data.hits[i].largeImageURL);
        }
        placeImages(arr);
      }
  });
}

$('#searchfield').on('keyup', function(e){
  if (e.which == 13) {
    searchPixabay($('#searchfield').val());
  }
})

$("#searchbutton").click(function(e){
   searchPixabay($('#searchfield').val());
    });

function placeImages(arr){
  for(var i = 0; i < arr.length; i++){
  $('#orders').append('<img src="' + arr[i] + '">');
  }
}
