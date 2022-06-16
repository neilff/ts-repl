import { useRef, useMemo, useContext } from 'react';
import MonacoEditor from '@monaco-editor/react';
import debounce from 'lodash.debounce';
import { GlobalContext } from '../state';

import type { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import type { OnMount, EditorProps } from '@monaco-editor/react';

const defaultConfiguration: EditorProps['options'] = {
  padding: {
    top: 25,
  },
  lineNumbers: 'on',
  tabSize: 2,
  minimap: {
    enabled: false,
  },
};

const Editor = () => {
  const { setEditorValue } = useContext(GlobalContext);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const debouncedHandleEditorChange = useMemo(
    () =>
      debounce((value) => {
        setEditorValue(value);
      }, 300),
    [setEditorValue]
  );

  return (
    <MonacoEditor
      options={defaultConfiguration}
      defaultLanguage="typescript"
      defaultValue="// Start typing here"
      height="100vh"
      onChange={debouncedHandleEditorChange}
      onMount={handleEditorDidMount}
    />
  );
};

export default Editor;
