const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;
const remote = require('electron').remote;
const back = document.getElementById('back');


back.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    const modalPath = path.join('file://',__dirname, 'indexprofile.html')
    let win = new BrowserWindow({width: 1024, height: 720})
    win.on('close', function() {win=null})
    win.loadURL(modalPath)
    window.close();
    win.once('ready-to-show', () => {   
        win.show()
    })  
});
