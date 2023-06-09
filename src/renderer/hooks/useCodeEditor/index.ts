import { useEffect } from 'react'
import { onUpdate } from '../../extensions/onEditorUpdate'
import useCodeMirror from '../useCodeMirror'
import setReadOnly from '../../extensions/readOnly'

export function useCodeEditor({
  value,
  onChange,
  extensions = [],
  readOnly = false,
}: {
  value: string
  onChange?: (json: string) => void
  extensions?: []
  readOnly?: boolean
}) {
  const checkedOnChange = onChange || (() => null)
  const { ref, view } = useCodeMirror([
    onUpdate(checkedOnChange),
    setReadOnly(readOnly),
    ...extensions,
  ])
  useEffect(() => {
    if (view) {
      const editorValue = view.state.doc.toString()

      if (value !== editorValue) {
        view.dispatch({
          changes: {
            from: 0,
            to: editorValue.length,
            insert: value || '',
          },
        })
      }
    }
  }, [value, view])

  return ref
}
