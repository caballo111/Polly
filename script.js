if (!('speechSynthesis' in window)) {
    alert('Este navegador no tiene la función de texto a voz');
}

const polly = new SpeechSynthesisUtterance();
polly.lang = 'es';

document.getElementById('speakButton').addEventListener('click', () => {
  polly.text = document.getElementById('message').value;
  window.speechSynthesis.speak(polly)  
});
