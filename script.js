setInterval(() => {let mytime = new Date();
    let dat= mytime.getDate();
    let min = mytime.getMinutes();
    let yrs = mytime.getFullYear();
    let hrs = mytime.getHours();
    const days = ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"];
    let day = days[mytime.getDay()];
    const months = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "August", "October", "November", "December"];
    let month = months[mytime.getMonth()];
    let sec = mytime.getSeconds();
    
    document.getElementById('time').innerHTML =  dat + 'th of ' + month  + ' ' + yrs +" " + hrs +":" + min + ":" + sec +"  on  " + day;
}, 1000);
