import { Component } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter {
  celsius: string | null;
  fahrenheit: string | null;

  updateForm(
    temperature: string | null,
    category: 'celsius' | 'fahrenheit'
  ): void {
    if (temperature === null) {
      this.resetForm();
      return;
    }

    if (category === 'celsius') {
      const fahrenheit = this.convertToFahrenheit(Number(temperature));
      this.setFahrenheit(fahrenheit.toFixed(1));
    } else {
      const celsius = this.convertToCelsius(Number(temperature));
      this.setCelsius(celsius.toFixed(1));
    }
  }

  private convertToFahrenheit(celsius: number): number {
    return celsius * 9 / 5 + 32;
  }

  private convertToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }

  private resetForm(): void {
    this.celsius = null;
    this.fahrenheit = null;
  }

  private setFahrenheit(fahrenheit: string): void {
    this.fahrenheit = fahrenheit;
  }

  private setCelsius(celsius: string): void {
    this.celsius = celsius;
  }

}