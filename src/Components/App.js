import React from 'react';
import style from "../style.module.css";
import { Container, Row, Navbar, Col } from 'react-bootstrap';
import logo from "./logo192.png";

import Searchbar from './Searchbar';
class App extends React.Component {

    render() {

        return (
            <Container fluid="true" className={style.containerStyle}>
                {/* this is Header on Application which Contain a NavBar */}
                <Row className={style.nabbarStyle}>
                    <Col md={12}>
                        <Navbar expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand href="#home">
                                <img
                                    alt="Allpication_Brand"
                                    src={logo}
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                />
                                {'  YourWeather.in  '}
                            </Navbar.Brand>
                        </Navbar>
                    </Col>
                </Row>
                {/* this is Body of Application Which Contain A SearchBar */}
                <Row>
                    <Col>
                        <Searchbar />
                    </Col>
                </Row>

                {/* this is Footer of Application */}


            </Container>

        )
    }
}
export default App;