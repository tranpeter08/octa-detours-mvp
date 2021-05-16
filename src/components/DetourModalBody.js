import {useContext, useState, useEffect} from 'react';
import MainContext from '../context/MainContext';
import styles from './DetourModal.module.css';

export default function DetourModalBody() {
  const ctx = useContext(MainContext.Ctx);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     ctx.actions.closeModal();
  //   }, 2 * 60 * 1000);

  //   return () => {
  //     if (timer) clearTimeout(timer);
  //   };
  // }, []);

  function handleClick() {
    ctx.actions.closeModal();
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick} className={styles.button}>
          Close
        </button>
      </div>
      <iframe className={styles.iframe} src={`/${ctx.state.fileName}.pdf`} />
    </div>
  );
}
