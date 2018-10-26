/**
 * Created by bculas on 28/10/2016.
 */

/**
 *
 * AUDIO SETUP
 *
 */
const audioCtx = new AudioContext()
const audio = document.getElementById("player"); // get audio
const source = audioCtx.createMediaElementSource(audio); // create a new audio lode


// Analyser 

const analyser = audioCtx.createAnalyser(); // create analyser
const frequencyData = new Uint8Array(analyser.frequencyBinCount) // keep a 8bits array
const waveData = new Uint8Array(analyser.frequencyBinCount) 

//////
source.connect(analyser); // and direct it to analyser
analyser.connect(audioCtx.destination) // and direcct it to destination
audio.play();
// function loadSound(url) {
//     var request = new XMLHttpRequest();
//     request.open('GET', 'red-warrior.mp3', true);
//     request.responseType = 'arraybuffer';

//     // Decode asynchronously
//     request.onload = function() {

//         audioCtx.decodeAudioData(request.response, function(buffer) {

//             // success callback
//             audioBuffer = buffer;

//             // Create sound from buffer
//             audioSource = audioCtx.createBufferSource();
//             audioSource.buffer = audioBuffer;

//             // connect the audio source to context's output
//             audioSource.connect( analyser )
//             analyser.connect( audioCtx.destination )

//             // play sound
//             audioSource.start();


//         }, function(){

//             // error callback
//             //
//         });
//     }
//     request.send();
// }