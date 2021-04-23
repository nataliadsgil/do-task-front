import { useEffect, useState } from 'react'

import {
  Modal, ModalBody, ModalHeader, ModalFooter,
  Form, FormGroup, Input, Button
} from 'reactstrap'

import styles from '../../styles/login.module.css'
import stylesForm from '../../styles/form.module.css'

import TaskService from '../../services/task'

export default function TaskModal({ open, close, insert, edit, item }) {

  const [dateTask, setDateTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  useEffect(() => {
    if (open === true && edit) {
      var date = new Date(item.date);
      var month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      var day = ((date.getDate() + 1) < 10) ? '0' + (date.getDate() + 1) : date.getDate() + 1;
      setDateTask(`${date.getFullYear()}-${month}-${day}`);
      setDescriptionTask(item.description);
    }
    else if (open === true) {
      setDateTask('');
      setDescriptionTask('');
    }
  }, [open])

  const createTask = () => {
    TaskService.create({
      date: dateTask,
      description: descriptionTask
    })
      .then(result => {
        console.log(result);
        insert();
      })
      .catch(err => {
        console.log(err);
        alert("Erro ao inserir tarefa");
      })
  }

  const editTask = () => {
    TaskService.update({
      date: dateTask,
      description: descriptionTask,
      id: item._id,
      check: item.check
    })
      .then(result => {
        console.log(result);
        insert();
      })
      .catch(err => {
        console.log(err);
        alert("Erro ao editar tarefa");
      })
  }

  const checkTask = () => {
    TaskService.update({
      id: item._id,
      date: item.date,
      description: item.description,
      check: true
    })
      .then(result => {
        console.log(result);
        insert();
      })
      .catch(err => {
        console.log(err);
        alert("Erro ao editar tarefa");
      })
  }

  console.log(edit)

  return (
    <Modal isOpen={open} className="modal-lg">
      <ModalHeader toggle={close}>{edit ? 'Editar' : 'Adicionar'} tarefa</ModalHeader>
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

          <div className={stylesForm.buttonGroup}>
            {edit && (
              <>
                <Button color='success' className={stylesForm.buttonCheck}
                  onClick={checkTask}>Marcar como concluída</Button>
                <Button color='danger' className={stylesForm.buttonDelete}
                  onClick={createTask}>Deletar</Button>
              </>
            )}

            <Button className={stylesForm.buttonCreate} color='primary'
              onClick={edit ? editTask : createTask}>Salvar</Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  )
}
