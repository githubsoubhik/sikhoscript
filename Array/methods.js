//in string apply methods gives new string
// But In Array  applying methods sometimes give new array or sometimes array only change the value


//PUSH()

// in push method add the value at the end of array

foods = ['rice ', 'dal', 'curry', 'curd'];
 
foods.push('chips');
console.log(foods);


//POP()

// In pop method  delete the item in  array at the end

foods.pop();
console.log('applying pop method -');
console.log(foods);


//TOSTRING

// in toString methods  convert array to string


console.log('applying toString method:  '+ foods.toString());


//  CONCAT

// IN concat mthod we cand add two array   and return New array.


let vegetables =[ 'potato', 'Brinja', ' green Mengo', 'Onion', 'ginger'];

foodItems=foods.concat(vegetables);

console.log('applying concat method:  ');
console.log(foodItems);


//UNSHIFT

// unshift method add eliment in the first in the array

foods.unshift('Salad');

console.log('applying unshift method:  ');
console.log(foods);


//SHIFT

// shift method delete eliment in the first in the array

deletedItemsVal=foodItems.shift();

console.log('applying shift() method in foodItems and return deletedItemsVal value')
console.log(deletedItemsVal);

console.log('after applying shift method')

console.log(foodItems);


//SLICE()

//  slice(startIndex, endIndex)  method gives picece   of array  
//  this method doesnot change original array 


console.log('apply slice  method in vegetables-')
console.log(vegetables.slice(2,4));


// splice Method









