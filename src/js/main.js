const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  BrowserWindow.addDevToolsExtension('C:\\Users\\Rob\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\0.15.4_0');
  let mainWindow = new BrowserWindow({ width: 1360, height: 800 });
  mainWindow.loadURL(path.join('file://', __dirname, '../../public/index.html'));
  mainWindow.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
