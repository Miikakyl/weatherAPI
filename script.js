let printingArea = document.querySelector("#forecastArea")

document.querySelector("#cityBtn").addEventListener("click", () => {
	
	let input = document.querySelector("#cityInput").value
	
	fetch(`https://api.weatherapi.com/v1/current.json?key=af3545b97ba64c5aab0113045221305&q=${input}&aqi=no`)
	.then(response => response.json())
	.then(response => printFunction(response))
	.catch(err => console)
})

let printFunction = (data) => {
	
	let iconArea = document.querySelector("#icon")
	let cityArea = document.querySelector("#city")
	let celcius = document.querySelector("#celcius")
	let text = document.querySelector("#text")
	
	cityArea.innerHTML = `${data.location.name}/${data.location.country}`
	iconArea.innerHTML = `<img src=${data.current.condition.icon}>`
	celcius.innerHTML = `${data.current.temp_c }°C`
	text.innerHTML = data.current.condition.text
}