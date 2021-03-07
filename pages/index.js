import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import {
  Card, CardBody, CardFooter, Form, FormGroup, Input, Button, CardHeader, Container
} from 'reactstrap'

export default function Home() {
  return (
    <Container>
      <main className={styles.main}>
        <h1>DoTask</h1>
        <Card>
          <CardHeader>Login</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Input placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input placeholder="Senha" />
              </FormGroup>

              <Button color='primary'>Entrar</Button>
            </Form>
          </CardBody>

          <CardFooter>
            <span>Ainda não tem uma conta?</span>
            <Link href="/register">Cadastre-se</Link>
          </CardFooter>
        </Card>
      </main>
    </Container>
  )
}
