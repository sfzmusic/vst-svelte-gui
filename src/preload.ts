import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
	send: (channel: any, data: any) => {
		ipcRenderer.send(channel, data);
	},
	sendSync: (channel: any, data: any) => {
		ipcRenderer.sendSync(channel, data);
	},
	receive: (channel: any, func: any) => {
		ipcRenderer.on(channel, (event, ...args) => func(...args));
	},
});
