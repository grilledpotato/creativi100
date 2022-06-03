var path = window.location.pathname;
var page = path.split("/").pop();

function refreshTime() {
    const today = new Date();

    const date = {
        hours: String(today.getHours()).padStart(2, "0"),
        minutes: String(today.getMinutes()).padStart(2, "0"),
        seconds: String(today.getSeconds()).padStart(2, "0")
    };
    
    const timeDisplay = `${date.hours}:${date.minutes}:${date.seconds}`;
    
    if (page == "main.html") {
        document.getElementById("time").innerHTML = timeDisplay 
    } else {
        return
    }
}

function refreshDay() {
    let output2;
    switch (new Date().getDay()) {
        case 1:
            output2 = "Pondelok";
          break;
        case 2:
            output2 = "Utorok";
          break;
        case 3:
            output2 = "Streda";
          break;
        case 4:
            output2 = "Štvrtok";
          break;
        case 5:
            output2 = "Piatok";
          break;
        case 6:
            output2 = "Sobota";
          break;
        case 7:
            output2 = "Nedeľa";
      }
    if (page == "main.html") {
        document.getElementById("day").innerHTML = output2
    } else {
        return
    }
}

setInterval(refreshTime, 1000);
setInterval(refreshDay, 1000);