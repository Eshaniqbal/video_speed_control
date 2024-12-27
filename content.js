// Function to set playback speed
function setPlaybackSpeed(speed) {
  const videos = document.querySelectorAll('video');
  if (videos.length > 0) {
      videos.forEach(video => {
          video.playbackRate = speed;
      });
      console.log(`Playback speed set to ${speed}`);
  } else {
      console.log("No video elements found.");
  }
}

// Add a speed control overlay
function createSpeedControlOverlay() {
  if (document.querySelector('.video-speed-overlay')) return;

  const overlay = document.createElement('div');
  overlay.className = 'video-speed-overlay';
  overlay.style.position = 'fixed';
  overlay.style.bottom = '10px';
  overlay.style.right = '10px';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  overlay.style.color = 'white';
  overlay.style.padding = '10px';
  overlay.style.borderRadius = '5px';
  overlay.style.zIndex = '10000';
  overlay.style.cursor = 'pointer';

  overlay.textContent = "1x";

  overlay.addEventListener('click', () => {
      const currentSpeed = parseFloat(overlay.textContent.replace('x', ''));
      const newSpeed = currentSpeed >= 2 ? 0.5 : currentSpeed + 0.5;
      setPlaybackSpeed(newSpeed);
      overlay.textContent = `${newSpeed}x`;
  });

  document.body.appendChild(overlay);
}

// Initialize the extension logic
function initialize() {
  setPlaybackSpeed(1); // Default speed
  createSpeedControlOverlay();
}

// Run initialization after DOM is loaded
document.addEventListener('DOMContentLoaded', initialize);
