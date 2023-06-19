import React from "react"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,

  } from 'mdb-react-ui-kit';
import SearchBar from "./Components/SearchBar";

const CrearCuenta = () =>{
    return (
        <MDBContainer fluid>
          <SearchBar></SearchBar>
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Crear Cuenta</p>
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Primer Nombre' id='form1' type='text' className='w-100'/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Email' id='form2' type='email'/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Contrasena' id='form3' type='password'/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput label='Repite tu contrasena' id='form4' type='password'/>
                  </div>
    
    
                  <MDBBtn className='mb-4' size='lg'>Registrarse</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                </MDBCol>
    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
    
}

export default CrearCuenta