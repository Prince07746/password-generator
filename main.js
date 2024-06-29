const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create a new browser window.
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration
    },
  });

  // Load your app's HTML file.
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
