import React, {useState} from "react"

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

const SearchBar = () => {

    const [showBasic, setShowBasic] = useState(false);

    return (
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Acelera tu ingreso</MDBNavbarBrand>
  
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
  
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>
       

              
  
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Cursos</MDBDropdownItem>
                    <MDBDropdownItem link>Logros</MDBDropdownItem>
                    <MDBDropdownItem link>Historial</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control'  aria-label='Search' />
              <MDBBtn color='primary'>Buscar</MDBBtn>
            </form>
            </MDBNavbarNav>
            
  
            <form className='d-flex input-group w-auto'>
          
              <MDBBtn color='primary'>Registrarse</MDBBtn>
            </form>
            <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Cerrar Sesion
                </MDBNavbarLink>
              </MDBNavbarItem>

   
            
          </MDBCollapse>
          
        </MDBContainer>
      </MDBNavbar>
    );
}

export default SearchBar