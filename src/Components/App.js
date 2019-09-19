import React from 'react';
import style from "../style.module.css";
import { Container, Row, Navbar, Col } from 'react-bootstrap';
import logo from "./logo192.png";
import apiCall from "./Apicall";
import Searchbar from './Searchbar';

class App extends React.Component {

    state = {
        isLoading: false,
        getCityName: '',
        humidity: '',
        temp: '',
        pressure: '',
    }

    //call-back function for get data from search Bar...

    getDataFromSearchbar = (getData) => {
        this.setState({ getCityName: getData, isLoading: true });
        console.log(getData);
        apiCall.fetchWeatherDetails(getData, this.setWeatherDetails);
    }

    setWeatherDetails = (data = {}) => {
        const { main = {}} = data;
        const { humidity, temp, pressure } = main;
        this.setState({
            isLoading: false,
            humidity,
            temp,
            pressure,
        });
    }

    renderWeatherDetails = () => {
        const { isLoading } = this.state;
        if (isLoading) {
            return <h4>API Calling...</h4>;
        }
        const { humidity='', temp='', pressure=''} = this.state;
        if (!(humidity || temp || pressure)) {
            return null;
        }
        return (
            <>
                <div>{`Humidity: ${humidity}`}</div>
                <div>{`Temperature: ${temp}`}</div>
                <div>{`Pressure: ${pressure}`}</div>
            </>
        );
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

                {this.renderWeatherDetails()}

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
