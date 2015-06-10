window.addEventListener('DOMContentLoaded', function () {
    'use strict';
});
var word = "";
var definition = "";
var picture;
var dictjson;
$(document).ready(function () {
    console.log("jQM loaded");
    $("#takePicture").click(function () {
        // Open the device's camera
        var options = {
            mode: 'picture',
            recorderProfile: 'jpg',
            previewSize: {
                width: 352,
                height: 288
            }
        };

        function successCamera(newCamera) {
            console.log("Succeeded loading camera");

            function successPicture(pictureBlob) {
                console.log("Took picture");
            }

            function errorPicture(error) {
                console.log("Issue taking picture " + error);
            }

            var picture = newCamera.takePicture(options, successPicture, errorPicture);
        }

        function errorCamera(error) {
            console.log("Error loading camera. " + error);
            console.warn(error);
        }

        navigator.mozCameras.getCamera("back", options, successCamera, errorCamera); // now show this in div pictureShow and save to localStorage
    });
    $("#createContinue").click(function(){
        // store word
        word = $("#word").val();
        console.log("Word is now " + word);
    });
    $("#definitionContinue").click(function(){
        // store definition
        definition = $("#definition").val();
        console.log("Definition is now " + definition);
    });
    $("#pictureContinue").click(function(){
        // store subtitle
    });
    $.get( "http://localhost:8000/dictionaries/list/", function( json ) {
        dictjson = $.parseJSON(json)
        for (var i = 0; i < dictjson.length; i++) {
            //gets username
            pk = dictjson[i].pk
            subject = dictjson[i].fields.subject
            $("").append(pk);
    }, "json" );

});
