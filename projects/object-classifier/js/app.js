import * as mobilenet from '@tensorflow-models/mobilenet';

// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
document.getElementById('output').innerHTML = "Cat";

function runModel () {
    //Get current image
    const img = document.getElementById('camera--view'); 
    //Load model 
    const model = await mobilenet.load(); 

    setInterval(function() {
        var predictions = await model.classify(img); 
        console.log(predictions); 
        document.getElementById('output').innerHTML = predictions; 
    }); 
}



cameraTrigger.onclick = function() { //Start camera and load model when button pressed
    cameraStart(); 
    runModel(); 
}; 

