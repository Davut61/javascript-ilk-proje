let userName= prompt("Kullanıcı Adını Girin:")
let ad = document.querySelector("#myName")
ad.innerHTML=`${userName}`

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cuma","Cumartesi",]



function showTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let info = document.querySelector("#myClock")
    info.innerHTML=`${h}: ${m}: ${s}: ${d}`

}

setInterval(showTime, 1000);

showTime();