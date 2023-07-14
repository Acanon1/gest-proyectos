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



const Problemas =()=>{
    return (
        
        <MDBContainer fluid>
          <SearchBar></SearchBar>
    
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Problemas del modulo</p>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <table>
                        <tr>En un congreso virtual asistieron 60 varones y 90 mujeres. 
                            En un determinado momento se retiraron un grupo de mujeres,
                             por lo que el porcentaje de varones aumentó en 20 %. ¿Cuántas mujeres se retiraron? </tr>
                        <tr>A: 50</tr>
                        <tr>B: 62</tr>
                        <tr>C: 38</tr>
                        <tr>D: 60</tr>
                        <tr><MDBInput  id='form1' type='text' className='w-100'/></tr>
                    </table>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <table>
                        <tr>Un comerciante vende mascarillas; el primer día vende la mitad, 
                            el segundo día vende la tercera parte del resto y el tercer día vende la quinta parte del nuevo resto.
                             Si al final le quedan 120 mascarillas, ¿cuántas mascarillas vendió el segundo día?  </tr>
                        <tr>A: 68</tr>
                        <tr>B: 75</tr>
                        <tr>C: 95</tr>
                        <tr>D: 70</tr>
                        <tr><MDBInput  id='form1' type='text' className='w-100'/></tr>
                    </table>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <table>
                        <tr>Una tienda vende un producto haciendo descuento primero uno de 15% y 
                            luego otro de 15%. Una segunda tienda, que tiene el mismo producto y al mismo precio de lista , realiza un descuento del 30%,
                             ¿cuánto de descuento (en %) o de incremento (en %)
                             debe efectuar la segunda tienda para que en ambas tiendas el producto tenga el mismo precio final? La respuesta aproximada es  </tr>
                        <tr>A: descuenta 3,2% </tr>
                        <tr>B: incrementa 3,2% </tr>
                        <tr>C: descuenta 6,4% </tr>
                        <tr>D: Ninguna de las anteriores</tr>
                        <tr><MDBInput  id='form1' type='text' className='w-100'/></tr>
                    </table>
                  </div>

            
    
                  <MDBBtn className='mb-4' size='lg'>Enviar respuestas</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
            
                    <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <table>
                        <tr>Se tiene las mismas cantidades de limones de 2 clases, 
                            unas de 2 por un sol y las otras de 3 por un sol. 
                            Si se juntan y se venden a 5 por 2 soles, ¿qué tanto por ciento se gana o pierde? </tr>
                        <tr>A: Se gana 2%</tr>
                        <tr>B: Se gana 4% </tr>
                        <tr>C: Se pierde 4% </tr>
                        <tr>D: No se gana ni se pierde </tr>
                        <tr><MDBInput  id='form1' type='text' className='w-100'/></tr>
                    </table>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <table>
                        <tr>Un comerciante compra sillas a S/.32 cada una.
                            Anuncia su venta a P soles, de modo que cuando haga un descuento del 20% a sus clientes, 
                            resulte ganando 20% sobre el precio real de venta. ¿Cuál es el valor de P? </tr>
                        <tr>A: 38,4 </tr>
                        <tr>B: 46 </tr>
                        <tr>C: 50  </tr>
                        <tr>D: Ninguna de las anteriores </tr>
                        <tr><MDBInput  id='form1' type='text' className='w-100'/></tr>
                    </table>
                  </div>
                    
                    


                    





  </MDBCol>

              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );

}

export default Problemas