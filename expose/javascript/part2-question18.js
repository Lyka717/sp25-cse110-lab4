function currSeconds(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(currSeconds, 1000);