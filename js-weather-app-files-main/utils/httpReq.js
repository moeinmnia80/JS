import showModal from "./modal.js";

const API_KEY = "ab0f3e79baf94501f315bade07860a8c";
const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const getWeatherData = async (type, data) => {
  let url;
  switch (type) {
    case "current":
      if (typeof data === "string") {
        url = `${BASE_URL}/weather?q=${data}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${BASE_URL}/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
      }
      break;
    case "forecast":
      if (typeof data === "string") {
        url = `${BASE_URL}/forecast?q=${data}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${BASE_URL}/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
      }
      break;

    default:
      url = `${BASE_URL}/forecast?q=tehran&appid=${API_KEY}&units=metric`;
      break;
  }
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (+result.cod === 200) {
      showModal("Successfully fetching", "success");
      return result;
    } else {
      showModal(result.message, "error");
      // console.log(result);
    }
  } catch (e) {
    console.log("An error occurred in fetching data");
  }
};

export default getWeatherData;
