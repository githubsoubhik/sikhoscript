// function getdata(dataid){
//     setTimeout(()=>{

//         console.log(dataid);

//     }, 2000)
// }

// getdata(2);
// getdata(4);

// we need oneby one data

function getdata(dataid , callbackdata){
    setTimeout(()=>{
        console.log(dataid);
        callbackdata();

    },2000)
}

getdata(1, ()=>{
    console.log("get data 1");
    getdata(2, ()=>{
        console.log("get data 2");
        getdata(3, ()=>{
            console.log("getdata 3");
            getdata(4, ()=>{
                console.log("get data 4")
            })
        })
    
    })
})