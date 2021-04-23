import {
  Navbar, NavbarBrand, NavItem, NavLink, Nav
} from 'reactstrap'
import { userName } from '../../services/user'
import styles from '../../styles/navbar.module.css'

export default function Home() {
  const getInitials = () => {
    return userName.split(" ").map((n) => n[0]).join("");
  }
  return (
    <Navbar className={styles.mainNavbar}>
      <NavbarBrand>DoTask</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink>{userName}</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
