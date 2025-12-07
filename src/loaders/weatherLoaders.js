import axios from "axios";

export const getWeatherByCity = async ({ request }) => {
    try{
    const API_KEY = "b3ea3946cd08306b75c8e73b04e6a794";
    const url = new URL(request.url);   // 'http://localhost:3000/search?q=a'
    const s = url.searchParams.get("q") || "Dnipro" ;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${s}&appid=${API_KEY}&units=metric`);
        return response.data;
    }
    catch(err){
        throw new Error(err.response?.data?.message || "Не вдалося завантажити користувача");
    }
};
