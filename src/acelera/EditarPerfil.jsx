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

const EditarPerfil = () => {
    return (
        <MDBContainer fluid>
    
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Editar Perfil</p>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Primer Nombre' id='form1' type='text' className='w-100'/>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Segundo Nombre' id='form1' type='text' className='w-100'/>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Primer Apellido' id='form1' type='text' className='w-100'/>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Segundo Apellido' id='form1' type='text' className='w-100'/>
                  </div>
    
                  
    
           
    
    
                  <MDBBtn className='mb-4' size='lg'>Guardar</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                    <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Direccion' id='form1' type='text' className='w-100'/>
                    </div>
                    
                    <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Ciudad' id='form1' type='text' className='w-100'/>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Codigo Postal' id='form1' type='text' className='w-100'/>
                    </div>


                    





  </MDBCol>

              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
    
}


export default EditarPerfil