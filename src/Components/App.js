import React from 'react';
import style from "../style.module.css";
import { Container, Row, Navbar, Col } from 'react-bootstrap';
import logo from "./logo192.png";
import Apicall from "./Apicall";
import Searchbar from './Searchbar';

class App extends React.Component {

    state = {
        getCityName: '',
    }

    //call-back function for get data from search Bar...

    getDataFromSearchbar = (getData) => {
        this.setState({ getCityName: getData });
        console.log(getData);
        // Apicall(this.state.cityName);
    }



    render() {



        return (
            <Container fluid="true" className={style.containerStyle}>

                {/* this is Header on Application which Contain a NavBar */}
                <Row className={style.navbarStyle}>

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
                            <p>Helps you find weather conditions in cities...</p>
                        </Navbar>
                    </Col>


                </Row>

                {/* this is A Searchbar for Application */}
                <Row>
                    <Col>
                        {/* now getDataFromSearchbar callBack method is available as a props to Searchbar.js component */}
                        <Searchbar sendDataFromSearchbar={this.getDataFromSearchbar} />
                    </Col>
                </Row>

                {/* Here we Render Api-component for Json Response */}
                <Apicall setCityName={this.state.getCityName} />


                {/* this is a body of application  */}
                <Row>
                    <Col>
                        <h2>
                            {this.state.getCityName} India

                        </h2>
                    </Col>
                </Row>




            </Container>

        )
    }
}
export default App;