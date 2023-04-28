### Project 2 of SEI General Assembly

# WEATHER APP by Michael NOEL

# React Weather App

This is a web application built with React that pulls weather data from APIs on open-meteo. The app allows users to search for a location, view a list of locations matching the search criteria, and select a location to display weather information.
There are 4 routes :

- introduction : general information on the app and how it works
- daily weather : weather for today + 6 days forecast, displayed in simple 'cards' with Temp, rainfall, sunrise time, sunset time and a weather icon reflecting the "weathercode" for the day (ex: sunny, heavy showers...)
- hourly weather : weather information hour by hour, plotted in a chart
- historical weather data: historical weather information plotted in a chart with the ability to select a date range. The historicals go back as far as 1940...

## Features

- A search bar allows users to search for a location.
- A list of locations matching the search criteria is returned with the corresponding country, latitude, longitude, and timezone.
- Users can then select a location to display weather information.
- Users can also add parameters : display data in fahrenheit instead of celsius, inches instead of mm, windspeed in kn instead of km/h.
- Once a location is selected, three APIs are called
- Hourly weather API pulls the weather for that location with a 7-day forecast.
- Hourly weather API also pulls hourly weather for the past two weeks and up to 14 days in advance.
- Historical API pulls historical weather records.
- For the Historical Weather : the app allow users to select the date range.
- The data is rendered in interactive charts from APEX charts react library.
- All APIs (location, daily weather, hourly weather, historical data) are from open-meteo

## Installation

1. Clone the repository to your local machine.
2. Open a terminal in the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.

## Usage

To use the app, follow these steps:

1. Enter a location in the search bar and click on the "Search" button.
2. A list of locations matching the search criteria will be displayed.
3. Select a location from the list to display weather information.
4. Use the date inputs to select the desired date range.
5. The daily weather is displayed in the form of weather cards
6. The hourly and historical weather information will be displayed in interactive charts: users can zoom in/out, a wider date range (for historical)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
