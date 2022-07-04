import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const PanelWheather = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=237d6f5dd8ff023845666cb58f2b92bf&lang=es"
    let cityUrl = "&q="

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=237d6f5dd8ff023845666cb58f2b92bf&lang=es"

    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [,setLocation] = useState("")

    const getLocation = async (loc) => {
        setLoading(true)
        setLocation(loc)

        // weather
        urlWeather = urlWeather + cityUrl + loc

        await fetch(urlWeather).then((response) => {
            // eslint-disable-next-line no-throw-literal
            if (!response.ok) throw response 
            return response.json()

        }).then((weatherData) => {
            setWeather(weatherData)
            setWeather(weatherData)
        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)

        })

        // forescat

        urlForecast = urlForecast + cityUrl + loc

        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw response
            return response.json()

        }).then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false);
            setShow(true)

        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })
    }

    return (

        <React.Fragment>
            <Form
                newLocation={getLocation}
            />

            <Card
                showData={show}
                loadingData={loading}
                weather={weather}
                forecast={forecast}
            />
        </React.Fragment>
    )
}

export default PanelWheather