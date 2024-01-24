import React from 'react';
import './Weather.css';

import useFetch from '../../utils/useFetch';
import Search from './Search';
import Weather from './WeatherList';

export default function WeatherContainer() {
  const [address, setAddress] = React.useState('');

  const { data, loading: fetchLoading, error } = useFetch(address);

  const handleSearch = async (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <div className="container">
      <Search onSubmit={handleSearch} />

      

      {error && <p>Error: {error}</p>}

      <Weather data={data} loading={fetchLoading} />
    </div>
  );
};

/* {
  "@context": [
    "https://geojson.org/geojson-ld/geojson-context.jsonld",
    {
      "@version": "1.1",
      "wx": "https://api.weather.gov/ontology#",
      "geo": "http://www.opengis.net/ont/geosparql#",
      "unit": "http://codes.wmo.int/common/unit/",
      "@vocab": "https://api.weather.gov/ontology#"
    }
  ],
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          -76.927978699999997,
          38.867095599999999
        ],
        [
          -76.931757199999993,
          38.845150499999995
        ],
        [
          -76.903575899999993,
          38.842205499999999
        ],
        [
          -76.899791599999986,
          38.864150299999999
        ],
        [
          -76.927978699999997,
          38.867095599999999
        ]
      ]
    ]
  },
  "properties": {
    "updated": "2024-01-24T02:30:04+00:00",
    "units": "us",
    "forecastGenerator": "BaselineForecastGenerator",
    "generatedAt": "2024-01-24T05:02:09+00:00",
    "updateTime": "2024-01-24T02:30:04+00:00",
    "validTimes": "2024-01-23T20:00:00+00:00/P7DT5H",
    "elevation": {
      "unitCode": "wmoUnit:m",
      "value": 75.895200000000003
    },
    "periods": [
      {
        "number": 1,
        "name": "Overnight",
        "startTime": "2024-01-24T00:00:00-05:00",
        "endTime": "2024-01-24T06:00:00-05:00",
        "isDaytime": false,
        "temperature": 33,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": null
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 1.1111111111111112
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 92
        },
        "windSpeed": "5 mph",
        "windDirection": "SE",
        "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
        "shortForecast": "Mostly Cloudy",
        "detailedForecast": "Mostly cloudy, with a low around 33. Southeast wind around 5 mph."
      },
      {
        "number": 2,
        "name": "Wednesday",
        "startTime": "2024-01-24T06:00:00-05:00",
        "endTime": "2024-01-24T18:00:00-05:00",
        "isDaytime": true,
        "temperature": 49,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 20
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 5.5555555555555554
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 96
        },
        "windSpeed": "6 mph",
        "windDirection": "SE",
        "icon": "https://api.weather.gov/icons/land/day/rain_showers/rain,20?size=medium",
        "shortForecast": "Chance Rain Showers then Patchy Fog",
        "detailedForecast": "A chance of rain showers between 7am and 10am, then a chance of rain showers and patchy fog between 10am and 3pm, then patchy fog and a slight chance of rain. Cloudy, with a high near 49. Southeast wind around 6 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."
      },
      {
        "number": 3,
        "name": "Wednesday Night",
        "startTime": "2024-01-24T18:00:00-05:00",
        "endTime": "2024-01-25T06:00:00-05:00",
        "isDaytime": false,
        "temperature": 46,
        "temperatureUnit": "F",
        "temperatureTrend": "rising",
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 60
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 11.666666666666666
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 96
        },
        "windSpeed": "6 to 10 mph",
        "windDirection": "S",
        "icon": "https://api.weather.gov/icons/land/night/rain,30/rain,60?size=medium",
        "shortForecast": "Patchy Fog then Light Rain Likely",
        "detailedForecast": "Patchy fog and a slight chance of rain before 10pm, then rain likely and patchy fog. Cloudy. Low around 46, with temperatures rising to around 54 overnight. South wind 6 to 10 mph. Chance of precipitation is 60%. New rainfall amounts less than a tenth of an inch possible."
      },
      {
        "number": 4,
        "name": "Thursday",
        "startTime": "2024-01-25T06:00:00-05:00",
        "endTime": "2024-01-25T18:00:00-05:00",
        "isDaytime": true,
        "temperature": 63,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 80
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 13.888888888888889
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 96
        },
        "windSpeed": "9 mph",
        "windDirection": "SW",
        "icon": "https://api.weather.gov/icons/land/day/rain,80?size=medium",
        "shortForecast": "Light Rain",
        "detailedForecast": "Rain and patchy fog. Cloudy, with a high near 63. Southwest wind around 9 mph, with gusts as high as 20 mph. Chance of precipitation is 80%. New rainfall amounts between a tenth and quarter of an inch possible."
      },
      {
        "number": 5,
        "name": "Thursday Night",
        "startTime": "2024-01-25T18:00:00-05:00",
        "endTime": "2024-01-26T06:00:00-05:00",
        "isDaytime": false,
        "temperature": 55,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 50
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 14.444444444444445
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 100
        },
        "windSpeed": "12 mph",
        "windDirection": "SW",
        "icon": "https://api.weather.gov/icons/land/night/rain,50/rain,40?size=medium",
        "shortForecast": "Chance Light Rain",
        "detailedForecast": "A chance of rain and patchy fog. Cloudy, with a low around 55. Southwest wind around 12 mph, with gusts as high as 18 mph. Chance of precipitation is 50%."
      },
      {
        "number": 6,
        "name": "Friday",
        "startTime": "2024-01-26T06:00:00-05:00",
        "endTime": "2024-01-26T18:00:00-05:00",
        "isDaytime": true,
        "temperature": 66,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 40
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 14.444444444444445
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 100
        },
        "windSpeed": "12 mph",
        "windDirection": "W",
        "icon": "https://api.weather.gov/icons/land/day/rain,40/rain,20?size=medium",
        "shortForecast": "Chance Light Rain then Patchy Fog",
        "detailedForecast": "A chance of rain and patchy fog before 7am, then patchy fog and a slight chance of rain between 7am and 1pm. Mostly cloudy, with a high near 66. Chance of precipitation is 40%."
      },
      {
        "number": 7,
        "name": "Friday Night",
        "startTime": "2024-01-26T18:00:00-05:00",
        "endTime": "2024-01-27T06:00:00-05:00",
        "isDaytime": false,
        "temperature": 44,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": null
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 10.555555555555555
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 96
        },
        "windSpeed": "10 mph",
        "windDirection": "N",
        "icon": "https://api.weather.gov/icons/land/night/bkn/rain?size=medium",
        "shortForecast": "Mostly Cloudy then Slight Chance Light Rain",
        "detailedForecast": "A slight chance of rain after 1am. Mostly cloudy, with a low around 44."
      },
      {
        "number": 8,
        "name": "Saturday",
        "startTime": "2024-01-27T06:00:00-05:00",
        "endTime": "2024-01-27T18:00:00-05:00",
        "isDaytime": true,
        "temperature": 54,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 50
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 6.666666666666667
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 96
        },
        "windSpeed": "8 mph",
        "windDirection": "NE",
        "icon": "https://api.weather.gov/icons/land/day/rain,30/rain,50?size=medium",
        "shortForecast": "Chance Light Rain",
        "detailedForecast": "A chance of rain. Mostly cloudy, with a high near 54. Chance of precipitation is 50%."
      },
      {
        "number": 9,
        "name": "Saturday Night",
        "startTime": "2024-01-27T18:00:00-05:00",
        "endTime": "2024-01-28T06:00:00-05:00",
        "isDaytime": false,
        "temperature": 43,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 80
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 7.2222222222222223
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 100
        },
        "windSpeed": "8 to 13 mph",
        "windDirection": "NE",
        "icon": "https://api.weather.gov/icons/land/night/rain,80?size=medium",
        "shortForecast": "Light Rain",
        "detailedForecast": "Rain. Cloudy, with a low around 43. Chance of precipitation is 80%."
      },
      {
        "number": 10,
        "name": "Sunday",
        "startTime": "2024-01-28T06:00:00-05:00",
        "endTime": "2024-01-28T18:00:00-05:00",
        "isDaytime": true,
        "temperature": 49,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 80
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 6.666666666666667
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 100
        },
        "windSpeed": "13 mph",
        "windDirection": "N",
        "icon": "https://api.weather.gov/icons/land/day/rain,80/rain,60?size=medium",
        "shortForecast": "Light Rain",
        "detailedForecast": "Rain. Cloudy, with a high near 49. Chance of precipitation is 80%."
      },
      {
        "number": 11,
        "name": "Sunday Night",
        "startTime": "2024-01-28T18:00:00-05:00",
        "endTime": "2024-01-29T06:00:00-05:00",
        "isDaytime": false,
        "temperature": 36,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": 40
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 4.4444444444444446
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 85
        },
        "windSpeed": "15 mph",
        "windDirection": "NW",
        "icon": "https://api.weather.gov/icons/land/night/rain,40/rain,30?size=medium",
        "shortForecast": "Chance Light Rain",
        "detailedForecast": "A chance of rain. Mostly cloudy, with a low around 36. Chance of precipitation is 40%."
      },
      {
        "number": 12,
        "name": "Monday",
        "startTime": "2024-01-29T06:00:00-05:00",
        "endTime": "2024-01-29T18:00:00-05:00",
        "isDaytime": true,
        "temperature": 44,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": null
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": 1.1111111111111112
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 89
        },
        "windSpeed": "15 mph",
        "windDirection": "NW",
        "icon": "https://api.weather.gov/icons/land/day/rain/bkn?size=medium",
        "shortForecast": "Slight Chance Light Rain then Partly Sunny",
        "detailedForecast": "A slight chance of rain before 7am. Partly sunny, with a high near 44."
      },
      {
        "number": 13,
        "name": "Monday Night",
        "startTime": "2024-01-29T18:00:00-05:00",
        "endTime": "2024-01-30T06:00:00-05:00",
        "isDaytime": false,
        "temperature": 30,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": null
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": -2.2222222222222223
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 85
        },
        "windSpeed": "9 to 13 mph",
        "windDirection": "NW",
        "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
        "shortForecast": "Partly Cloudy",
        "detailedForecast": "Partly cloudy, with a low around 30."
      },
      {
        "number": 14,
        "name": "Tuesday",
        "startTime": "2024-01-30T06:00:00-05:00",
        "endTime": "2024-01-30T18:00:00-05:00",
        "isDaytime": true,
        "temperature": 44,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
          "unitCode": "wmoUnit:percent",
          "value": null
        },
        "dewpoint": {
          "unitCode": "wmoUnit:degC",
          "value": -1.6666666666666667
        },
        "relativeHumidity": {
          "unitCode": "wmoUnit:percent",
          "value": 92
        },
        "windSpeed": "10 mph",
        "windDirection": "NW",
        "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
        "shortForecast": "Partly Sunny",
        "detailedForecast": "Partly sunny, with a high near 44."
      }
    ]
  }
} */
