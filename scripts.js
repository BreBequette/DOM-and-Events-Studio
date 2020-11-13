// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleHeightNum = Number(shuttleHeight.innerHTML);
    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";

    document.getElementById("takeoff").addEventListener("click", function(){
       let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
       if (response){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";
       } 
    });

    document.getElementById("landing").addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    });
    
    document.getElementById("missionAbort").addEventListener("click", function(){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0"; 
        }
    });

    document.getElementById("up").addEventListener("click", function(){
        rocket.style.top = "-10px"; 
        shuttleHeightNum += 100000;
        shuttleHeight.innerHTML = String(shuttleHeightNum);
    });

    document.getElementById("down").addEventListener("click", function(){
        rocket.style.top = "10px"; 
        shuttleHeightNum -= 100000;
        shuttleHeight.innerHTML = String(shuttleHeightNum);
    });

    document.getElementById("left").addEventListener("click", function(){
        rocket.style.left = "-10px"; 
    });

    document.getElementById("right").addEventListener("click", function(){
        rocket.style.left = "10px"; 
    });

});