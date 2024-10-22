let count = 0;
let interval = setInterval(() => {
    console.log("hello");
    count++;
    if(count === 10){
        clearInterval(interval); 
    }
},1000);