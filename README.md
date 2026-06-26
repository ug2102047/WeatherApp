# Weather App

A simple weather app built with HTML, CSS, and JavaScript. It fetches live weather data from the OpenWeatherMap API and updates the UI with temperature, humidity, wind speed, and weather condition icons.

## Features 

- Search weather by city name
- Live API data from OpenWeatherMap
- Displays temperature, humidity, wind speed, and condition icon
- Responsive card-based UI

## Project Structure

```text
index.html
style.css
script.js
weather-app-img/
```

## Run the Project

You can open `index.html` directly in a browser, but the recommended way is to use Live Server in VS Code.

### Using Live Server

1. Install the **Live Server** extension in VS Code.
2. Open `index.html`.
3. Click **Go Live**.
4. The app will open in your browser and reload automatically when you save changes.

### Using a simple local server

If you prefer, you can run a quick local server from the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## API Note

The app uses an OpenWeatherMap API key inside `script.js`. If the key stops working, replace it with your own API key from OpenWeatherMap.

## How It Works

- Enter a city name in the search box.
- The app requests weather data from the OpenWeatherMap API.
- The page updates the weather information and icon based on the API response.

## Requirements

- A modern web browser
- Internet connection for API requests
- A valid OpenWeatherMap API key
