import { RefObject } from 'react'
import { useCodeEditor } from '../../../hooks/useCodeEditor'

export default function JsonEditorPane({
  value,
  onChange,
  extensions = [],
}: {
  value: any
  onChange: any
  extensions?: []
}) {
  const ref = useCodeEditor({ value, onChange, extensions })

  return <div ref={ref as RefObject<HTMLDivElement>} />
}
