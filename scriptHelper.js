// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const div = document.getElementById("missionTarget");
    div.innerHTML = `
                    <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter} </li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                    </ol>
                   <img src="${imageUrl}">
    `;
    
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if(testInput === "") {
       return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    }else {
        return "Is a Number";
    }
 }
    //let list = document.getElementById("faultyItems");

    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    let cargoStatus = document.getElementById("cargoStatus");
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;


    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        window.alert("All fields are required");
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        list.style.visibility = "hidden";
        
    }
    if (validateInput(pilot)== "Is a Number" || validateInput(copilot) == "Is a Number" || validateInput(fuelLevel) != "Is a Number" || validateInput(cargoMass) != "Is a Number") {
        alert("Make Sure to enter valid information for each field!");
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        list.style.visibility = "hidden";

    } 
    if (fuelLevel < 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        list.style.visibility = "visible";
        
        
    } 
   
    if (cargoMass > 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";          // too much mass for launch
        launchStatus.style.color = "red";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        list.style.visibility = "visible";
    
    } 
    
    if (fuelLevel >= 10000 && cargoMass <= 10000) {
       launchStatus.innerHTML = "Shuttle is Ready for Launch";                                                                 // ready for launch
       launchStatus.style.color = 'green';
       list.style.visibility = "visible";
    }
 
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    //if (planets !== undefined) {
        let index = Math.floor(Math.random()*planets.length);
        let planet =  planets[index];
        return planet;
    
 }

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;