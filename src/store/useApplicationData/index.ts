import { create } from 'zustand'

export interface IApplicationDataData {
  requestInProgress: boolean
  currentJsonResponse: string
  setJsonResponse: (json: string) => void
  currentJsonBody: string
  setJsonBody: (json: string) => void
}

export const useApplicationData = create<IApplicationDataData>((set) => ({
  requestInProgress: false,
  currentJsonResponse: '{\n\t\n}',
  currentJsonBody: '{\n\t\n}',

  setJsonResponse: (json: string) => set({ currentJsonResponse: json }),
  setJsonBody: (json: string) => set({ currentJsonResponse: json }),
}))
