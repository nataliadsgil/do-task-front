import {
  Modal, ModalBody
} from 'reactstrap'

export default function Message({ open, text }) {
  return (
    <Modal isOpen={open}>
      <ModalBody>
        <h3>{text}</h3>
      </ModalBody>
    </Modal>
  )
}
