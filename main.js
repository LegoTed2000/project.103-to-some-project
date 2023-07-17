var camera = document.getElementById("camera");

Webcam.set({
    width:400 ,
    height:300 ,
    image_format: "png" ,
    png_quality: 90
});
Webcam.attach(camera);


function display() {
    Webcam.snap(function(data_uri){
        document.getElementById("display").innerHTML = '<img src="'+data_uri+'" >';
    });
}