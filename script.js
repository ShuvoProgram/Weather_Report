const API_KEY = `4a175ad3312f6c1263e2cac207e23e5a`;

const loadTempuratureCity = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}

const displayTemp = data => {
    setInnerText("country", data.name);
    setInnerText("temp", data.main.temp)
    setInnerText("city", data.weather[0].main)
}

const setInnerText = (id, text) => {
    const tempurature = document.getElementById(id);
    tempurature.innerText = text;
}


document.getElementById("search-btn").addEventListener("click", function(){
    const searchField = document.getElementById("input-field");
    const city = searchField.value;
    // set city
    loadTempuratureCity(city);
})

