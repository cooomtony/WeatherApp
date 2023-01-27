
function getCity(){

    stockholm = document.getElementById("City").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${stockholm}&units=metric&appid=e97cf1e91d5435f12b1cbba7bca48948`)
        .then(svar => svar.json())
        .then(json => {
            skapakort(json)
            console.log(json)
        }
)}

function skapakort(veder){

    var divkort = document.createElement("div");
    var bild = document.createElement("img");
    var divrad = document.createElement("div");
    var h5 = document.createElement("h5");
    var p = document.createElement("p");
    var maxtemp = document.createElement("p");
    var mintemp = document.createElement("p");
    
   
    divkort.setAttribute("class", "card");
    divkort.setAttribute("style","width:22rem");
    divrad.setAttribute("class","card-body");
    h5.setAttribute("class","card-title");
    p.setAttribute("class","card-text");
    maxtemp.setAttribute("class","card-text");
    mintemp.setAttribute("class","card-text");
    bild.setAttribute("src", "http://openweathermap.org/img/wn/" + veder.weather[0].icon + "@4x.png");
    bild.setAttribute("class","card-img-top");

    
    
    var kort = document.body.appendChild(divkort);
    
    divkort.appendChild(bild);
    divkort.appendChild(divrad);
    h5.innerText = veder.name;
    divrad.appendChild(h5);
    p.innerText = "current temp " + Math.trunc(veder.main.temp) + "°C";
    divrad.appendChild(p);
    maxtemp.innerText = "maxTemp today " + Math.trunc(veder.main.temp_max) + "°C";
    divrad.appendChild(maxtemp);
    mintemp.innerText = "minTemp today " + Math.trunc(veder.main.temp_min) + "°C";
    divrad.appendChild(mintemp);
    
    return kort;





}



