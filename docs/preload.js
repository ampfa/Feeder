const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // You can safely expose future APIs here
});
