import React, { useRef, useEffect } from 'react';
import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state'
import { indentWithTab } from '@codemirror/commands';
import { json } from '@codemirror/lang-json';

const basicExtensions = [
  basicSetup,
  keymap.of([indentWithTab]),
  json(),
  EditorState.tabSize.of(2),
];

export default function JsonEditorPanel({
  paneValue,
  setPaneValue,
  isEditable = true,
}: any) {
  const editorRef = useRef<any>();

  useEffect(() => {
    if (editorRef.current === null) return;

    const state = EditorState.create({
      doc: paneValue,
      extensions: [
        ...basicExtensions,
        EditorView.updateListener.of((view) => {
          if (view.docChanged) {
            setPaneValue(view.state.doc);
          }
        }),
        EditorView.editable.of(isEditable),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
    // eslint-disable-next-line
  }, [editorRef.current, paneValue]);

  return <div ref={editorRef}></div>;
}
