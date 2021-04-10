import {
  Navbar, NavbarBrand, NavItem, NavLink, Nav
} from 'reactstrap'

import styles from '../../styles/navbar.module.css'

export default function Home() {
  return (
    <Navbar className={styles.mainNavbar}>
      <NavbarBrand>DoTask</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink>Natália</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
