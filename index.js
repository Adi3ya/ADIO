function loadCoupon(){
    document.getElementById('coupon-code').style.visibility = 'visible';
    document.getElementById('main').style.display = 'none';
}
function closeCoupon(){
    document.getElementById('coupon-code').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1';
}


function changemode(){
    let mybody = document.body;
    let togglemode = document.getElementById('toggle-icon');
    mybody.classList.toggle('night');  
}

function geolocation(){
    
    let weather = document.getElementById('weather');
    let location = document.getElementById('location');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition);
    }else{
        location.innerText = "Geo process not applicable";
    }
}

function showposition(data){
    console.log(data);

    let lat = data.coords.latitude;
    let long = data.coords.longitude;

    let out = `Latitude: ${lat}, Longitude: ${long}`;
    location.innerText = out;
    console.log(out);

    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&&long=${long}&&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

    // api calling -> to get data from api, we are using get method...its POST incase of inserting data to api link 
    fetch(url,{method:'GET'})

    // return promise -> waiting period for the response
    .then((response)=>response.json())

    // return data
    .then((data)=>{
        console.log(data);
        let city = data.city;
        let temperature = data.list[0].temp.day;

        weather.innerText = `Location : ${city} & Weather : ${temperature}°C`;
    })
}
