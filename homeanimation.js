// Typewriter effect script
const typewriterElement = document.getElementById('typewriter');
const phrases = [
  'Hello there!',        // English
  'こんにちは!',         // Japanese
  '你好!',               // Chinese
  '안녕하세요!',         // Korean
  'Hola allí!',          // Spanish
  'Salut là!',           // French
  'مرحبا!'               // Arabic
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeWriter, 500); // Pause before typing next
      return;
    }
  } else {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex++);
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1000); // Pause after typing
      return;
    }
  }
  
  setTimeout(typeWriter, isDeleting ? 50 : 100); // Speed: 100ms type, 50ms delete
}

// Start the effect on page load
window.addEventListener('load', () => {
  typewriterElement.textContent = ''; // Clear initial text
  typeWriter();
});