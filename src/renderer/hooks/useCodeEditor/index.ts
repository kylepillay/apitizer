import { useEffect } from 'react'
import { onUpdate } from '../../extensions/onEditorUpdate'
import useCodeMirror from '../useCodeMirror'

export function useCodeEditor({
  value,
  onChange,
  extensions = [],
}: {
  value: string
  onChange?: (json: string) => void
  extensions?: []
}) {
  const checkedOnChange = onChange || (() => console.log('onChange not provided'))
  const { ref, view } = useCodeMirror([onUpdate(checkedOnChange), ...extensions])
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
