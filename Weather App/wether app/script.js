const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="851f2ae5d60336a1089d5e0f4778c75f";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const wetherIcon=document.querySelector(".weather-icon");


const FetchUrl=async(city)=>{
    const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);
  

    if(response.status==404){
document.querySelector(".error").style.display="block";
document.querySelector(".image").style.display="none";
    }
    else{
var data=await response.json();
document.querySelector(".temp").innerHTML=data.name;
document.querySelector(".tempC").innerHTML=Math.round(data.main.temp)+"°c";
 document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
 document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

 if(data.weather[0].main == "Clouds"){
    wetherIcon.src="images/clouds.png"
 }
else if(data.weather[0].main=="Clear"){
    wetherIcon.src="images/clear.png"
}
else if(data.weather[0].main=="Rain"){
    wetherIcon.src="images/rain.png"
}
else if(data.weather[0]=="Drizzle"){
    wetherIcon.src="images/drizzle.png"

}
else if(data.weather[0]=="Mist"){
wetherIcon.src="image/images/mist.png"
}

document.querySelector(".image").style.display="block";
document.querySelector(".error").style.display="none";
    }
}

searchBtn.addEventListener("click",()=>{
FetchUrl( searchBox.value);
})
