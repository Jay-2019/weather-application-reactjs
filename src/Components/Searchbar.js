import React from "react";
// import style from "../style.module.css";
import { Button, Form } from 'react-bootstrap';

class Searchbar extends React.Component {

    render() {

        return (
            <React.Fragment>
                <form>
                    <Form.Group controlId="formBasicSearch">

                        <Form.Control type="text" placeholder="Search..." />
                    </Form.Group>

                    <Button variant="info" type="submit">
                        Search...
                    </Button>

                </form>
            </React.Fragment>
        )
    }
}
export default Searchbar;