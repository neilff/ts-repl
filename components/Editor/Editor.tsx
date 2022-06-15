import { useRef } from 'react';
import MonacoEditor from '@monaco-editor/react';
import styles from './Editor.module.css';

import type { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import type { OnChange, OnMount, OnValidate } from '@monaco-editor/react';

const Editor = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange: OnChange = (value, evt) => {
    // console.log('here is the current model value:', value);
  };

  const handleEditorValidation: OnValidate = (markers) => {
    // model markers
    console.log(markers.length);
    markers.forEach((marker) => console.log('onValidate:', marker.message));
  };

  return (
    <div className={styles.editor}>
      <MonacoEditor
        defaultLanguage="typescript"
        defaultValue="// Start typing here"
        height="100vh"
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        onValidate={handleEditorValidation}
      />
    </div>
  );
};

export default Editor;
