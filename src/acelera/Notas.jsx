import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,


  } from 'mdb-react-ui-kit';
import SearchBar from "./Components/SearchBar";


const Notas =()=> {
    return (
        <MDBContainer fluid>
          <SearchBar></SearchBar>
    
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Notas del curso</p>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-left'>
    
                

    

    
    
                  <MDBBtn className='mb-4' size='lg'>Razonamiento Verbal intro</MDBBtn>
                  <p>nota examen: 13</p>
                  <MDBBtn className='mb-4' size='lg'>Razonamiento Verbal I</MDBBtn>
                  <p>nota examen: 17</p>
                  <MDBBtn className='mb-4' size='lg'>Razonamiento Verbal II</MDBBtn>
                  <p>nota examen: -</p>


                  <MDBCard style={{ maxWidth: "15rem" }}>
                    Promedio total: 10
                  </MDBCard>
                  

    
                </MDBCol>
    

    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
    


}

export default Notas