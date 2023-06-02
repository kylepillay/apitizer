// use-code-mirror.ts
import { useEffect, useRef, useState } from 'react'
import { basicSetup } from 'codemirror'
import { json } from '@codemirror/lang-json'
import { Extension } from '@codemirror/state'
import { EditorView } from '@codemirror/view'

const useCodeMirror = (AddedExtensions: Extension[] = []) => {
  const ref = useRef<Element | DocumentFragment | undefined>()
  const [view, setView] = useState<EditorView>()

  useEffect(() => {
    const view = new EditorView({
      extensions: [basicSetup, json(), ...AddedExtensions],
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

export default useCodeMirror
