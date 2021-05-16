import {useContext} from 'react';
import Modal from '@material-ui/core/Modal';
import MainContext from '../context/MainContext';
import styles from './DetourModal.module.css';
import DetourModalBody from './DetourModalBody';

export default function DetourModal() {
  const ctx = useContext(MainContext.Ctx);

  function handleClose() {
    ctx.actions.closeModal();
  }

  return (
    <Modal
      open={ctx.state.open}
      onClose={handleClose}
      aria-labelledby="Detour details"
      aria-describedby="See detour details"
      className={styles.modal}
    >
      <>{ctx.state.open && <DetourModalBody />}</>
    </Modal>
  );
}
