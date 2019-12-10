// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm")

   form.addEventListener("submit", function(event) {
      let pilotVal = document.querySelector("input[name=pilotName]")

      let copilotVal = document.querySelector("input[name=copilotName]")
      
      let fuelLevelVal = document.querySelector("input[name=fuelLevel]")

      let cargoMassVal = document.querySelector("input[name=cargoMass]")

      if (pilotVal.value.length == 0 || 
         copilotVal.value.length == 0 || 
         fuelLevelVal.value.length == 0 || 
         cargoMassVal.value.length == 0) {
            alert("forgot something!")
            event.preventDefault()
         }

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
