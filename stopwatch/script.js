

    let hrs = min = sec = ms =0;

 function start(){
    document.querySelector(".start").classList.add("startbtn");
    document.querySelector(".stop").classList.remove("stopbtn");
    setTimer = setInterval(()=>{
        ms++;
        if(ms == 100){
            sec++;
            ms =0;
        }
        if(sec == 60){
            min++;
            sec=0;
        }
        if(min == 60){
            hrs++;
            min=0;
        }
        update();
    },10)

 }

 function stop(){
    document.querySelector(".stop").classList.add("stopbtn");
    document.querySelector(".start").classList.remove("startbtn");
    clearInterval(setTimer);
    update();

 }


 function reset(){
    hrs = min = sec = ms = 0;
    update();

 }


 function update(){
    dhrs = hrs < 10 ? "0" + hrs:hrs;
    dmin = min < 10 ? "0" + min:min;
    dsec = sec < 10 ? "0" + sec:sec;
    dms = ms < 10 ? "0" + ms:ms;

    document.querySelector(".hrs").innerHTML = dhrs;
    document.querySelector(".min").innerHTML = dmin;
    document.querySelector(".sec").innerHTML = dsec;
    document.querySelector(".ms").innerHTML = dms;
 }