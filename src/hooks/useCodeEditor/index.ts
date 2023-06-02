import { useEffect } from 'react'
import { onUpdate } from '@extensions/onEditorUpdate'
import useCodeMirror from '../useCodeMirror'

export function useCodeEditor({ value, onChange, extensions }) {
  const { ref, view } = useCodeMirror([onUpdate(onChange), ...extensions])
  useEffect(() => {
    if (view) {
      const editorValue = view.state.doc.toString()

      if (value !== editorValue) {
        view.dispatch({
          changes: {
            from: 0,
            to: editorValue.length,
            insert: JSON.stringify(value, null, 2) || '',
          },
        })
      }
    }
  }, [value, view])

  return ref
}
