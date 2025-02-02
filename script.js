// Write your JavaScript code here!
window.addEventListener("load", function(){

   let planetIndex = 4;

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {

         let missionTarget = document.getElementById("missionTarget")

         missionTarget.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[planetIndex]["name"]}</li>
               <li>Diameter: ${json[planetIndex]["diameter"]}</li>
               <li>Star: ${json[planetIndex]["star"]}</li>
               <li>Distance from Earth: ${json[planetIndex]["distance"]}</li>
               <li>Number of Moons: ${json[planetIndex]["moons"]}</li>
            </ol>
         <img src="${json[planetIndex]["image"]}"></img>`

      })
   })

   let form = document.getElementById("launchForm")

   form.addEventListener("submit", function(event) {

      let pilot = document.querySelector("input[name=pilotName]")

      let copilot = document.querySelector("input[name=copilotName]")
      
      let fuelLevel = document.querySelector("input[name=fuelLevel]")

      let cargoMass = document.querySelector("input[name=cargoMass]")
      
      

      // if (pilot.value.length == 0 || 
      //    copilot.value.length == 0 || 
      //    fuelLevel.value.length == 0 || 
      //    cargoMass.value.length == 0) {
      //       alert("forgot something!");
      //       event.preventDefault();
      //    }

      // let letterCheck = /^[a-zA-Z]+$/;
      

      // if (isNaN(fuelLevel.value) ||
      //    isNaN(cargoMass.value) ||
      //    !pilot.value.match(letterCheck) ||
      //    !copilot.value.match(letterCheck)) {
      //    alert("invalid entry!");
      //    event.preventDefault();
      // }


      //remove later
      // document.getElementById("faultyItems").style.visibility = "visible"

      
      
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} Ready`
      
      document.querySelector("#copilotStatus").innerHTML = `Copilot ${copilot.value} Ready`

      let launchStatus = document.getElementById("launchStatus")

      let ready = true
      
      if (Number(fuelLevel.value) < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("fuelStatus").innerHTML = `Fuel: ${fuelLevel.value}. Not enough fuel!`
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
         ready = false
         event.preventDefault();
      }

      if (cargoMass.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("cargoStatus").innerHTML = `Shuttle is too heavy!`
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
         ready = false
         event.preventDefault();
      }

      if (ready) {
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green"
         event.preventDefault();
      }
   })

})

function randomNum() {
   return Math.round((Math.random()*5))
}
