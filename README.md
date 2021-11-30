# Weather system made by: Rogerbatt

### How it works?

The system request a permission to access your locale, and get the Latitude and Longitude to consume an Weather API.

[DEMO](https://rogerio-weather.vercel.app/ "Enter to see how it works.")

### Technologies used:
- Javascript
- ReactJS
- NextJS
- TailwindCSS
- Axios
- React-Use

------------

# What i need to run?

### Step #01
- You need to get an API Key from https://openweathermap.org/.

### Step #02
- Change in ./pages/cardWeather/cardWerather.jsx the line 14 (/weather?lat=${location.latitude}&lon=${location.longitude}&lang=pt_br&units=metric&appid= {API key})
- Or change the .env like:  API_KEY={Key}

### Step #03
- Run in the terminal: npm run dev

#### And now you have the system runing.
