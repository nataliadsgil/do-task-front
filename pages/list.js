import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  Container, Alert, Row, Col
} from 'reactstrap'
import moment from 'moment'

import NavBar from './components/navbar'
import AddButton from './components/addButton'
import ModalTask from './components/taskModal'
import Message from './components/message'
import TaskService from '../services/task'
export default function Home() {

  const [list, setList] = useState([

  ])

  let printDate = ''

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [editItem, setEditItem] = useState({});

  const toggleCreateModal = () => {
    setOpenCreateModal(!openCreateModal)
    setEditTask(false);
  }

  const closeMessageModal = () => {
    setOpenMessageModal(!openMessageModal)
  }

  const successTaskCreated = () => {
    setOpenCreateModal(false);
    listTasks();
  }

  const toggleEditModal = (item) => {
    setOpenCreateModal(!openCreateModal)
    setEditTask(true);
    setEditItem(item);
  }

  const listTasks = () => {
    TaskService.list().then(result => {
      var lista = result.data.taskList.sort((a, b) => {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c - d;
      })
      setList(lista);
    })
      .catch(err => {

      })
  }

  useEffect(() => {
    listTasks();
  }, [])

  return (
    <>
      <ModalTask edit={editTask} item={editItem} open={openCreateModal} close={toggleCreateModal} insert={successTaskCreated} />
      <Message open={openMessageModal} toggle={closeMessageModal} text={'Tarefa adicionada com sucesso!'} />
      <NavBar />
      <Container>
        <Row>
          {list.map(item => {
            const el = (
              <>
                {printDate !== item.date && (<Col md='12'>
                  <Alert color='light'>{moment(item.date).format('DD/MM/YYYY')}</Alert>
                </Col>)}
                <Col md='12'>
                  <Alert onClick={() => toggleEditModal(item)} color={item.check ? 'success' : 'primary'}>{item.description}</Alert>
                </Col>
              </>
            )
            printDate = item.date
            return el
          })}
        </Row>
      </Container>
      <AddButton onClick={toggleCreateModal} />
    </>
  )
}
