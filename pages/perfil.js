import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/perfil.module.css'
import {
    Container, Alert, Row, Col, CardBody
} from 'reactstrap'
import NavBar from './components/navbar'

import {
    Form, FormGroup, Input, Button, Nav
} from 'reactstrap'

export default function Perfil() {
    const router = useRouter();
    const [name, setName] = useState('Daniel');
    const [email, setEmail] = useState('d@moya.com');
    return (
        <div>
            <NavBar />
            <Container>
                <Form className={styles.formPerfil}>
                    <FormGroup className={styles.FormGroup}>
                        <Input className={styles.input} placeholder="Nome" type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup className={styles.FormGroup}>
                        <Input className={styles.input} placeholder="E-mail" type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>

                    <Button className={styles.button} onClick={() => { }} >Alterar Dados</Button>
                </Form>

            </Container>
        </div>
    )
}