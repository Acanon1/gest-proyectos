
import React from "react"
import SearchBar from "./Components/SearchBar"
import Footer from "./Components/Footer"
import { MDBContainer } from "mdb-react-ui-kit"

const Principal = () => {
    return <div>
        
        <SearchBar></SearchBar>
        <div>
            <MDBContainer>
                <div style={{margin: '40px'}}>
                    <h3>Desbloquea tu potencial</h3>
                    <h3>Porque tu educacion es primero</h3>
                </div>
                <div style={{margin: '40px'}}>
                    <h5>Nuestro curso promueve el aprendizaje autodidactivo</h5>
                    <h5>Entregamos educacion de manera interactiva</h5>
                </div>


            </MDBContainer>
        </div>

        <Footer></Footer>

    </div>
}

export default Principal