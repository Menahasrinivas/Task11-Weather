async function api(){
    try{
        data= fetch("https://restcountries.com/v3.v1/all")
        out = await data;
        prom = out.json();
        final = await prom;
        parent = document.querySelector('.container')
        parent1 = document.querySelector(`.row`)
        final.forEach(element = > {

          parent1.innerHtml +=`
          <div class ="card h-100">
          <div id = "cardDetails" clas"col-xl-4 col-lg-4 col-md-4 col-sm-6">
          <div class="card-header">
          <h5 class="card-title">${element.name.common}</h5>
          <div class="card-body">
          <img src="${element.flags.png}" class="card-img-top" alt="...">
          <div class = "card-text">
          <ul class="list-group">
          <li class="list-group-item card-text"><b>Capital:${element.capital}</li>
          <li class="list-group-item card-text"><b>Region:${element.region}</li>
          <li class="list-group-item card-text"><b>Country Code:${element.latlng}</li>
          <li class="list-group-item card-text"><b>Country Code:${element.cca2}</li>
          </div>
           <button class = "btn btn-primary"target="_blank" value="${element.name.common}">Click Here for Weather</button>
          </div>
          </div>` 
          parent.append(parent1) 

          let btn = document.querySelectorAll(".btn");
          btn.forEach((ele)=>{
            let value = ele.value
            console.log(value)
            async function weather(){
                let res = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey`)
                let ress =await res
                let res11 = ress.json()
                let res1 = await res11

                console.log(res1)
                ele.innerhtml = `weather${res1.weather[0].description}<br>Temp:${res1.main.temp}<br>lon:${res1.coord.lon}lat${res1.coord.lat}`
           
            }

          })
        })
    });
}
catch(error){
console.log(error)
}
}
api()