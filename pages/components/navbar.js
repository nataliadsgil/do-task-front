import {
  Navbar, NavbarBrand, NavItem, NavLink, Nav
} from 'reactstrap'

export default function Home() {
  return (
    <Navbar color="dark">
      <NavbarBrand>DoTask</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink>Natália</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
