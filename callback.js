function sum(a,b){
    console.log(a+b);
};

function add(x,y, callfunc){
    callfunc(x,y)
}


add(1,2,sum);
