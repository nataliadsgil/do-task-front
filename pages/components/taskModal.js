import { useState } from 'react'

import {
  Modal, ModalBody, ModalHeader, ModalFooter,
  Form, FormGroup, Input, Button
} from 'reactstrap'

import styles from '../../styles/login.module.css'
import stylesForm from '../../styles/form.module.css'

import TaskService from '../../services/task'

export default function TaskModal({ open, close }) {

  const [dateTask, setDateTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  const createTask = () => {
    TaskService.create({
      date: dateTask,
      description: descriptionTask
    })
      .then(result => {
        console.log(result);
        alert("Tarefa inserida com sucesso");
      })
      .catch(err => {
        console.log(err);
        alert("Erro ao inserir tarefa");
      })
  }

  return (
    <Modal isOpen={open}>
      <ModalHeader toggle={close}>Adicionar tarefa</ModalHeader>
      <ModalBody>
        <Form className={stylesForm.createForm}>
          <FormGroup>
            <Input className={styles.input} placeholder="Data"
              type='date' value={dateTask} onChange={e => setDateTask(e.target.value)} />
          </FormGroup>
          <FormGroup className={stylesForm.groupTextarea}>
            <Input type="textarea" className={styles.input}
              placeholder="Descrição da tarefa" rows={4}
              value={descriptionTask} onChange={e => setDescriptionTask(e.target.value)} />
            <small>Até 150 caracteres</small>
          </FormGroup>

          <Button className={stylesForm.buttonCreate} color='primary'
            onClick={createTask}>Adicionar tarefa</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}
