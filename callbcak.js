console.log("Timer Start");

setTimeout(()=>{
    console.log("Inside timeout. This runs later.")
}, 2000);

console.log("Timer end(but timeout is still working");