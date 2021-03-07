import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import UserService from '../services/user'
import {
  Card, CardBody, CardFooter, Form, FormGroup, Input, Button, CardHeader, Container
} from 'reactstrap'
import { useState } from 'react';

export default function Register() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword] = useState('');
  const insertUser = () =>{    
    if ( password !== confirmPassword ) {
      console.log('Senhas não são iguais');  
    } else {
      UserService.create({ name, email, password }).then(result =>{
        alert(name, 'foi cadastrado')
      })
    }    
  }

  return (
    <Container>
      <main className={styles.main}>
        <h1>DoTask</h1>
        <Card>
          <CardHeader>Cadastro</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Input placeholder="Nome" type='text' value={name} onChange={(e)=> setName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input placeholder="E-mail" type='text' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <Input placeholder="Senha" type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <Input placeholder="Repetir Senha" type='password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
              </FormGroup>

              <Button color='primary' onClick={()=> insertUser()} >Cadastrar</Button>
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
