// Select DOM elements
const animateButton = document.getElementById('animateButton');
const animatedBox = document.getElementById('animatedBox');
const themeColorInput = document.getElementById('themeColor');
const savePreferencesButton = document.getElementById('savePreferences');
const loadPreferencesButton = document.getElementById('loadPreferences');

// Function to store user preferences in localStorage
function savePreferences() {
  const selectedColor = themeColorInput.value;
  localStorage.setItem('userThemeColor', selectedColor);
  alert('Preferences saved!');
}

// Function to load user preferences from localStorage
function loadPreferences() {
  const savedColor = localStorage.getItem('userThemeColor');
  if (savedColor) {
    themeColorInput.value = savedColor;
    animatedBox.style.backgroundColor = savedColor; // Apply color to the box
    alert('Preferences loaded!');
  } else {
    alert('No preferences found.');
  }
}

// Event listener to trigger CSS animation
animateButton.addEventListener('click', () => {
  animatedBox.classList.add('bounce-animation');

  // Remove the animation class after it completes
  setTimeout(() => {
    animatedBox.classList.remove('bounce-animation');
  }, 1000); // Match this timeout with the animation duration
});

// Event listeners for saving and loading preferences
savePreferencesButton.addEventListener('click', savePreferences);
loadPreferencesButton.addEventListener('click', loadPreferences);

// On page load, apply saved preferences if available
window.addEventListener('load', () => {
  loadPreferences();
});