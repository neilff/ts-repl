import React from 'react';

export type GlobalState = {
  editorValue?: string;
  setEditorValue: (value?: string) => void;
};

const globalState: GlobalState = {
  editorValue: '',
  setEditorValue: () => {},
};

export const GlobalContext = React.createContext<GlobalState>(globalState);
