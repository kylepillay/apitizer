import onMakeRequestResponse from './eventHandlers/onMakeRequestResponse'
import onAddNewRequestResponse from './eventHandlers/onAddNewRequestResponse'

window.electron.ipcRenderer.on('make-request-response', onMakeRequestResponse)
window.electron.ipcRenderer.on('add-new-request-response', onAddNewRequestResponse)
