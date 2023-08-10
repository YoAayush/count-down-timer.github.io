var x = window.prompt("enter the date to start the timer: ");

const enddate = x;
document.getElementById("edit").innerText = enddate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(enddate),
    end_hr = end.getHours(),
    end_min = end.getMinutes(),
    end_sec = end.getSeconds(),
    end_milsec = end.getMilliseconds();

    const current = new Date(),
        cur_hr = current.getHours(),
        cur_min = current.getMinutes(),
        cur_sec = current.getSeconds(),
        cur_milsec = current.getMilliseconds();

    console.log(end);
    console.log(current);

    const diff = (end - current)/1000;

    //in days
    const day_left = Math.floor(diff / 3600 / 24);
    console.log("days : " + day_left);

    // in hours
    const hrs_left = Math.floor(diff / 3600) % 24;
    console.log("hours : " + hrs_left);

    // in minutes
    const min_left = Math.floor(diff / 60) % 60;
    console.log("minutes :" + min_left);

    //in seconds
    const sec_left = Math.round(diff) % 60;
    console.log("seconds : " + sec_left);

    inputs[0].value = day_left;
    inputs[1].value = hrs_left;
    inputs[2].value = min_left;
    inputs[3].value = sec_left;
}
setInterval(clock,1000);
