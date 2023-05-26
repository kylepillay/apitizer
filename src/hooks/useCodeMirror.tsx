// use-code-mirror.ts
import { useEffect, useState, useRef } from 'react'
import { basicSetup } from 'codemirror'
import { json } from '@codemirror/lang-json'
import { Extension } from '@codemirror/state'
import { EditorView } from '@codemirror/view'

export default function useCodeMirror(AddedExtensions: Extension[] = []) {
  const ref = useRef<Element | DocumentFragment | undefined>()
  const [view, setView] = useState<EditorView>()

  useEffect(() => {
    const view = new EditorView({
      extensions: [basicSetup, json(), ...[]],
      parent: ref.current,
    })

    setView(view)

    /**
     * Make sure to destroy the codemirror instance
     * when our components are unmounted.
     */
    return () => {
      view.destroy()
      setView(undefined)
    }
  }, [])

  return { ref, view }
}
