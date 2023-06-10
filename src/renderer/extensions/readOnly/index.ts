import { EditorView } from '@codemirror/view'

export default function readOnly(isReadOnly?: boolean) {
  return EditorView.editable.of(!isReadOnly)
}
