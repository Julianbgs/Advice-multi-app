export interface WeatherInterface {
  current: {
    condition: {
      icon: string;
      text: string;
    }
    temp_c: number;
  }
  location: {
    country: string;
    name: string;
  }
}
