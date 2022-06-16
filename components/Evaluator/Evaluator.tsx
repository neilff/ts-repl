import { useContext } from 'react';
import styles from './Evaluator.module.css';
import { GlobalContext } from '../state';

const Evaluator = () => {
  const { editorValue } = useContext(GlobalContext);

  let result = null;
  let error;

  try {
    result = eval(editorValue || '');
  } catch (err) {
    const e = err as Error;
    error = e.toString();
  }

  const content = !error ? (
    result
  ) : (
    <div className={styles.error}>
      <p>An error occured while attempting to evaluate:</p>
      <p>{error}</p>
    </div>
  );

  return <pre className={styles.evaluator}>{!error ? JSON.stringify(content, null, 2) : content}</pre>;
};

export default Evaluator;
