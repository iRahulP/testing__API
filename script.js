
function fetchRandomDog(){
    
//plain Vanila way
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function(){
    //     console.log(xhrRequest.response);

    //     //String to JSON
    //     var responseData = JSON.parse(xhrRequest.response);
    //     var imageUrl = responseData.message;

    //     //JSON to String
    //     //JSON.stringify(imageUrl)
    //     document.getElementById('dog').setAttribute('src', imageUrl);
    //     //$( '$dog' ).attr('src', imageUrl);
    // };

    // xhrRequest.onerror = function(){
    //     console.log("Error");
    // };

    // xhrRequest.open('GET', 'https://dog.ceo/api/breeds/image/random',true);

    // xhrRequest.send();

//AJAX way
    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function (data){
    //         var imageUrl = data.message;
    //         $('#dog').attr('src', imageUrl);
    //     }
    // }).fail(function(){
    //     console.log("Request failed");
    // })
 
//.GET way
    $.get('https://dog.ceo/api/breeds/image/random'
        ,
     function (data){
            var imageUrl = data.message;
            $('#dog').attr('src', imageUrl);
        }).fail(function (xhr, textStatus, errorThrown){
            console.log("Request failed");
        })
}

$( '#dog-button' ).click(fetchRandomDog);

//document.getElementById('dog-button').addEventListener('click', fetchRandomDog);