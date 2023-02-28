function Decoder(bytes, port) {
  const pm25 = (bytes[0] << 8) | bytes[1];

  // classify pm25 using https://www.airgradient.com/open-airgradient/blog/ikea-vindriktning-accuracy/
  var us_aqi_pm25 = "NA";
  switch (true) {
    case pm25 < 13:
      us_aqi_pm25 = "GOOD";
      break;
    case pm25 < 36:
      us_aqi_pm25 = "MODERATE";
      break;
    case pm25 < 56:
      us_aqi_pm25 = "UNHEALTHY SENSITIVE IND";
      break;
    case pm25 < 151:
      us_aqi_pm25 = "UNHEALTHY";
      break;
    case pm25 < 251:
      us_aqi_pm25 = "VERY UNHEALTHY";
      break;
    default:
      us_aqi_pm25 = "HAZARDUS";
      break;
  }

  var ikea_sensor_color = "NA";
  switch (true) {
    case pm25 < 36:
      ikea_sensor_color = "GREEN";
      break;
    case pm25 < 86:
      ikea_sensor_color = "YELLOW";
      break;
    default:
      ikea_sensor_color = "RED";
      break;
  }

  var decodedPayload = {
    "pm-25": pm25,
    "us-aqi-pm25": us_aqi_pm25,
    "ikea-sensor-color": ikea_sensor_color,
  };

  return Serialize(decodedPayload);
}