import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: WeatherData[];
  
  private weatherDataByName = new Map<string, WeatherData>();
  cityName: string | null;
  filteredWeatherData: WeatherData | undefined;

  ngOnInit() {
    this.setWeatherDataByName(this.weatherData);
  }

  updateDataToDisplay(cityNameToSearh: string | null): void {
    if (cityNameToSearh === null) {
      this.filteredWeatherData = undefined;
      return;
    }

    this.filteredWeatherData = this.weatherDataByName.get(cityNameToSearh.toLowerCase());
  }

  private setWeatherDataByName(weatherData: WeatherData[]): void {
    for (const weather of weatherData) {
      this.weatherDataByName.set(weather.name.toLowerCase(), weather);
    }
  }

}

interface WeatherData {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
