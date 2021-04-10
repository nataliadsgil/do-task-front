import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';
import UserService from '../services/user';

import {
  Card, CardBody, CardFooter, Form, FormGroup, Input, Button, CardHeader, Container, Alert
} from 'reactstrap'

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alertConf, setAlertConf] = useState({
    color: '',
    text: '',
    show: false
  })

  const router = useRouter();
  const loginUser = () => {
    UserService.login({ email, password }).then(result => {
      router.push('/list')
    })
      .catch(err => {
        setAlertConf({
          color: 'danger',
          text: err.message.error.message,
          show: true
        })
      })
  }
  return (
    <div className={styles.background}>
      <Container>
        <main className={styles.main}>
          <h1>DoTask</h1>
          <Card className={styles.login_card}>
            <CardHeader className={styles.card_header}>Login</CardHeader>
            <CardBody>
              {alertConf.show && <Alert color={alertConf.color}>{alertConf.text}</Alert>}
              <Form>
                <FormGroup>
                  <Input className={styles.input} placeholder="Email" type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Input className={styles.input} placeholder="Senha" type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>

                <Button className={styles.button} onClick={() => loginUser()} color='primary'>Entrar</Button>
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
