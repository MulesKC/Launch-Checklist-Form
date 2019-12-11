// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm")

   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName]")

      let copilot = document.querySelector("input[name=copilotName]")
      
      let fuelLevel = document.querySelector("input[name=fuelLevel]")

      let cargoMass = document.querySelector("input[name=cargoMass]")

      if (pilot.value.length == 0 || 
         copilot.value.length == 0 || 
         fuelLevel.value.length == 0 || 
         cargoMass.value.length == 0) {
            alert("forgot something!");
            event.preventDefault();
         }

      if (isNaN(fuelLevel.value) ||
         isNaN(cargoMass.value) ||
         !isNaN(pilot.value) ||
         !isNaN(copilot.value)) {
         alert("invalid entry!");
         event.preventDefault();
      }


      //remove later
      // document.getElementById("faultyItems").style.visibility = "visible"

      
      
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} Ready`
      
      document.querySelector("#copilotStatus").innerHTML = `Copilot ${copilot.value} Ready`

      let launchStatus = document.getElementById("launchStatus")
      
      if (Number(fuelLevel.value) < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("fuelStatus").innerHTML = `Fuel: ${fuelLevel.value}. Not enough fuel!`
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      }

      if (cargoMass.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("cargoStatus").innerHTML = `Shuttle is too heavy!`
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      }

      launchStatus.innerHTML = "Shuttle is ready for launch"
      launchStatus.style.color = "green"

      //remove later
      event.preventDefault()

   })

})



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
