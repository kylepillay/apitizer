import React from 'react';
import { useCodeMirror } from 'use-codemirror'

export default function EditorPanel({ className, style, ...options }: any) {
  
  const codeMirror = useCodeMirror(options)
 
  return (
    <div className={className} style={style}>
      <pre ref={codeMirror.ref} className={codeMirror.config.theme}>
        {options.value}
      </pre>
    </div>
  )
}
