import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudRain } from "@fortawesome/free-solid-svg-icons";

const weatherIcons = {
  clear: faSun,
  clouds: faCloud,
  rain: faCloudRain,
};

const MeteoIcons = ({ weatherDescription }) => {
  const icon = weatherIcons[weatherDescription.toLowerCase()];

  return icon ? (
    <FontAwesomeIcon icon={icon} size="5x" style={{ color: "white" }} />
  ) : null;
};

export default MeteoIcons;
