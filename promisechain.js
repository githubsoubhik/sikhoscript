function async1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Async 1   function");
            resolve("success");
        }, 4000);
    })
}

function async2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Async 2   function");
            resolve("success");
        }, 4000);
    })
}


//need async 1 then async 2 result

//  
//  p1= async1();

//  p1.then((res)=>{
//     console.log("data 1  success");
//     P2= async2();
//     P2.then((res)=>{
//         console.log("data2 success");
//     })
//  })


async1().then((res)=>{
    console.log("data 1 ");
    async2().then((res)=>{
        console.log("data 2");
    })
})