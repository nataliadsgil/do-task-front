import Link from 'next/link'
import { useState } from 'react'

import {
  Container, Alert, Row, Col
} from 'reactstrap'

import NavBar from './components/navbar'

export default function Home() {

  const [list, setList] = useState([
    {
      date: '2021-03-07',
      title: 'Desenvolver algorito para aula de algoritmos',
      done: true
    },
    {
      date: '2021-03-07',
      title: 'Pesquisar sobre 4ª revolução industrial',
      done: false
    },
    {
      date: '2021-03-08',
      title: 'Arrumar o quarto',
      done: false
    },
    {
      date: '2021-03-08',
      title: 'Comprar café, pão e biscoito',
      done: false
    },
    {
      date: '2021-03-09',
      title: 'Entregar trabalho para professor de redes',
      done: false
    },
    {
      date: '2021-03-09',
      title: 'Devolver o livro na biblioteca',
      done: false
    },
    {
      date: '2021-03-09',
      title: 'Formatar notebook',
      done: false
    }
  ])

  let printDate = ''

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          {list.map(item => {
            const el = (
              <>
                {printDate !== item.date && (<Col md='12'>
                  <Alert color='light'>{item.date}</Alert>
                </Col>)}
                <Col md='12'>
                  <Alert color={item.done ? 'success' : 'primary'}>{item.title}</Alert>
                </Col>
              </>
            )
            printDate = item.date
            return el
          })}
        </Row>
      </Container>
    </>
  )
}
