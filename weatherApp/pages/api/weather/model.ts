export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherCore[];
  base: string;
  main: {
    temp: number;
    temp_min: number;
    humidity: number;
    pressure: number;
    feels_like: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    deg: number;
    speed: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
    id: number;
    type: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherCore {
  icon: string;
  description: string;
  main: string;
  id: number;
}
