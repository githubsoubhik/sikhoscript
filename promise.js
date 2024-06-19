// let promise = new Promise((resolve, reject)=>{
//     console.log("It is  a promise");
//     // reject("some error");
//     resolve(123);
// });


const getPromise =() =>{

     return new Promise((resolve, reject)=>{
        console.log("It is  a promise");
       //  reject("some error");
        resolve(123);
    });

}

let promise = getPromise();

promise.then((res)=>{
    console.log("sucessee". res);
})
 promise.catch((err)=>{
    console.log("rejected");
 })