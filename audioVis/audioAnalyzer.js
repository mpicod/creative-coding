
    ///////
    const audioCtx = new AudioContext()
    const audio = document.getElementById("player"); // get audio
    const source = audioCtx.createMediaElementSource(audio); // create a new audio lode
    

    // Analyser 

    const analyser = audioCtx.createAnalyser(); // create analyser
    const frequencyData = new Uint8Array(analyser.frequencyBinCount) // keep a 8bits array
    const waveData = new Uint8Array(analyser.frequencyBinCount) 
    
    //////


    setupGeometry = function(){

    }
    
    setupScene = function(){

    }
    

    setupAudioProcessing = () => {
      const sphere = scene.getObjectByName("sphere1").children[0]
      const sphere2 = scene.getObjectByName("sphere2").children[0]
      analyser.fftSize = 2048 // frequencyBinCount is fftSize/2 => 32 = 1 byte
      console.log(analyser.fftSize) // 2048 point by default
      
      source.connect(analyser); // and direct it to analyser
      analyser.connect(audioCtx.destination) // and direcct it to destination
    }
    render = () => {

      let t = clock.getElapsedTime();
      const sphere = scene.getObjectByName("sphere1").children[0]
      const sphere2 = scene.getObjectByName("sphere2").children[0]
      sphere.rotation.set( t/4, t/4, t/4 );
      sphere2.rotation.set( t/4, t/4, t/4 );
       // pass array through analyser
      
        analyser.getByteFrequencyData(frequencyData)
        analyser.getByteTimeDomainData(waveData)

        //// Update Sphere 1 ////
        for (let i = 0; i < sphere.geometry.vertices.length; i++) {
          let geometryVertexColor =  (frequencyData[i]/255 *100)
          sphere.geometry.vertices[i].normalize().multiplyScalar(frequencyData[i]*1.1 +300);
          sphere.geometry.colors[i] = new THREE.Color( "hsl("+ geometryVertexColor +"0, 100%, 50%)");
          
        }
        //// Update Sphere 2 ////
        for (let i = 0; i < sphere2.geometry.vertices.length; i++) {
          let geometryVertexColor =  (waveData[i]/255 *100)
          sphere2.geometry.vertices[i].normalize().multiplyScalar(waveData[i] +10);
          sphere2.geometry.vertices[i].x=0
          
        } // Try to use waveForm but render nothing interesting. Maybe should I use a shader in order to use the surface weather than the volume of the sphere

      sphere2.geometry.verticesNeedUpdate = true;
      sphere.geometry.verticesNeedUpdate = true; 
      sphere.geometry.colorsNeedUpdate = true; 
      requestAnimationFrame(render);

      // sphere1.geometry.vertices.multiplyScalar(1.00001)
      renderer.render(scene, camera);
    };

    
    init = function(){
      setupScene();
      setupGeometry();
      setupAudioProcessing();
      render();
    }

  audio.play();
  