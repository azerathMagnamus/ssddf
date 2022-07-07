// Caught Speeding CS10 Review

// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let driverSpeedInput = document.getElementById("driver-speed");
let speedLimitInput = document.getElementById("speed-limit");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", btnclicked);

function btnclicked() {
  // Input
 
  let driverSpeed = +driverSpeedInput.value;
  let speedLimit = +speedLimitInput.value;

  // Process & Output
 outputSpan.innerHTML=giveticket(driverSpeed,speedLimit)
}
function giveticket(drivespeed,drivelimit){
  if (drivespeed>=20+drivelimit) {
   return "BIG TICKET"}
  else if (drivespeed <=drivelimit){
   return "NO TICKET"}
  else{
  return 'SMALL TICKET'}
}

