import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/login.module.css'

import {
  Card, CardBody, CardFooter, Form, FormGroup, Input, Button, CardHeader, Container
} from 'reactstrap'

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.background}>
      <Container>
        <main className={styles.main}>
          <h1>DoTask</h1>
          <Card className={styles.login_card}>
            <CardHeader className={styles.card_header}>Login</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Input className={styles.input} placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Input className={styles.input} placeholder="Senha" />
                </FormGroup>

                <Button className={styles.button} onClick={() => router.push('/list')} color='primary'>Entrar</Button>
              </Form>
            </CardBody>

            <CardFooter className={styles.card_footer}>
              <span>Ainda não tem uma conta?</span>
              <Link href="/register">Cadastre-se</Link>
            </CardFooter>
          </Card>
        </main>
      </Container>
    </div>
  )
}
