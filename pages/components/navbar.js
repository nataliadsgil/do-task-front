import { useEffect, useState } from 'react'
import {
  Navbar, NavbarBrand, NavItem, NavLink, Nav
} from 'reactstrap'
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


  const getInitials = () => {
    return userName.split(" ").map((n) => n[0]).join("");
  }
  return (
    <Navbar className={styles.mainNavbar}>
      <NavbarBrand>DoTask</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink>{username}</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
