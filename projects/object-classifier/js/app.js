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


/* DO ML SHIT HERE

    1. Preprocess input from camera (update every 1000ms)
    2. Put into model
    3. Get output
    4. Display output in 'output' variable. 
*/

function runModel () {
    const img = document.getElementById('camera--view')
    //Load model 
    mobilenet.load().then(model => {
        //Classify image every second
        setInterval(function(){
            model.classify(img).then(predictions => {
                console.log(predictions)
                document.getElementById('output').innerHTML = predictions;
            }); 
        }, 1000); 
    });
}



cameraTrigger.onclick = function() { //Start camera and load model when button pressed
    cameraStart(); 
    runModel(); 
}; 

