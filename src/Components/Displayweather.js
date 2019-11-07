import React from 'react';
import { Card} from 'react-bootstrap';

class DisplayWeather extends React.Component {
state={
    cityName:this.props.weather.getCityName,
    countryName:this.props.weather.getCountryName
}
    render() {

        return (
            <React.Fragment>

            <br />

          <Card bg="info" text="white" style={{ width: '18rem' }}>
      <Card.Header>{this.state.cityName},{this.state.countryName}</Card.Header>
  <Card.Body>
    <Card.Title>Info Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk
      of the card's content.
    </Card.Text>
  </Card.Body>
</Card>
<br />
   </React.Fragment>
        )
    }
}
export default DisplayWeather;