let time = document.getElementById("clock"); 
let counter = 59 ;
let sec = "59";
let min = "09";
let hour = "23"; 
let counter_min = 9; 
let counter_hour = 23 ;  
time.innerHTML = hour+":"+ min + ":" + sec ; 
function seconds() {

    if (counter == 60)
    {
        counter = 0;
        sec = "0" + counter.toString(); 
        time.innerHTML = hour+":"+ min + ":" + sec;
        console.log(time); 
        counter++;
        minutes(); 

    }
    else if (counter < 10) {
        sec = "0" + counter.toString();
        time.innerHTML = hour + ":" + min + ":" + sec;
        counter++;

    }
    else {
        sec = counter.toString() ; 
        time.innerHTML = hour+":"+ min + ":" + sec;
        console.log(time); 
        counter++;
    }
}
function minutes()
{
   
    if (counter_min == 60)
    {
        counter_min = 0;
        min = "0" + counter_min.toString(); 
        time.innerHTML = hour + ":" + min + ":" + sec;
        counter_min++; 
        counter_hour++; 
        hours(); 
       
        
        
     }
    else if (counter_min < 10  ) {
        
        time.innerHTML = hour + ":" + min + ":" + sec;
        counter_min++;
        
    }
        
    else {
        min = counter_min; 
        min = min.toString(); 
        time.innerHTML = hour + ":" + min + ":" + sec;
        counter_min++;
    }
}
function hours()
{
    
    if (counter_hour == 24  )
    {
        counter_hour = 0; 
       hour  = "0" + counter_hour;
        time.innerHTML = hour + ":" + min + ":" + sec;       
    }  
    // }
    else if (counter_hour < 10 )
    {
        counter_hour++; 
        hour = "0" + counter_hour; 
        time.innerHTML = hour + ":" + min + ":" + sec; 
        
    }
    else {
        hour = counter_hour.toString(); 
        time.innerHTML = hour + ":" + min + ":" + sec; 
        counter_hour++ ; 
    }
    }
setInterval(seconds, 1000); 