/*
Generate API Key
Your API key for rahulpatil.m30@gmail.com is:

nTiZQGr9ZbHvO45KoG2uMGbHXmbP4DyuV1UXeIqs
You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

https://api.nasa.gov/planetary/apod?api_key=nTiZQGr9ZbHvO45KoG2uMGbHXmbP4DyuV1UXeIqs
For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:

Account Email: rahulpatil.m30@gmail.com
Account ID: 15969669-7ae5-4a5b-a814-d3a3b617790b
*/

function displayImage(data){
    $('<img>', {
        src : data.url,
        height : '100%',
        width : '100%'
    }).appendTo('#nasa');

/*
var img = $(document.createElement('img')).attr('src', data.url).appendTo('#nasa);
*/

}


$.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    success: displayImage,
    data: {
        api_key : 'nTiZQGr9ZbHvO45KoG2uMGbHXmbP4DyuV1UXeIqs',
        date : '2020-06-05'
    }
});