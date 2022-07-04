import React from "react";
import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weather }) => {
    // Date
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let date = day + '/' + month + '/' + year

    // URL
    let url = ""
    let iconUrl = ""

    if (loadingData) {
        return <Spinner />
    }
    if (showData) {
        url = "http://openweathermap.org/img/w/"
        iconUrl = url + weather.weather[0].icon + ".png"
    }
    return (
        <div className="mt-5">
            {
                showData === true ? (

                    <div className="container">
                        <div className="card col-md-3 mx-auto text-light">
                            <h3 className="card-title">{weather.name}</h3>
                            <p className="card-date">{date}</p>
                            <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                            <p className="card-desc"><img src={iconUrl} alt="" />{weather.weather[0].description}</p>
                            <img src="https://images.pexels.com/photos/11153721/pexels-photo-11153721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="" />
                        </div>
                    </div>
                ) : (
                    <h2 className="text-light">Introduce una ciudad</h2>
                )
            }
        </div>
    )
}

export default Card