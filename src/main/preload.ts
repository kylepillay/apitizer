// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

export type Channels =
  | 'make-request'
  | 'make-request-response'
  | 'add-new-request-response'
  | 'add-new-request'
  | 'get-all-requests'
  | 'get-all-requests-response'
  | 'get-request'
  | 'get-request-response'
  | 'update-request'
  | 'update-request-response'
  | 'delete-request'
  | 'delete-request-response'
  | 'get-all-requests'
  | 'get-all-requests-response'

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args)
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) => func(...args)
      ipcRenderer.on(channel, subscription)

      return () => {
        ipcRenderer.removeListener(channel, subscription)
      }
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args))
    },
  },
}

contextBridge.exposeInMainWorld('electron', electronHandler)

export type ElectronHandler = typeof electronHandler
