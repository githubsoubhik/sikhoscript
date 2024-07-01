let marks = [98,58,65,98,97,85,92,75,];

console.log(marks.length);


let sum = 0;
for (let number of marks){
   // console.log(number);

   sum = sum + number;


}

let avg = sum/marks.length;
console.log(" avg no  "+avg);