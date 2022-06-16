import React, { useMemo, useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Editor from '../components/Editor/Editor';
import Evaluator from '../components/Evaluator/Evaluator';
import { NextPage } from 'next';
import { GlobalContext, GlobalState } from '../components/state';
import Navigation from '../components/Navigation/Navigation';

const Home: NextPage = () => {
  const [editorValue, setEditorValue] = useState<string | undefined>();

  const globalContextValue: GlobalState = useMemo(() => ({ editorValue, setEditorValue }), [editorValue]);

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <div className={styles.container}>
        <Head>
          <title>ts-repl - Typescript Repl</title>
          <meta name="description" content="Minimal web-based editor that evaluates Typescript code." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Navigation />
          <div className={styles.editor}>
            <div className={styles.editorPanel}>
              <Editor />
            </div>
            <div className={styles.editorPanel}>
              <Evaluator />
            </div>
          </div>
        </main>
      </div>
    </GlobalContext.Provider>
  );
};

export default Home;
