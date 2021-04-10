import {
  Modal, ModalBody, ModalHeader, Button
} from 'reactstrap'

import styles from '../../styles/message.module.css'

export default function Message({ open, text, toggle }) {

  const SuccessIcon = () => {
    return (
      <svg width="131" height="110" viewBox="0 0 131 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 55.7627L50.7468 100L121 10" stroke="#0EA84C" stroke-opacity="0.66" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    )
  }

  return (
    <Modal isOpen={open} className={'modal-sm'}>
      <ModalHeader toggle={toggle}></ModalHeader>
      <ModalBody className={styles.modalBody}>
        <SuccessIcon />
        <h4>{text}</h4>
        <Button>Continuar</Button>
      </ModalBody>
    </Modal>
  )
}
