import { RefObject } from 'react'
import { useCodeEditor } from '../../../hooks/useCodeEditor'

export default function CodeEditor({
  value,
  onChange,
  extensions = [],
}: {
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  extensions?: []
}) {
  const ref = useCodeEditor({ value, onChange, extensions })

  return <div ref={ref as RefObject<HTMLDivElement>} />
}
