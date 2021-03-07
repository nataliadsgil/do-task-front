import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import {
  Card, CardBody, CardFooter, Form, FormGroup, Input, Button, CardHeader, Container
} from 'reactstrap'

export default function Register() {
  return (
    <Container>
      <main className={styles.main}>
        <h1>DoTask</h1>
        <Card>
          <CardHeader>Cadastro</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Input placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input placeholder="Senha" />
              </FormGroup>
              <FormGroup>
                <Input placeholder="Senha" />
              </FormGroup>
              <FormGroup>
                <Input placeholder="Repetir Senha" />
              </FormGroup>

              <Button color='primary'>Cadastrar</Button>
            </Form>
          </CardBody>

          <CardFooter>
            <span>Já tem uma conta?</span>
            <Link href="/">Fazer Login</Link>
          </CardFooter>
        </Card>
      </main>
    </Container>
  )
}
