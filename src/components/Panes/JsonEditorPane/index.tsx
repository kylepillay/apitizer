import React, { RefObject } from 'react'
import { useCodeEditor } from '../../../hooks/useCodeEditor'

const JsonEditorPane = ({
  value,
  onChange,
  extensions = [],
}: {
  value: object
  onChange: (value: object) => void
  extensions?: []
}) => {
  const ref = useCodeEditor({ value, onChange, extensions })

  return <div ref={ref as RefObject<HTMLDivElement>} />
}

export default JsonEditorPane
