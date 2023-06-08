import React, { RefObject } from 'react'
import { useCodeEditor } from '../../../hooks/useCodeEditor'

export default function CodeEditor({
  value,
  onChange,
  extensions = [],
}: {
  value: string
  onChange?: (json: string) => void
  extensions?: []
}) {
  const ref = useCodeEditor({ value, onChange, extensions })

  return <div ref={ref as RefObject<HTMLDivElement>} />
}
