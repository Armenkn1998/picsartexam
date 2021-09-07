let values="";
const input = document.getElementById("lname")
const submit = document.getElementById("submitbutton")
input.addEventListener("change", (e)=>{
values =e.target.value;
})
const wather = submit.addEventListener("click", ()=>{
console.log(values)

const alo=fetch(`http://api.openweathermap.org/data/2.5/weather?q=${values}&appid=1db79a731b58e87909262d144cb39fa9`,{
method:'GET',
headers:{

'Content-Type':'application/json'
}}).then(res => {return console.log(res.json())
}).then(data => console.log(data))
.catch(error => console.log(error))
console.log(alo);
})