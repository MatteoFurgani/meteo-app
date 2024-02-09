import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MeteoIcons from "./MeteoIcons";

const MeteoResult = () => {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const city = new URLSearchParams(location.search).get("city");
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=040e52ee27b4e0f73daf06f0bcf91ee2&units=metric`
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        console.log("Weather Data:", data);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, [location.search]);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mt-5">
            {error ? (
              <p className="text-danger fs-1">{error}</p>
            ) : weatherData ? (
              <div>
                <h1 className="mb-4 text-warning">{weatherData.name}</h1>
                {/* Visualizza l'icona meteorologica */}
                <div className="d-flex justify-content-center">
                  <MeteoIcons
                    weatherDescription={weatherData.weather[0].main}
                  />
                  <p className="fs-3 d-flex flex-column justify-content-center mb-0 ps-2 text-warning">
                    {weatherData.main.temp}°C
                  </p>
                </div>
                <p className="mt-3 text-warning">
                  Description: {weatherData.weather[0].description}
                </p>
                <p className="text-warning">
                  Humidity: {weatherData.main.humidity}%
                </p>
                <p className="text-warning">
                  Pressure: {weatherData.main.pressure} hPa
                </p>
                <p className="text-warning">
                  Wind Speed: {weatherData.wind.speed} m/s
                </p>
                <p className="text-warning">
                  Wind Direction: {weatherData.wind.deg}°
                </p>
                <p className="text-warning">
                  Sunrise:{" "}
                  {new Date(
                    weatherData.sys.sunrise * 1000
                  ).toLocaleTimeString()}
                </p>
                <p className="text-warning">
                  Sunset:{" "}
                  {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
                </p>
                <p className="text-warning">
                  Visibility: {weatherData.visibility} meters
                </p>
              </div>
            ) : (
              <p className="text-warning">Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MeteoResult;
