import React, { RefObject } from 'react'
import { useCodeEditor } from '../../../hooks/useCodeEditor'

export default function CodeEditor({
  value,
  onChange,
  extensions = [],
  readOnly = false,
}: {
  readOnly?: boolean
  value: string
  onChange?: (json: string) => void
  extensions?: []
}) {
  const ref = useCodeEditor({ value, onChange, extensions, readOnly })

  return <div ref={ref as RefObject<HTMLDivElement>} />
}
