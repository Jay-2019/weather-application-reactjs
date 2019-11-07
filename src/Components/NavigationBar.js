import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import logo from './logo192.png';

export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        {' YourWeather.in '}
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
