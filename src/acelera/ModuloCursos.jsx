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


const ModuloCursos = () =>{
    return (
        <MDBContainer fluid>
    
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Cursos</p>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-left'>
    
                

    

    
    
                  <MDBBtn className='mb-4' size='lg'>Razonamiento Matematico</MDBBtn>
                  <MDBBtn className='mb-4' size='lg'>Geometria</MDBBtn>
                  <MDBBtn className='mb-4' size='lg'>Trigonometria</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-left'>
                  <MDBBtn className='mb-4' size='lg'>Lenguaje</MDBBtn>
                  <MDBBtn className='mb-4' size='lg'>Razonamiento Verbal</MDBBtn>
                  <MDBBtn className='mb-4' size='lg'>Historia</MDBBtn>
            
                </MDBCol>
    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
    

}
export default ModuloCursos