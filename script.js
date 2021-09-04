
// Object creation of wavesurfer having 2 parameters, conatainer that bind html id and wavecolor that defines wave color in view
var wavesurfer = WaveSurfer.create(
  { container: '#waveform', 
  waveColor: 'blue' }
  );

  //This loads the mp3 file that will be played when user clicks on the play button
wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

//function created when the wavesurfer is ready.
wavesurfer.on('ready', function () {
  var timeline = Object.create(WaveSurfer.Timeline);

  timeline.init({
    wavesurfer: wavesurfer,
    container: '#waveform-timeline'
  });
});