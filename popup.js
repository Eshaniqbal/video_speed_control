// Function to set video playback speed
function setSpeed(speed) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    
    // Check if the active tab is a valid page (not a chrome:// URL)
    if (!tab.url.startsWith("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (speed) => {
          const videos = document.querySelectorAll("video");
          videos.forEach(video => {
            video.playbackRate = speed;
            console.log(`Video speed set to ${speed}x`);
          });
        },
        args: [speed]
      }, (result) => {
        // Update current speed display after setting it
        document.getElementById("current-speed").innerText = `Speed: ${speed}x`;
      });
    } else {
      console.log("Cannot set speed on chrome:// URLs");
    }
  });
}

// Add event listeners to predefined speed buttons
document.querySelectorAll("#speed-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const speed = parseFloat(button.getAttribute("data-speed"));
    setSpeed(speed);
  });
});

// Add event listeners to increase and decrease buttons
document.getElementById("increase").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    
    // Check if the active tab is a valid page (not a chrome:// URL)
    if (!tab.url.startsWith("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const videos = document.querySelectorAll("video");
          if (videos.length > 0) {
            videos.forEach(video => {
              video.playbackRate += 0.25; // Increase speed by 0.25x
              console.log(`Video speed increased to ${video.playbackRate}`);
            });
          }
          return videos.length > 0 ? videos[0].playbackRate : 1;
        }
      }, (result) => {
        const speed = result[0]?.result || 1;
        document.getElementById("current-speed").innerText = `Speed: ${speed}x`;
      });
    } else {
      console.log("Cannot increase speed on chrome:// URLs");
    }
  });
});

document.getElementById("decrease").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    
    // Check if the active tab is a valid page (not a chrome:// URL)
    if (!tab.url.startsWith("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const videos = document.querySelectorAll("video");
          if (videos.length > 0) {
            videos.forEach(video => {
              video.playbackRate -= 0.25; // Decrease speed by 0.25x
              console.log(`Video speed decreased to ${video.playbackRate}`);
            });
          }
          return videos.length > 0 ? videos[0].playbackRate : 1;
        }
      }, (result) => {
        const speed = result[0]?.result || 1;
        document.getElementById("current-speed").innerText = `Speed: ${speed}x`;
      });
    } else {
      console.log("Cannot decrease speed on chrome:// URLs");
    }
  });
});

// Initialize current speed on popup open
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  
  // Check if the active tab is a valid page (not a chrome:// URL)
  if (!tab.url.startsWith("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const videos = document.querySelectorAll("video");
        return videos.length > 0 ? videos[0].playbackRate : 1;
      }
    }, (result) => {
      const speed = result[0]?.result || 1;
      document.getElementById("current-speed").innerText = `Speed: ${speed}x`;
    });
  } else {
    console.log("Cannot initialize speed on chrome:// URLs");
  }
});
