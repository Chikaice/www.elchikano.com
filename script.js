 var currentHour = new Date().getHours();
 var greeting ='';

 if (currentHour >= 9 && currentHour < 12){
    greeting = 'Good morning,';
 }else if (currentHour >= 12 && currentHour < 18){
    greeting = 'Good afternoon,';
 }else{
    greeting = ' Good evening,';
 }

 document.getElementById('Greeting').innerText = greeting;