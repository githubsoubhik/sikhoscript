
function getdata(dataid){
    return new Promise((resolve, reject)=>{
    
        setTimeout(()=>{
            console.log(dataid);

            resolve(dataid);
            
        },2000);
   });

}

async function getalldata(){
    await getdata(1);

    await getdata(2);

    await getdata(3);


}

getalldata();