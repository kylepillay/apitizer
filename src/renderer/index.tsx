import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(<App />)

window.electron.ipcRenderer.on('make-request-response-details', (args) => {
  console.log(args)
})

window.electron.ipcRenderer.on('make-request-response-body', (body) => {
  console.log(JSON.parse(body as string))
})
