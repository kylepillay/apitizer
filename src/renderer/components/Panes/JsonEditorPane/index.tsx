import React, { RefObject } from 'react'
import { useCodeEditor } from '../../../hooks/useCodeEditor'

const JsonEditorPane = ({
  value,
  onChange,
  extensions = [],
}: {
  value: string
  onChange: (body: string) => void
  extensions?: []
}) => {
  const ref = useCodeEditor({ value, onChange, extensions })

  return <div ref={ref as RefObject<HTMLDivElement>} />
}

export default JsonEditorPane
