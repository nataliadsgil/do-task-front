import { useEffect, useState } from 'react'
import {
  Navbar, NavbarBrand, NavItem, Button, Nav
} from 'reactstrap'
import { useRouter } from 'next/router';
import { userName } from '../../services/user'
import styles from '../../styles/navbar.module.css'
import UserService from '../../services/user'

export default function Home() {

  const [username, setUsername] = useState('');

  useEffect(() => {
    UserService.getUser().then(result => {
      console.log("sdadsadasd", result);
      setUsername(result.data.name);
    });
  }, [])


  const router = useRouter();
  const getInitials = () => {
    return userName.split(" ").map((n) => n[0]).join("");
  }

  return (
    <Navbar className={styles.mainNavbar}>
      <NavbarBrand><Button style={{
        backgroundColor: 'transparent', border: 'none', outline: 'none'
      }} onClick={() => router.push('/list')}>DoTask</Button></NavbarBrand>
      <Nav>
        <NavItem>
          <Button style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }} className={styles.button_perfil} onClick={() => router.push('/perfil')} >{username}</Button>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
