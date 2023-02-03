import axios from 'axios'

//const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

/*
const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': '9da21e7aa8msh06c55481bdcf967p135afdjsn214c9d51df7b',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  */

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/current', {
    params: { lon: lng, lat: lat },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  });
  console.log("weather data:", data);
  return data;
  } catch (error) {
    console.log(error)
  }
}