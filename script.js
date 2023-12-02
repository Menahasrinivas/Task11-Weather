function element(country, classname, id, text){
  let crtag = document.createElement(country);
  crtag.classList = classname;
  crtag.id =id;
  crtag.innerHTML = text;
  return crtag;
}


let container = element("div", "container","", "");
const h1 = element("h1", "text-center", "title", "Rest Countries Weather From API");
const row = element("div", "row", "", "");

const response = fetch("https://restcountries.com/v3.1/all");
response
.then((data)=> data.json())
.then((card1)=>{
  for(let i=0;i <card1.length;i++){
     const col = document.createElement("div");
     col.classList ="col-sm-6","col-md-4","col-lg-4","col-xl-4";
col.innerHTML =`
<div class= "card h-100">
<h5 class = "card-title text-center">${card1[i].name.common}</h5>
</div>
<div class = "img-box">
<img src="${card1[i].flags.png}" class="card-img-top" alt="..."/>
</div>
<div class = "card-body">
<div class="card-text">Region: ${card1[i].region}</div>
<div class="card-text">Capital: ${card1[i].capital}</div>
<div class="card-text">Countrycode: ${card1[i].cca3}</div>


<button class = "btn btn-primary"> Click Here for Weather</button>
</div>
<div>`;
row.append(col);
  }
  let btns = document.querySelectorAll("button");
  btns.forEach((btn, index)=>{
    btn.addEventListener("click",()=>{
      let latlng = card1[index].latlng;
      let lat = latlng[0];
      let lng = latlng[1];
                                                
      let weatherAPI = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=429a23dee47c5972025ec631391cc139&units=metric`);
         weatherAPI
         .then((data)=> data.json())
         .then((value)=>         
alert( `weather of ${card1[index].name.common}= ${math.floor(
  value.main.temp
)}°C`
)         
         );

    });
  });

});
document.body.append(h1,container);
container.append(row);




























// const url="https://restcountries.com/v3.1/all";
// fetch (url)
// .then((data)=> data.json())
// .then((countries21)=>{
//   const countries21 = document.getElementById("countries-container");

//   for(let i=0;i <countries21.length;i++){
//     const country = countries21[i];
//     const countryDiv = document.createElement("div");
//     countryDiv.classList.add(
//       "country-card","col-sm-6","col-md-4","col-lg-4","col-xl-4"
    
//     );
//     const nativeName = country.name &&country.name.nativeName && country.name.nativeName.eng
//     ? country.name.nativeName.eng.common || "N/A" : "N/A";

// countryDiv.innerHTML = `
// <div class= "card h-100">
// <div class = "card-header">
// <h5 class = "card-title">${country.name.common}</h5>
// </div>
// <div class = "card-body">
// <img src="${country.flags.svg}" class="card-img-top" alt="Flag">

// <div class="card-text">Region: ${country.region}</div>
// <div class="card-text">Capital: ${country.capital}</div>
// <div class="card-text">Countrycode: ${country.cca3}</div>
// <div class="card-text">Native Name: ${nativeName}</div>
// <div class="card-text">Population: ${country.population}</div>

// <button class = "btn btn-primary" onclick ="getWeatherData(${country.latlng[0]}, ${country.latlng[1]}, '${country.cca3}', '${country.name.common}')">
// Click Here for Weather
// </button>
// <div id ="weather-${country.cca3}" class="mt-3"></div>
// </div>
// </div>
// `;
// countriesContainer.appendChild(countryDiv);
// }


// });

// function getWeatherData(latitude, longitude, countryCode){
//   const apikey = "8a02350c859d72fd590d6f4bb751370d";
//   const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
// fetch(weatherUrl)
// .then((data)=> data.json())
// .then((weather)=>{
//   const weatherContainer = document.getElementById(
//     `weather-${countryCode}`

//   );
//   if(weatherContainer){
//     weatherContainer.innerHTML=`
//     <p class ="card-text"><strong>Temperature:</strong>${weather.main.temp}°C</p>
//     <p class ="card-text"><strong>Weather:</strong>${weather.weather[0].description}</p>
//     `;
//   }
// });

// }
                                                                                      