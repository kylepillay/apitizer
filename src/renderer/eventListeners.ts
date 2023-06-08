import onMakeRequestResponse from './eventHandlers/onMakeRequestResponse'

window.electron.ipcRenderer.on('make-request-response', onMakeRequestResponse)
