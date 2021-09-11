let values="";
const input = document.getElementById("search")
const submit = document.getElementById("submitbutton")
input.addEventListener("change", (e)=>{
e.preventDefault();
values =e.target.value;
})
  const div = document.getElementById("header");
  const main = document.getElementById("weather");
const apikey = "1db79a731b58e87909262d144cb39fa9";
const url = (location) =>
 `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
 async function getWeatherByLocation(location){
 const resp = await fetch(url(location),{
 origin:"cors"});
 const respData = await resp.json();
 console.log(respData);
 addWeatherToPage(respData);
 }
 function addWeatherToPage(data){
 const temp = KtoC(data.main.temp);
 const weather = document.createElement("div");
 weather.classList.add("weather");
 weather.innerHTML = `
    <small>There are</small>
    <h2>${temp} °C</h2>
    <p>in ${values}</p>

 `;
 main.innerHTML = '';
 main.appendChild(weather);
 }
 function KtoC(K){
 return (K - 273.15).toFixed(2);
 }
 const atr = document.getElementById("articl");
 const CLIENT_ID = "Y2QQZWABORNJHCBRTCOMSQUMKGHOXP5LLZHC1RFYNWU3R43A";
 const CLIENT_SECRET = "UR1AFGMNE2NNSIWQA3BQIQHDIOUBVJX0FCT1YZZELC3SQZRI";
 const http = (location) =>
 `https://api.foursquare.com/v2/venues/explore?cat=food&near=40.7,-74&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20210101`;
async function getAtrByLocation(location){
const resp = await fetch(http(location),{
origin:"cors"});
const respData = await resp.json();
console.log(respData);
addAtrToPage(respData);
}
function addAtrToPage(result){
const atr = Kof(result.response.groups[0].items);
const ati = document.createElement("div");
ati.classList.add("atricl");
ati.innerHTML = `
<small>There are</small>
    <h2>${groups} C</h2>


`;
div.appendChild(atricl);
}


function Kof(C){
return C;
}
   submit.addEventListener("click", ()=>{
 console.log(values);
 getWeatherByLocation(values);
 getAtrByLocation(values);

 });




