import React from 'react';
// import style from "../style.module.css";
import { Container, Row, Col } from 'react-bootstrap';
// import logo from "./logo192.png";
import ApiCall from "./ApiCall";
// import Searchbar from './SearchBar';
// import DisplayWeather from './DisplayWeather';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';


class App extends React.Component {

    state = {
        isLoading: false,
        getCityName: '',
        getCountryName: '',
        humidity: '',
        temp: '',
        temp_min: '',
        temp_max: '',
        pressure: '',
        lon: '',
        lat: '',
        description: '',
        visibility: '',
        cod: '',
        message: ''
    }

    //call-back function for get data from search Bar...
    getDataFromSearchbar = (getCity, getCountry) => {
        this.setState({ getCityName: getCity, getCountryName: getCountry, isLoading: true });
        console.log(getCity);
        console.log(getCountry);
        ApiCall.fetchWeatherDetails(getCity, getCountry, this.setWeatherDetails);
    }

    setWeatherDetails = (data = {}) => {
        console.log(data);
        const { cod, message } = data;
        const { coord } = data;
        const { lon, lat } = coord;

        const { weather = [] } = data;
        const [{ description, icon }] = weather;

        const { main = {} } = data;
        const { temp, pressure, humidity, temp_min, temp_max } = main;

        const { visibility } = data;

        const { wind } = data;
        const { speed, deg } = wind;

        const { clouds } = data;
        const { all } = clouds;

        const { sys } = data;
        const { sunrise, sunset } = sys;


        this.setState({
            isLoading: false,
            humidity,
            temp,
            temp_min,
            temp_max,
            pressure,
            lon,
            lat,
            description,
            visibility,
            cod,
            message
        });
    }

    renderNotFound = () => {
        const { cod, message } = this.state;
        if (cod && message) {
            return <>
                <div>{message}</div>
            </>
        }
    }

    renderWeatherDetails = () => {

        const { isLoading } = this.state;
        console.log(isLoading);
        if (isLoading) {
            return <>Loading...</>;
        }

        const { humidity = '', temp = '', temp_min = '', temp_max = '', pressure = '',
            lon = '', lat = '', description = '', visibility = '' } = this.state;
        // OR
        // const { humidity, temp, pressure } = this.state;

        if (!(humidity || temp || pressure || lon || lat)) {
            return null;
        }
        // OR
        // this is for beginners..
        // if ((humidity === '' || temp === '' || pressure === '' )) {
        //         return null;
        //     }

        return (
            <>
                <div>{`Humidity: ${humidity}`}</div>
                <div>{`Temperature: ${temp}`}</div>
                <div>{`Min Temperature: ${temp_min}`}</div>
                <div>{`Max Temperature: ${temp_max}`}</div>
                <div>{`Description: ${description}`}</div>
                <div>{`Pressure: ${pressure}`}</div>
                <div>{`Longitude: ${lon}`}</div>
                <div>{`Latitude: ${lat}`}</div>
                <div>{`Visibility: ${visibility}`}</div>
            </>
        );
    }

    render() {
        return (
            <Container fluid="true">
                {/* this is Header on Application which Contain a NavBar */}
                <NavigationBar />

                {/* this is A Searchbar for Application */}
                <SearchBar sendDataFromSearchbar={this.getDataFromSearchbar} />

                {/* this is a body of application  */}
                <Row>
                    <Col>
                        <h2>
                            {this.state.getCityName}, {this.state.getCountryName}
                        </h2>

                        <h2>
                            {/* {this.renderWeatherDetails()} */}
                            {this.state.cod === "404" ? this.renderNotFound() : this.renderWeatherDetails()}
                        </h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {/*this is DisplayWeather component.  */}
                        {/* <DisplayWeather weather={this.state} /> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default App;
