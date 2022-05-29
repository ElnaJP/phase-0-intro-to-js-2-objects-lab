// Write your solution in this file!
const employee = {
    name: 'Sarah Dipity',
  streetAddress: '123 OakWood'
  }
  
 

  function updateEmployeeWithKeyAndValue(employee) {
       return {
      name: 'Sam',
      streetAddress: '11 Broadway'
       }  
  }

console.log(employee['name', 'streetAddress']);

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    employee[key] = 'Sam';
    employee[key] = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(object, key) {
let clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}


function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}






    
 
 