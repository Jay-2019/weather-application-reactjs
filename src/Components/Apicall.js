import React from 'react'

class Apicall extends React.Component {

    state = {
        getCityName: this.props.setCityName,
    }


    Apicall = async (e) => {

        // const cityName = this.props.setCityName;
        const cityName = this.state.getCityName;
        console.log(cityName);
        const getReasponse = await fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}appid=a0dee3ad64641dc88ea823ed96aaec61`);
        const getWeather = await getReasponse.json();
        console.log(getWeather);
        // send  getWather to app.js using a call back method
        // getWeather is available as a props for display weather in the Displayweather.js component
        return
    }

    render() {

        return (
            <React.StrictMode>
                api calling...
            </React.StrictMode>
        )
    }
}
export default Apicall;