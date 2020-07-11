const {ipcMain, app, BrowserWindow, Menu}=require('electron');

Menu.setApplicationMenu(false);

let win;

function createWindow(){

    win=new BrowserWindow({

        height:600,

        width:800,

        // frame:false,

        webPreferences:{

            nodeIntergration:true
        }
    })

    win.loadFile('main.html');
}

app.whenReady().then(createWindow);