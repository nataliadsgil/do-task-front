import {
  Navbar, NavbarBrand, NavItem, Button, Nav
} from 'reactstrap'
import { useRouter } from 'next/router';
import { userName } from '../../services/user'
import styles from '../../styles/navbar.module.css'

export default function Home() {
  const router = useRouter();
  const getInitials = () => {
    return userName.split(" ").map((n) => n[0]).join("");
  }

  return (
    <Navbar className={styles.mainNavbar}>
      <NavbarBrand>DoTask</NavbarBrand>
      <Nav>
        <NavItem>
          <Button className={styles.button_perfil} onClick={() => router.push('/perfil')} >{userName}</Button>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
