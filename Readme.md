# Video Speed Control Chrome Extension

A simple Chrome extension that allows users to control the playback speed of videos on any webpage. The extension provides the option to set video speeds to specific multipliers (2x, 5x, 10x, 20x) and dynamically increase or decrease the speed by smaller increments.

## Features

- **Speed Control**: Set video speed to 2x, 5x, 10x, 20x, or adjust it dynamically using buttons to increase or decrease speed.
- **UI Enhancements**: Modern and responsive design with smooth animations and a gradient background.
- **Responsive**: The popup adapts to smaller screen sizes.
- **Easy to Use**: Simple and intuitive controls to adjust video speed.
- **Supports all HTML5 Video Players**: Works with most video players on websites like YouTube, Vimeo, and others.

## Installation

Follow these steps to install the extension locally:

1. Clone or download the repository to your local machine:
   ```bash
   git clone https://github.com/Eshaniqbal/video_speed_control.git
   ```

2. Open Chrome and navigate to the Extensions page:
   - Go to `chrome://extensions/` in the address bar, or click on the Chrome menu, hover over "More Tools," and select "Extensions."

3. Enable Developer Mode:
   - Toggle the "Developer mode" switch in the top-right corner of the Extensions page.

4. Load the unpacked extension:
   - Click the "Load unpacked" button and select the folder where the extension files are located.

5. The extension is now installed:
   - You should see the "Video Speed Controller" icon in your browser toolbar.

## Usage

1. Navigate to any webpage with a video player (e.g., YouTube, Vimeo, or an HTML5 video).
2. Click the extension icon in the toolbar to open the popup.
3. Use the provided buttons to:
   - Set the playback speed to predefined multipliers (2x, 5x, 10x, 20x).
   - Increase or decrease the playback speed incrementally.
4. The changes will be applied instantly to the video player on the webpage.

## Folder Structure

```
video_speed_control/
├── icons/
│   ├── icon1.png         # 16x16 icon for the toolbar
├── popup.html             # Popup interface for the extension
├── popup.css              # Styles for the popup
├── popup.js               # Logic for controlling video speed from the popup
├── content.js             # Script injected into web pages to control videos
├── background.js          # Background script for managing extension state
├── manifest.json          # Configuration file for the Chrome extension
└── README.md              # Documentation for the extension
```

## File Descriptions

- **`manifest.json`**:
  - The configuration file defining the extension's metadata, permissions, and scripts.

- **`popup.html`**:
  - The user interface for the extension popup.

- **`popup.css`**:
  - Styles for the popup, including responsiveness and animations.

- **`popup.js`**:
  - Handles button clicks and communicates with the `content.js` script to control video playback speed.

- **`content.js`**:
  - Injected into web pages to interact with video players and modify playback speed.

- **`background.js`**:
  - Manages background tasks and messaging between popup and content scripts.

- **`icons/`**:
  - Contains the extension icons in multiple sizes.

## Development

1. Make changes to the extension files as needed (e.g., `content.js` or `popup.html`).
2. Reload the extension:
   - Go to `chrome://extensions/` and click the "Reload" button for the "Video Speed Controller" extension.
3. Test the changes on a webpage with a video player.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your branch:
   ```bash
   git commit -m "Description of your changes"
   git push origin feature-name
   ```
4. Open a pull request with a detailed description of your changes.


