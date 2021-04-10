import {
  Modal, ModalBody, ModalHeader, ModalFooter,
  Form, FormGroup, Input, Button
} from 'reactstrap'

import styles from '../../styles/login.module.css'
import stylesForm from '../../styles/form.module.css'

export default function TaskModal({ open, close }) {
  return (
    <Modal isOpen={open}>
      <ModalHeader toggle={close}>Adicionar tarefa</ModalHeader>
      <ModalBody>
        <Form className={stylesForm.createForm}>
          <FormGroup>
            <Input className={styles.input} placeholder="Data" type='date' />
          </FormGroup>
          <FormGroup className={stylesForm.groupTextarea}>
            <Input type="textarea" className={styles.input}
              placeholder="Descrição da tarefa" rows={4} />
            <small>Até 150 caracteres</small>
          </FormGroup>

          <Button className={stylesForm.buttonCreate} color='primary'>Adicionar tarefa</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}
