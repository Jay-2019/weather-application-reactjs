import React from "react";
// import style from "../style.module.css";
import { Button, Form, Row, Col } from 'react-bootstrap';


class Searchbar extends React.Component {

    state = {
        cityName: '',
    }

    //  Handler Submit Method
    handleSubmit = (event) => {
        event.preventDefault();
        if (document.getElementById('cityName').value === '') {
            alert("please enter your city name...");
        } else if (document.getElementById('cityName').value.match("^[a-zA-Z ]*$") === null) {
            alert("city name contain only Alphabets ");
        } else {
            this.props.sendDataFromSearchbar(this.state.cityName);
            this.setState({ type: '' });
            return;
        }


    }

    // Handle Change Method
    handleChange = (event) => {
        this.setState({ cityName: event.target.value });
        console.log(event.target.value);
    }


    render() {

        return (
            <React.Fragment>

                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md={10}>
                            <Form.Group >
                                <Form.Control
                                    id="cityName"
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Your City Name..."
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={1}>
                            <Button
                                variant="info"
                                type="submit"
                                size="lg"
                            >
                                Search...
                            </Button>
                        </Col>
                    </Row>
                </form>
            </React.Fragment>
        )
    }
}
export default Searchbar;