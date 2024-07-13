let company = [' Blombarge', 'Microsoft ', ' Uber', 'Google', 'IBNM', 'Tata']

console.log('delete first eliment');
 company.shift()

console.log(company);

console.log('Remove Uber add ola')

company.splice(2, 1, 'ola');

console.log(company);

console.log(' add amazon  at the end')

company.push('Amazon');

console.log(company);