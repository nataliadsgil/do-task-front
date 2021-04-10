import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../styles/login.module.css'
import UserService from '../services/user'
import {
  Card, CardBody, CardFooter, Form, FormGroup, Input, Button, CardHeader, Container, Alert
} from 'reactstrap'
import { useState } from 'react';
import { route } from 'next/dist/next-server/server/router';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [alertConf, setAlertConf] = useState({
    color: '',
    text: '',
    show: false
  })

  const insertUser = () => {
    if (password !== confirmPassword) {
      setAlertConf({
        color: 'danger',
        text: 'Senhas não são iguas!',
        show: true
      })
    } else {
      UserService.create({ name, email, password }).then(result => {
        setAlertConf({
          color: 'success',
          text: 'Cadastro efetuado com sucesso',
          show: true
        })

        setTimeout(() => {
          router.push('/list');
        }, 1000)
      })
    }
  }

  return (
    <div className={styles.background}>
      <Container>
        <main className={styles.main}>
          <h1>DoTask</h1>
          <Card className={styles.login_card}>
            <CardHeader className={styles.card_header}>Cadastro</CardHeader>
            <CardBody>
              {alertConf.show && <Alert color={alertConf.color}>{alertConf.text}</Alert>}
              <Form>
                <FormGroup>
                  <Input className={styles.input} placeholder="Nome" type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Input className={styles.input} placeholder="E-mail" type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Input className={styles.input} placeholder="Senha" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Input className={styles.input} placeholder="Repetir Senha" type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </FormGroup>

                <Button className={styles.button} color='primary' onClick={() => insertUser()} >Cadastrar</Button>
              </Form>
            </CardBody>

            <CardFooter className={styles.card_footer}>
              <span>Já tem uma conta?</span>
              <Link href="/">Fazer Login</Link>
            </CardFooter>
          </Card>
        </main>
      </Container>
    </div>
  )
}
