function calc() {
    speed = document.getElementById("speed");
    way = document.getElementById("way");

    const speedLimit = 70;
    const pointsPerkm = 5;

    if(speed.value > speedLimit) {
        const points = Math.floor((speed.value-speedLimit)/pointsPerkm);
        if(points>=12)
            document.getElementById("out").innerHTML = ("Lisence Suspended");
        else
            document.getElementById("out").innerHTML = ("Points : ", points);
    }
    else
        document.getElementById("out").innerHTML = ("Good Going");
}