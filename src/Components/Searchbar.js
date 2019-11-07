import React, { Component } from 'react'
import { Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import style from "../style.module.css";

export default class SearchBar extends Component {

    state = {
        cityName: '',
        countryName: 'India',
    }

    // Handle Change Method
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ cityName: value.toUpperCase() });
        console.log(event.target.value);
    }

    // Handle Select
    handleSelect = (key, event) => {
        console.log(key);
        this.setState({ countryName: key });

    }

    //  Handler Submit Method
    handleSubmit = (event) => {
        event.preventDefault();
        if (document.getElementById('cityName').value === '') {
            alert("please enter your city name...");
        } else if (document.getElementById('cityName').value.match("^[a-zA-Z ]*$") === null) {
            alert("city name contain only Alphabets ");
        } else {
            //send data from searchbar to App.js
            this.props.sendDataFromSearchbar(this.state.cityName, this.state.countryName);

            this.setState({
                cityName: '',
                countryName: 'India'
            });
            return;
        }
    }

    render() {
        return (
            <div>
                <br />
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl
                        id="cityName"
                        type="text"
                        size=""
                        placeholder="Enter Your City Name..."
                        className={style.searchBar}
                        onChange={this.handleChange}
                    />
                    &nbsp;  &nbsp;
                    {/* className={style.dropdownButton} */}
                    <Dropdown onSelect={this.handleSelect}>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            {this.state.countryName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu  >
                            <Dropdown.Item eventKey="India">India</Dropdown.Item>
                            <Dropdown.Item eventKey="Australia">Australia</Dropdown.Item>
                            <Dropdown.Item eventKey="Canada" >Canada</Dropdown.Item>
                            <Dropdown.Item eventKey="London" >London</Dropdown.Item>
                            <Dropdown.Item eventKey="America">America</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;  &nbsp;
                    <Button
                        variant="outline-info"
                        type="submit"
                        className={style.searchButton}
                    >
                        Search...
                     </Button>
                </Form>
            </div>
        )
    }
}
