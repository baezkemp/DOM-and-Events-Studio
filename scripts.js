// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById('takeoff');
    let land = document.getElementById('landing');
    let abort = document.getElementById('missionAbort');
    let buttonUp = document.getElementById('buttonUp');
    let buttonDown = document.getElementById('buttonDown');
    let buttonLeft = document.getElementById('buttonLeft');
    let buttonRight = document.getElementById('buttonRight');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let rocket = document.getElementById('rocket');
    let positionX = 0;
    let positionY = 0;

    takeOff.addEventListener('click', function (){
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (response){
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10000';
        };
    });
    
    land.addEventListener('click', function (){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = '0';
        rocketHome();
    });

    abort.addEventListener('click', function (){
        let response = window.confirm('Confirm that you want to abort the mission.');
        if (response){
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
            rocketHome();
        };
    });

    buttonLeft.addEventListener('click', function(){
        moveRocket(-10,0);
    });

    buttonRight.addEventListener('click', function(){
        moveRocket(10,0);
    });

    buttonUp.addEventListener('click',function(){
        moveRocket(0,-10);
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString();
    });

    buttonDown.addEventListener('click',function(){
        moveRocket(0,10);
        let height = Number(spaceShuttleHeight.innerHTML);
        if (height > 0){
            spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) - 10000).toString();
        }
    });

    function moveRocket(moveX, moveY){
        positionX += moveX;
        positionY += moveY;
        rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }

    function rocketHome (){
        positionX = 0;
        positionY = 0;
        rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
});